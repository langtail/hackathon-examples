import { z } from "zod";
import { procedure, router } from "../trpc";
import youtubeDl from "youtube-dl-exec";
import fs from "fs";
import path from "path";

export const appRouter = router({
  getVideoInfo: procedure
    .input(
      z.object({
        url: z.string(),
      })
    )
    .mutation(async (opts) => {
      const info = await youtubeDl(opts.input.url, {
        dumpSingleJson: true,
        noCheckCertificates: true,
        noWarnings: true,
        preferFreeFormats: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      });

      return info;
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

        return content || "no content";
      } catch (err) {
        console.error(err);
      }
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
