// Langtail tools file, generated with `langtail generate-tools`
// Generated at: 2024-07-24T09:20:19.658Z
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
      "7": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "8": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "9": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "10": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "11": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "12": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "13": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "14": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "15": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "16": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "17": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "18": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "19": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "20": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "21": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "22": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "23": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "24": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "25": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "26": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 10. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "27": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "28": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 3. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "29": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 3. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "30": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "31": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for"), "number_of_products": z.number().describe("How many products will be searched, by default set it to 3. If they want to compare set it to 20.") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "32": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "33": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "34": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "35": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "36": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "37": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "38": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "39": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "40": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "41": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "45": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "46": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "47": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "48": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "49": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "50": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "51": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "52": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "53": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "54": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "55": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "56": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "57": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        },
        "add_multiple_product_to_basket": {
          "description": "Add multiple products to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("The quantity of the product"), "productId": z.number().describe("The ID of the product") })) })
        }
      },
      "58": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        },
        "add_multiple_product_to_basket": {
          "description": "Add multiple products to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("The quantity of the product"), "productId": z.number().describe("The ID of the product") })) })
        }
      },
      "59": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add single item product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.string().describe("The ID of the product to add to the basket").optional() })) })
        }
      },
      "60": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "product_id": z.number().describe("The ID of the product to add to the basket").optional() })) })
        }
      },
      "61": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "62": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "63": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "64": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "65": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "66": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "67": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "68": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "69": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "70": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "71": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "72": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "73": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "limit": z.number().describe("Number of search products. Default is 6, when you search for recipe ingredients then use 2.").optional(), "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "74": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "limit": z.number().describe("Number of search products. Default is 6, when you search for recipe ingredients then use 2.").optional(), "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "75": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "limit": z.number().describe("Number of search products. Default is 6, when you search for recipe ingredients then use 2."), "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified"), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "76": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "limit": z.number().describe("Number of search products. Default is 6, when you search for recipe ingredients then use 2."), "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. To calculate how much to add use the amount in recipe and calculate based on `textualAmount`. 1 if not specified."), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "77": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "limit": z.number().describe("Number of search products. Default is 6, when you search for recipe ingredients then use 2."), "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. To calculate how much to add use the amount in recipe and calculate based on `textualAmount`. 1 if not specified."), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "78": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "limit": z.number().describe("Number of search products. Default is 6, when you search for recipe ingredients then use 4."), "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. To calculate how much to add use the amount in recipe and calculate based on `textualAmount`. 1 if not specified."), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      },
      "default": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "limit": z.number().describe("Number of search products. Default is 6, when you search for recipe ingredients then use 4."), "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_multiple_products_to_basket": {
          "description": "Add multiple items product ID to the basket",
          "parameters": z.object({ "products": z.array(z.object({ "quantity": z.number().describe("How much to put in basket. To calculate how much to add use the amount in recipe and calculate based on `textualAmount`. 1 if not specified."), "productId": z.number().describe("The ID of the product to add to the basket") })) })
        }
      }
    },
    "preview": {
      "o5gc3eso": {
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
      },
      "39trrv07": {
        "search_products": {
          "description": "Search for a product on rohlik.cz based on name",
          "parameters": z.object({ "product_name": z.string().describe("The name of the product to search for") })
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
        }
      },
      "idy4qhso": {
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
        },
        "add_product_to_basket": {
          "description": "Add a product ID to the basket",
          "parameters": z.object({ "quantity": z.number().describe("How much to put in basket. 1 if not specified").optional(), "product_id": z.string().describe("The ID of the product to add to the basket") })
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