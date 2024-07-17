"use client";

import React from "react";
import styles from "./page.module.css";
import Chat from "./components/chat";


const FunctionCalling = () => {


  const functionCallHandler = async (toolCall: {
    args: any;
    toolCallId: string;
    toolName: string;
  }) => {
    if (toolCall.toolName === "add_product_to_basket") {
      const product_id =
        toolCall.args &&
        typeof toolCall.args === "object" &&
        "product_id" in toolCall.args
          ? String(toolCall.args.product_id)
          : "";

      parent.postMessage({ type: "addProductToCart", product_id }, "*");
      return [{
        role: "tool" as const,
        name: toolCall.toolName,
        tool_call_id: toolCall.toolCallId,
        content: "Product added"
      }]
    } else if (toolCall.toolName === "search_products") {
      parent.postMessage({ type: "searchProduct", name: toolCall.args.product_name }, "*");
      
      const result = await new Promise((resolve) => {
        window.addEventListener('message', function onMessage(event) {
          if (event.data.type === 'searchResults') {
            window.removeEventListener('message', onMessage);
            resolve(event.data.data);
          }
        })
      })
      console.log(result)
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
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
