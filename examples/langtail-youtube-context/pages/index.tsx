import Chat from "@/components/Chat";
import Start from "@/components/Start";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  url: z.string().url(),
  maxLength: z.string().optional(),
  notes: z.string().optional(),
  useWhisper: z.boolean().optional(),
  videoId: z.string(),
});

export default function IndexPage() {
  const [activeView, setActiveView] = useState<"start" | "processing" | "chat">(
    "start"
  );

  const processVideo = trpc.processVideo.useMutation();

  const handleStart = async (url: string) => {
    setActiveView("processing");
    await processVideo.mutateAsync({
      url,
    });
    setActiveView("chat");
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#0f0f0f] text-white">
      {activeView === "start" && <Start onSubmit={handleStart} />}
      {activeView === "processing" && <p>Processing...</p>}
      {activeView === "chat" && <Chat videoInfo={processVideo} />}
    </div>
  );
}
