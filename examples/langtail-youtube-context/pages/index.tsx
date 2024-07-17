import { FormEvent } from "react";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const getVideoInfo = trpc.getVideoInfo.useMutation();

  const handleProcessVideo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target) {
      const formData = new FormData(e.target as HTMLFormElement);
      const url = formData.get("url") as string;

      if (url) {
        getVideoInfo.mutate({
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
        disabled={getVideoInfo.isPending}
      />

      <button type="submit" disabled={getVideoInfo.isPending}>
        {getVideoInfo.isPending ? "Processing" : "Process"}
      </button>

      {getVideoInfo.data && <p>{JSON.stringify(getVideoInfo.data, null, 2)}</p>}
    </form>
  );
}
