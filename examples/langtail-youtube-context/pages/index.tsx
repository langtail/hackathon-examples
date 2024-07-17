import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "../@/lib/styles";
import { trpc } from "../@/lib/trpc";

const formSchema = z.object({
  url: z.string().url(),
  maxLength: z.string().optional(),
  notes: z.string().optional(),
});

export default function IndexPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      maxLength: "",
      notes: "",
    },
  });

  const getVideoInfo = trpc.getVideoInfo.useMutation();
  const getVideoAutoTranscript = trpc.getVideoAutoTranscript.useMutation();

  const handleUrlInputBlur = (e: FormEvent<HTMLInputElement>) => {
    if (!form.formState.isValid) {
      return;
    }
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
              src={getVideoInfo.data?.thumbnail}
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
            {getVideoInfo.data?.title || ""}
          </a>
        </div>

        <form
          className="flex flex-col md:w-4/6 gap-2"
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
                (getVideoInfo.isPending ||
                  getVideoAutoTranscript.isPending ||
                  !getVideoInfo.data) &&
                  "opacity-50 cursor-not-allowed",
                getVideoAutoTranscript.isPending && "animate-pulse"
              )}
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
