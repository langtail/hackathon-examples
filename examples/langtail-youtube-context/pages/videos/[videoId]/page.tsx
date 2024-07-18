import React from "react";
import { notFound } from "next/navigation";
import { trpc } from "@/lib/trpc";

type VideoPageProps = {
  params: {
    videoId: string;
  };
};

export default function VideoPage({ params }: VideoPageProps) {
  console.log(params);
  const getVideo = trpc.getVideo.useQuery({
    id: params.videoId,
  });
  const video = getVideo.data;

  console.log(video);

  if (!video) {
    return notFound();
  }

  return (
    <div>
      <h1>Video: {params.videoId}</h1>
    </div>
  );
}
