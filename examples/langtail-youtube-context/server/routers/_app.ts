import { z } from "zod";
import { procedure, router } from "../trpc";
import youtubeDl from "youtube-dl-exec";

export const appRouter = router({
  getVideoInfo: procedure
    .input(
      z.object({
        url: z.string(),
      })
    )
    .mutation(async (opts) => {
      const info = await youtubeDl(
        "https://www.youtube.com/watch?v=6xKWiCMKKJg",
        {
          dumpSingleJson: true,
          noCheckCertificates: true,
          noWarnings: true,
          preferFreeFormats: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        }
      );

      return info;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
