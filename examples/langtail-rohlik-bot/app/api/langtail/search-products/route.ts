import { getWeather } from "@/app/utils/shared-utils";
import { NextRequest } from "next/server";

// Create a new assistant
export async function GET(request: NextRequest) {
  const url = new URL(request.url ?? "");

  const result = await getWeather(url.searchParams.get("location") ?? "");

  return Response.json(result);
}
