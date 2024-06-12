// Langtail tools file, generated with `langtail generate-tools`
// Generated at: 2024-06-12T12:17:27.392Z
// Langtail SDK Version: 0.4.2
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
  "weather": {
    "production": {
      "1": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        }
      },
      "2": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "3": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "4": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "5": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "6": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "7": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "8": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "9": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "10": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "default": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      }
    },
    "preview": {
      "mjte0ab7": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      },
      "default": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
        }
      }
    },
    "staging": {
      "default": {
        "get_weather": {
          "description": "Get the current weather in a given location",
          "parameters": z.object({ "unit": z.enum(["celsius","fahrenheit"]).describe("The unit for temperature").default("celsius"), "location": z.string().describe("The city and state, e.g. San Francisco, CA") })
        },
        "get_stock_price": {
          "description": "Get the current stock price for a given stock symbol",
          "parameters": z.object({ "symbol": z.string().describe("The stock symbol, e.g. AAPL") })
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