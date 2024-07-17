// Langtail tools file, generated with `langtail generate-tools`
// Generated at: 2024-07-17T09:50:24.478Z
// Langtail SDK Version: 0.4.5
import { CoreTool } from 'ai'
import { z } from 'zod'

type Streamable = unknown;
type Renderer<T extends Array<any>> = (...args: T) => Streamable | Generator<Streamable, Streamable, void> | AsyncGenerator<Streamable, Streamable, void>;
interface VercelAITool<PARAMETERS extends z.ZodTypeAny = any, RESULT = any> extends CoreTool<PARAMETERS, RESULT> {
  generate?: Renderer<[
    z.infer<PARAMETERS>,
    {
      toolName: string;
      toolCallId: string;
    }
  ]>;
}

const toolsObject = {
  "rohlik-ai": {
    "production": {
      "1": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        }
      },
      "2": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        }
      },
      "3": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        }
      },
      "4": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "5": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "6": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "default": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      }
    },
    "staging": {
      "default": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        }
      }
    }
  }
};

type ToolsType = typeof toolsObject;
type PromptSlug = keyof ToolsType;
type Environment<P extends PromptSlug> = keyof ToolsType[P];
type Version<P extends PromptSlug, E extends Environment<P>> = keyof ToolsType[P][E];

type ChatModelInterface<P extends PromptSlug, E extends Environment<P>, V extends Version<P, E>> = {
  promptId: P,
  environment: E,
  version: V
}

type ToolOverrides<P extends PromptSlug, E extends Environment<P>, V extends Version<P, E>> = {
  [K in keyof ToolsType[P][E][V]]?: ToolsType[P][E][V][K] extends { parameters: z.ZodTypeAny } ? Partial<VercelAITool<ToolsType[P][E][V][K]['parameters']>> : never
};

function tools<P extends PromptSlug, E extends Environment<P>, V extends Version<P, E>, OVERRIDES extends ToolOverrides<P, E, V>>(
  chatModel: ChatModelInterface<P, E, V>,
  toolsOverride?: OVERRIDES
): ToolsType[P][E][V] & OVERRIDES {
  const mergedTools: any = {};
  const defaultToolsObject = toolsObject[chatModel.promptId][chatModel.environment][chatModel.version] as Record<string, VercelAITool>;
  const mergedKeys = new Set([...Object.keys(defaultToolsObject), ...Object.keys(toolsOverride ?? {})]);

  for (const name of Array.from(mergedKeys.values())) {
    const defaultTool = defaultToolsObject[name];
    const override = toolsOverride ? toolsOverride[name as keyof OVERRIDES] : {};
    mergedTools[name as keyof ToolsType] = { ...defaultTool, ...override };
  }

  return mergedTools as ToolsType[P][E][V] & OVERRIDES;
}

export default tools