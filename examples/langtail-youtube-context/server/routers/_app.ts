import fs from "fs";
import OpenAI from "openai";
import youtubeDl from "youtube-dl-exec";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { lt } from "@/lib/utils";
import { procedure, router } from "../trpc";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

function parseYTDate(dateString: string) {
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);

  return new Date(`${year}-${month}-${day}`);
}

export const appRouter = router({
  getVideos: procedure.query(async () => {
    return await prisma.video.findMany();
  }),
  getVideo: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async (opts) => {
      console.log(opts.input.id);
      const video = await prisma.video.findUnique({
        where: {
          id: opts.input.id,
        },
      });

      console.log(video);

      return video;
    }),
  getVideoInfo: procedure
    .input(
      z.object({
        url: z.string(),
      })
    )
    .mutation(async (opts) => {
      try {
        const info = await youtubeDl(opts.input.url, {
          dumpSingleJson: true,
          noCheckCertificates: true,
          noWarnings: true,
          preferFreeFormats: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        });

        // save video info to database
        const video = await prisma.video.create({
          data: {
            url: info.webpage_url,
            title: info.title,
            description: info.description,
            thumbnail: info.thumbnail,
            publishedAt: parseYTDate(info.upload_date),
          },
        });

        return { info, video };
      } catch (error) {
        console.error(error);
      }
    }),

  processViaAutoTranscription: procedure
    .input(
      z.object({
        url: z.string(),
        lang: z.enum(["en", "cs"]).default("en"),
        videoId: z.string(),
      })
    )
    .mutation(async (opts) => {
      try {
        await youtubeDl(opts.input.url, {
          writeAutoSub: true,
          convertSubs: "srt",
          skipDownload: true,
          output: "./temp/transcript",
        });

        // open file and read content
        const content = await fs.promises.readFile(
          process.cwd() + `/temp/transcript.${opts.input.lang}.vtt`,
          {
            encoding: "utf-8",
          }
        );

        // save transcription to database
        // await prisma.transcription.create({
        //   data: {
        //     text: content,
        //     language: opts.input.lang,
        //     videoId: opts.input.videoId,
        //     type: "AUTO",
        //   },
        // });

        // const result = await lt.prompts.invoke({
        //   prompt: "social-media-post",
        //   environment: "staging",
        //   variables: {
        //     transcription: content,
        //   },
        //   // stream: true,
        // });

        return content;
      } catch (err) {
        console.error(err);
      }
    }),
  processViaAudioWhisper: procedure
    .input(
      z.object({
        url: z.string(),
        lang: z.enum(["en", "cs"]).default("en"),
        videoId: z.string(),
      })
    )
    .mutation(async (opts) => {
      try {
        // delete file
        if (fs.existsSync(process.cwd() + `/temp/audio.m4a`)) {
          await fs.promises.unlink(process.cwd() + `/temp/audio.m4a`);
        }

        await youtubeDl(opts.input.url, {
          extractAudio: true,
          audioQuality: 9,
          format: "m4a",
          output: "./temp/audio.m4a",
        });

        const transcription = await openai.audio.transcriptions.create({
          file: fs.createReadStream(process.cwd() + `/temp/audio.m4a`),
          model: "whisper-1",
        });

        // save transcription to database
        await prisma.transcription.create({
          data: {
            text: transcription.text || "",
            language: opts.input.lang,
            videoId: opts.input.videoId,
            type: "WHISPER",
          },
        });

        const result = await lt.prompts.invoke({
          prompt: "social-media-post",
          environment: "staging",
          variables: {
            transcription: transcription.text || "",
          },
          // stream: true,
        });

        return result.choices || "no content";
      } catch (err) {
        console.error(err);
      }
    }),

  processVideo: procedure
    .input(
      z.object({
        url: z.string().url(),
        lang: z.enum(["en", "cs"]).default("en"),
      })
    )
    .mutation(async (opts) => {
      try {
        const info = await youtubeDl(opts.input.url, {
          dumpSingleJson: true,
          noCheckCertificates: true,
          noWarnings: true,
          preferFreeFormats: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        });

        let transcription = "";

        if (info) {
          await youtubeDl(opts.input.url, {
            writeAutoSub: true,
            convertSubs: "srt",
            skipDownload: true,
            output: "./temp/transcript",
          });

          transcription = await fs.promises.readFile(
            process.cwd() + `/temp/transcript.${opts.input.lang}.vtt`,
            {
              encoding: "utf-8",
            }
          );
        } else {
          throw new Error("No video info found");
        }

        return {
          id: info.id,
          title: info.title,
          description: info.description,
          thumbnail: info.thumbnail,
          transcription,
        };
      } catch (error) {
        console.error(error);
      }
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
