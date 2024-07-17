import fs from "fs";
import youtubeDl from "youtube-dl-exec";
import { z } from "zod";
import { lt } from "../../@/lib/utils";
import { procedure, router } from "../trpc";
import { prisma } from "../../@/lib/prisma";

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

  getVideoAutoTranscript: procedure
    .input(
      z.object({
        url: z.string(),
        lang: z.enum(["en", "cs"]).default("en"),
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

        const result = await lt.prompts.invoke({
          prompt: "social-media-post",
          environment: "staging",
          variables: {
            transcription: content,
          },
          // stream: true,
        });

        return result.choices || "no content";
      } catch (err) {
        console.error(err);
      }
    }),
  downloadVideoAudio: procedure
    .input(
      z.object({
        url: z.string(),
      })
    )
    .mutation(async (opts) => {
      try {
        await youtubeDl(opts.input.url, {
          extractAudio: true,
          audioFormat: "mp3",
          output: "./temp/audio.mp3",
        });
      } catch (err) {
        console.error(err);
      }
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
