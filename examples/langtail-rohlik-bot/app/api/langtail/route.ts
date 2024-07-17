import { NextRequest } from "next/server";

import { convertToCoreMessages, streamText } from "ai";
import { langtail } from "langtail/dist/vercelAi";
import tools from "../../../langtailTools";
import {
  getWeather,
} from "@/app/utils/shared-utils";

export const runtime = "edge";

// Create a new assistant
export async function POST(request: NextRequest) {
  const messages = (await request.json()).messages;
  const lt = langtail("rohlik-ai");

  const result = await streamText({
    model: lt,
    messages: convertToCoreMessages(messages),
    tools: tools(lt, {
      search_products: {
        execute: async (action) => {
          const resp = await fetch(`https://www.rohlik.cz/services/frontend-service/search-metadata?search=${action.product_name}&offset=0&limit=5&companyId=1&filterData=%7B%22filters%22%3A%5B%5D%7D&canCorrect=true`)
          const respJson = await resp.json()
          
          return JSON.stringify(respJson.data.productList.map((product: any) => ({
            productId: product.productId,
            productName: product.productName,
            price: product.price,
            pricePerUnit: product.pricePerUnit,
          })))
        },
      },
    }),
  });

  return result.toAIStreamResponse();
}
