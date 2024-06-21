# Langtail AI Usage Examples

In this repository, we provide a variety of examples of typical AI applications.

So far, you can check out these example projects:

## [Weather Chat App with Langtail API](./examples/langtail-weather-chat)

This is the vanilla method of handling AI responses in a TypeScript and React application. The Next.js backend sends requests to the Langtail API and returns data streams, which are handled manually on the frontend.

This approach is useful for those looking for a bare-bones implementation of an AI chat app.

## [Weather Chat with Vercel AI Package and Langtail API](./examples/langtail-weather-chat-vercel-ai/)

In this example, we use Vercel AI packages to streamline most of the manual work. Vercel provides wrappers for immediate handling of tool calls on the frontend or backend. On the frontend, you can use React hooks that essentially handle the entire chat for you, including event parsing and amending the AI data.

Thanks to the Langtail SDK, we generate static types for your Langtail prompt, so you don't need to worry about the structure of the arguments passed to your tool handlers.

## [Weather Chat with Langtail's useChatStream](./examples/langtail-react-hook/)

Here you can see how you can simply work with AI streams and `Readablestream` using our [custom React hook `useChatStream`](https://github.com/langtail/examples/blob/main/examples/langtail-react-hook/app/components/chat.tsx#L78). You just request your backend and the AI messages will be filled up for you with all the goodies. Like message deltas and tool calls.

More examples are coming soon.
