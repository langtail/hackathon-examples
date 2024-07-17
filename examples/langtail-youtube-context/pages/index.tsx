import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "../@/lib/styles";
import { trpc } from "../utils/trpc";

const formSchema = z.object({
  url: z.string().url(),
  maxLength: z.string().optional(),
  notes: z.string().optional(),
});

export default function IndexPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const getVideoInfo = trpc.getVideoInfo.useMutation();
  const getVideoAutoTranscript = trpc.getVideoAutoTranscript.useMutation();

  const handleProcessVideo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target) {
      const formData = new FormData(e.target as HTMLFormElement);
      const url = formData.get("url") as string;

      if (url) {
        getVideoAutoTranscript.mutate({
          url,
        });
      }
    }
  };

  const handleUrlInputBlur = (e: FormEvent<HTMLInputElement>) => {
    const url = e.currentTarget.value;
    if (url) {
      if (getVideoInfo.data?.original_url !== url) {
        getVideoAutoTranscript.reset();
        getVideoInfo.mutate({
          url,
        });
      }
    } else {
      getVideoInfo.reset();
      getVideoAutoTranscript.reset();
    }
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="flex gap-4 p-4">
        <div className="flex flex-col gap-2 w-1/6">
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
              src={getVideoInfo.data?.thumbnail}
            />
          )}

          <span
            className={cn(
              "w-full rounded-md h-6",
              !getVideoInfo.data && "bg-black/10",
              getVideoInfo.isPending && "animate-pulse"
            )}
          >
            {getVideoInfo.data?.title || ""}
          </span>
        </div>

        <form
          className="flex flex-col w-5/6 gap-2"
          onSubmit={form.handleSubmit((data) => {
            getVideoAutoTranscript.mutate({
              url: data.url,
            });
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

          <div className="flex gap-2 justify-end">
            <div className="flex gap-2 items-center p-2 border rounded-md">
              <span className="text-sm">Output language</span>
              <select className="text-sm" name="lang">
                <option value="en">English</option>
                <option value="cs">Czech</option>
              </select>
            </div>

            <button
              className="bg-black/20 rounded-md px-3 py-1 text-sm"
              type="submit"
              disabled={getVideoInfo.isPending || !getVideoInfo.data}
            >
              {getVideoAutoTranscript.isPending ? "Processing" : "Process"}
            </button>
          </div>
        </form>
      </div>

      {!getVideoAutoTranscript.isPending && getVideoAutoTranscript.data && (
        <div className="flex flex-col gap-2 m-4">
          <div className={cn("py-2 px-3 rounded-md bg-black/10 text-sm")}>
            {getVideoAutoTranscript.data?.map((choice) => {
              return (
                <p className="" key={choice.index}>
                  {choice.message.content}
                </p>
              );
            })}
          </div>

          <div className="flex gap-2">
            <button className="p-2 text-xs bg-black/20 rounded-md">Copy</button>
            <a
              className="p-2 text-xs bg-black/20 rounded-md"
              href={`https://twitter.com/intent/tweet?text=${getVideoAutoTranscript.data[0].message.content}`}
            >
              Share to twitter
            </a>
          </div>
        </div>
      )}
      {getVideoAutoTranscript.isPending && (
        <div
          className={cn(
            "py-2 px-3 rounded-md bg-black/10 text-sm m-4 min-h-9 animate-pulse"
          )}
        />
      )}
    </div>
  );
}
