"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Chat from "./components/chat";

export type ProductData = {
  productId: number;
  productName: string;
  inStock: boolean;
  imgPath: string;
  baseLink: string;
  price: {
    full: number;
    whole: number;
    fraction: number;
    currency: string;
  };
  pricePerUnit: {
    full: number;
    whole: number;
    fraction: number;
    currency: string;
  };
  coo: string|null;
  textualAmount: string;
  unit: string;
  composition: {
    additiveScoreMax: number;
    withoutAdditives: boolean;
    nutritionalValues: {
      dose: string;
      energyValueKJ: number;
      energyValueKcal: number;
      fats: number;
      saturatedFattyAcids: number;
      carbohydrates: number;
      sugars: number;
      proteins: number;
      salt: number;
      fiber: number;
    };
  };
};


const FunctionCalling = () => {
  const [productData, setProductData] = useState<ProductData[]>(
    [],
  );

  const functionCallHandler = async (toolCall: {
    args: any;
    toolCallId: string;
    toolName: string;
  }) => {
    console.log("functionToolCall", toolCall)
    if (toolCall.toolName === "add_product_to_basket") {
      console.log("add_product_to_basket", toolCall.args)
      const product_id =
        toolCall.args &&
        typeof toolCall.args === "object" &&
        "product_id" in toolCall.args
          ? String(toolCall.args.product_id)
          : "";
      parent.postMessage({ type: "addProductToCart", product_id, limit,  }, "*");
      return [{
        role: "tool" as const,
        name: toolCall.toolName,
        tool_call_id: toolCall.toolCallId,
        content: "Product added"
      }]
    } else if (toolCall.toolName === "add_multiple_products_to_basket") {
      console.log("add_multiple_product_to_basket", toolCall.args)
      const products =
        toolCall.args &&
        typeof toolCall.args === "object" &&
        "product_id" in toolCall.args
          ? Array(toolCall.args.products)
          : "";
      parent.postMessage({ type: "buyMultipleItems", products: toolCall.args.products }, "*");
      return [{
        role: "tool" as const,
        name: toolCall.toolName,
        tool_call_id: toolCall.toolCallId,
        content: "Products added"
      }]
    } else if (toolCall.toolName === "search_products") {
      parent.postMessage({ type: "searchProduct", name: toolCall.args.product_name , limit: toolCall.args.limit}, "*");
      
      const result = await new Promise((resolve) => {
        window.addEventListener('message', function onMessage(event) {
          if (event.data.type === 'searchResults') {
            window.removeEventListener('message', onMessage);
            resolve(event.data.data);
          }
        })
      })
      console.log("setProductData", result)
      setProductData((prev) => [
        ...prev,
        ...JSON.parse(result),
      ]);
      return [{
        role: "tool" as const,
        name: toolCall.toolName,
        tool_call_id: toolCall.toolCallId,
        content: result
      }]
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat
              functionCallHandler={functionCallHandler}
              productData={productData}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
