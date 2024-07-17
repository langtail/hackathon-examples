import { NextRequest } from "next/server";

import { convertToCoreMessages, streamText } from "ai";
import { langtail } from "langtail/dist/vercelAi";
import tools from "../../../langtailTools";

export const runtime = "edge";

// Create a new assistant
export async function POST(request: NextRequest) {
  const messages = (await request.json()).messages;
  const lt = langtail("rohlik-ai");

  const result = await streamText({
    model: lt,
    messages: convertToCoreMessages(messages),
    tools: tools(lt),
  });

  return result.toAIStreamResponse();
}
