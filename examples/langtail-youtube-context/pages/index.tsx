import { FormEvent } from "react";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  // const getVideoInfo = trpc.getVideoInfo.useMutation();
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

  return (
    <form onSubmit={handleProcessVideo}>
      <input
        name="url"
        type="text"
        placeholder="Enter youtube url"
        disabled={getVideoAutoTranscript.isPending}
      />

      <button type="submit" disabled={getVideoAutoTranscript.isPending}>
        {getVideoAutoTranscript.isPending ? "Processing" : "Process"}
      </button>

      {getVideoAutoTranscript.data && (
        <>
          {getVideoAutoTranscript.data?.map((choice) => {
            return (
              <p className="" key={choice.index}>
                {choice.message.content}
              </p>
            );
          })}
        </>
      )}
    </form>
  );
}
