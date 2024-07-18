import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/styles";
import { trpc } from "@/lib/trpc";

const formSchema = z.object({
  url: z.string().url(),
  maxLength: z.string().optional(),
  notes: z.string().optional(),
  useWhisper: z.boolean().optional(),
});

export default function IndexPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      maxLength: "",
      notes: "",
      useWhisper: false,
    },
  });

  const getVideos = trpc.getVideos.useQuery();
  const getVideoInfo = trpc.getVideoInfo.useMutation();
  const processViaAutoTranscription =
    trpc.processViaAutoTranscription.useMutation();
  const processViaAudioWhisper = trpc.processViaAudioWhisper.useMutation();

  const isProcessing =
    processViaAutoTranscription.isPending || processViaAudioWhisper.isPending;

  const message =
    processViaAutoTranscription.data?.[0]?.message?.content ||
    processViaAudioWhisper.data?.[0]?.message?.content;

  const handleUrlInputBlur = (e: FormEvent<HTMLInputElement>) => {
    const validationResult = z.string().url().safeParse(e.currentTarget.value);

    if (!validationResult.success) return;

    const url = validationResult.data;

    if (url) {
      if (getVideoInfo.data?.video.url !== url) {
        processViaAutoTranscription.reset();
        processViaAudioWhisper.reset();
        getVideoInfo.mutate({
          url,
        });
      }
    } else {
      getVideoInfo.reset();
      processViaAutoTranscription.reset();
      processViaAudioWhisper.reset();
    }
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <header className="px-4 py-2 text-lg font-medium bg-black/20">
        <h1>YouTube to social media</h1>
      </header>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="flex flex-col gap-2 md:w-2/6">
          {!getVideoInfo.data || getVideoInfo.isPending ? (
            <div
              className={cn(
                "aspect-video w-full bg-black/10 rounded-md",
                getVideoInfo.isPending && "animate-pulse"
              )}
            />
          ) : (
            <img
              className="aspect-video w-full bg-black/10 rounded-md"
              alt="thumbnail"
              src={getVideoInfo.data?.video.thumbnail}
            />
          )}

          <a
            href={form.getValues().url}
            className={cn(
              "w-full rounded-md h-6 font-medium",
              !getVideoInfo.data && "bg-black/10 w-2/6",
              getVideoInfo.isPending && "animate-pulse"
            )}
          >
            {getVideoInfo.data?.video.title || ""}
          </a>
        </div>

        <form
          className="flex flex-col md:w-4/6 gap-2"
          onSubmit={form.handleSubmit((data) => {
            if (data.useWhisper) {
              processViaAutoTranscription.reset();
              processViaAudioWhisper.mutate({
                url: data.url,
              });
            } else {
              processViaAudioWhisper.reset();
              processViaAutoTranscription.mutate({
                url: data.url,
              });
            }
          })}
        >
          <input
            className="text-sm border rounded-md p-2"
            type="text"
            placeholder="Paste url"
            {...form.register("url")}
            onBlur={handleUrlInputBlur}
          />

          <textarea
            className="text-sm border rounded-md p-2"
            placeholder="Describe how log it should be"
            {...form.register("maxLength")}
          />

          <textarea
            className="text-sm border rounded-md p-2"
            placeholder="Describe what it should contain"
            {...form.register("notes")}
          />

          <div className="flex gap-2 items-center">
            <label htmlFor="useWhisper">Use Open AI whisper</label>
            <input
              id="useWhisper"
              type="checkbox"
              {...form.register("useWhisper")}
            />
          </div>

          {form.formState.errors && (
            <div className="text-sm text-red-500">
              {Object.values(form.formState.errors).map((error) => (
                <p key={error.message}>{error.message}</p>
              ))}
            </div>
          )}

          <div className="flex gap-2 justify-end">
            <div className="flex gap-2 items-center p-2 border rounded-md">
              <span className="text-sm">Output language</span>
              <select className="text-sm" name="lang">
                <option value="en">English</option>
                <option value="cs">Czech</option>
              </select>
            </div>

            <button
              className={cn(
                "bg-primary rounded-md px-3 py-1 text-sm text-slate-50",
                (isProcessing || !getVideoInfo.data) &&
                  "opacity-50 cursor-not-allowed",
                isProcessing && "animate-pulse"
              )}
              type="submit"
              disabled={getVideoInfo.isPending || !getVideoInfo.data}
            >
              {isProcessing ? "Processing" : "Process"}
            </button>
          </div>
        </form>
      </div>

      {/* {downloadAudio.data && (
        <div className="p-4 text-sm">
          <p>{downloadAudio.data.text}</p>
        </div>
      )} */}

      {!isProcessing && message && (
        <div className="flex flex-col gap-2 m-4">
          <div className={cn("py-2 px-3 rounded-md bg-black/10 text-sm")}>
            <p className="">{message}</p>
          </div>

          <div className="flex gap-2">
            <button className="p-2 text-xs bg-black/20 rounded-md">Copy</button>
            <a
              className="p-2 text-xs bg-black/20 rounded-md"
              href={`https://twitter.com/intent/tweet?text=${message}`}
            >
              Share to twitter
            </a>
          </div>
        </div>
      )}
      {isProcessing && (
        <div
          className={cn(
            "py-2 px-3 rounded-md bg-black/10 text-sm m-4 min-h-9 animate-pulse"
          )}
        />
      )}

      {/* {getVideos.data && (
        <div className="flex flex-col gap-2 m-4">
          <h2 className="text-lg font-medium">Videos</h2>
          <ul>
            {getVideos.data.map((video) => (
              <li key={video.id}>
                {video.id} -{video.title} - {video.url}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}
