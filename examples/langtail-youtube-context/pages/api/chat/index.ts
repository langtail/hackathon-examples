import { NextRequest } from "next/server";

import { convertToCoreMessages, streamText } from "ai";
import { Langtail } from "langtail";
import tools from "../../../langtailTools";

export const runtime = "edge";

export const lt = new Langtail({
  apiKey: process.env.LANGTAIL_API_KEY ?? "",
});

// Create a new assistant
export default async function POST(request: NextRequest) {
  const response = await request.json();

  const messages = response.messages[0].length
    ? response.messages[0]
    : response.messages;

  const variables = response.variables;

  // console.log("variables", variables);
  // console.log("messages", messages);

  const result = await lt.prompts.invoke({
    prompt: "social-media-post",
    environment: "staging",
    messages,
    stream: true,
    variables,
  });

  return new Response(result.toReadableStream());
}
