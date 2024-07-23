import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type StartProps = {
  onSubmit: (url: string) => void;
};

const formSchema = z.object({
  url: z.string().url(),
});

export default function Start({ onSubmit }: StartProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  return (
    <div className="flex flex-col gap-4 max-w-md md:max-w-3xl p-2 md:p-0">
      <h1 className="text-9xl font-bold">YouBlip</h1>
      <p className="text-xl px-4 text-muted-foreground">
        Boost your social media game by converting YouTube videos into tailored
        posts. Our AI-driven app helps you generate and fine-tune content in a
        friendly chat environment.
      </p>

      <form
        className="flex text-center"
        onSubmit={form.handleSubmit((data) => {
          onSubmit(data.url);
        })}
      >
        <input
          className="flex-grow px-4 py-2 border border-gray-600 rounded-l-3xl outline-none bg-transparent"
          type="text"
          placeholder="Start your journey with a YouTube URL"
          {...form.register("url")}
        />
        <button className="flex-shrink-0 w-[80px] border border-gray-600 rounded-r-3xl bg-gray-600" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
