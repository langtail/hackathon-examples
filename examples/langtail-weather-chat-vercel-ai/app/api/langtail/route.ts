import { NextRequest } from "next/server";

import { convertToCoreMessages, streamText } from "ai";
import { langtail } from "langtail/dist/vercelAi";
import tools from "../../../langtailTools";
import {
  WeatherSchema,
  decodeSkyState,
  getWeather,
} from "@/app/utils/shared-utils";

export const runtime = "edge";

// Create a new assistant
export async function POST(request: NextRequest) {
  const messages = (await request.json()).messages;
  const lt = langtail("weather");

  const result = await streamText({
    model: lt,
    messages: convertToCoreMessages(messages),
    tools: tools(lt, {
      get_weather: {
        execute: async (action) => {
          const data = WeatherSchema.parse(await getWeather(action.location));

          const temperature = data.main.temp;
          const conditions = decodeSkyState(data.weather[0]?.main) ?? "Sunny";
          return `${temperature}°C and ${conditions}`;
        },
      },
    }),
  });

  return result.toAIStreamResponse();
}
