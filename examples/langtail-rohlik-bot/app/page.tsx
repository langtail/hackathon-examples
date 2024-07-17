"use client";

import React from "react";
import styles from "./page.module.css";
import Chat from "./components/chat";


const FunctionCalling = () => {
  

  const functionCallHandler = async (toolCall: {
    args: unknown;
    toolCallId: string;
    toolName: string;
  }) => {
    const product_id =
      toolCall.args &&
      typeof toolCall.args === "object" &&
      "product_id" in toolCall.args
        ? String(toolCall.args.product_id)
        : "";

    alert("Adding product id to cart: " + product_id)
    parent.postMessage({ type: "addProductToCart", product_id }, "*");
    return [{
      role: "tool" as const,
      name: toolCall.toolName,
      tool_call_id: toolCall.toolCallId,
      content: "Product added"
    }]
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
