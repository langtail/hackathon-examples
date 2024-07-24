"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./chat.module.css";
import Markdown from "react-markdown";
import zod from "zod";
import { AiLoading } from "./AiLoading";

import { useChat } from "@ai-sdk/react";

import { ProductData } from "../page";

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const UserMessage = ({ text }: { text: string | null }) => {
  return <div className={styles.userMessage}>{text}</div>;
};

const AssistantMessage = ({ text, productData }: { text: string | null, productData:ProductData[] }) => {
  const [mdx, setMdx] = useState(null)
  const [components, setComponents] = useState(null)

  useEffect(() => {
    const source = async () => {
      try {
        setMdx(await serialize(text));
        console.log("setMdx", await serialize(text))
      } catch (error) { console.log("setMdxError", error) }
    }
    if(text) {
      source()
    }
  }, [text])

  useEffect(() => {
    setComponents({
      RohlikProduct: (props) => <RohlikProduct {...props} productData={productData} />,
      Wrapper: (props) => <Wrapper {...props} />,
    });
  }, [productData]);

  // const renderTextWithProducts = (text: string) => {
  //   const parts = text.replace(/<Vysvetleni description="(.+?)">/g, '$1').split(/(<RohlikProduct id=\d+>)/g)

  //   return parts.map((part, index) => {
  //     const match = part.match(/<RohlikProduct id="(\d+)">/);
  //     if (match) {
  //       const id = match[1];
  //       const product = productData.find((p) => p.productId === parseInt(id));
  //       return product ? (
  //         <div key={product.productId} className={styles.product}>
  //           <div className={styles.productImageContainer}>
  //             <img
  //               onClick={ () => {parent.postMessage({ type: "changeUrl", url: `https://rohlik.cz/${product.baseLink}` }, "*")}}
  //               className={styles.productImage}
  //               src={`https://cdn.rohlik.cz${product.imgPath}`}
  //               alt={product.productName} />
  //               <div className={styles.buyButton} onClick={ () => {parent.postMessage({ type: "addProductToCart", product_id: product.productId }, "*")}}>
  //                 <svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.998 18c1.1 0 1.999.9 1.999 2s-.9 2-2 2c-1.099 0-1.988-.9-1.988-2s.89-2 1.989-2Zm9.996 0c1.1 0 2 .9 2 2s-.9 2-2 2-1.99-.9-1.99-2 .89-2 1.99-2ZM4.64 2c.38 0 .74.22.9.57L6.209 4h14.794c.76 0 1.24.82.87 1.48l-3.58 6.49c-.339.62-.999 1.03-1.748 1.03H9.097l-1.1 2h10.997c.55 0 1 .45 1 1s-.45 1-1 1H7.998c-1.52 0-2.48-1.63-1.75-2.97l1.35-2.44L3.999 4H3C2.45 4 2 3.55 2 3s.45-1 1-1h1.639Z" fill="#FFFFFF"></path></svg>
  //               </div>
  //             </div>
  //           <div className={styles.productPrice}>
  //             <div className={styles.productPriceContainer}>
  //               <span className={styles.productPricePrice}>
  //                 <span>{product.price.whole}</span>
  //                 <sup>{product.price.fraction}</sup>
  //               </span>
  //               <span className={styles.currency}>{product.price.currency}</span>
  //             </div>
  //           </div>
  //           <div className={styles.productName}>
  //             { product.coo && <img src={`https://cdn.rohlik.cz/images/countryFlags/${product.coo}.svg`} className={styles.countryImage} />}
  //             {product.productName}
  //           </div>
  //           <div className={styles.units}>
  //             <span>{product.textualAmount}</span>
  //             <span className={styles.unitPrice} >{`${product.pricePerUnit.full}/${product.unit}`}</span>
  //           </div>
  //         </div>
  //       ) : part;
  //     }
  //     return part;
  //   });
  // };

  return (
    <div className={styles.assistantMessage}>
      <div>
        {/* { renderTextWithProducts(text) } */}
        {mdx && <MDXRemote {...mdx} components={components} />}
      </div>
    </div>
  );
};

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}
const RohlikProduct = ({ id, productData}) => {
  console.log("productData", productData)
  const product = productData.find((p) => p.productId === parseInt(id))
  console.log("product", id, product)
  return (
      <div key={product.productId} className={styles.product}>
        <div className={styles.productImageContainer}>
          <img
            onClick={ () => {parent.postMessage({ type: "changeUrl", url: `https://rohlik.cz/${product.baseLink}` }, "*")}}
            className={styles.productImage}
            src={`https://cdn.rohlik.cz${product.imgPath}`}
            alt={product.productName} />
            <div className={styles.buyButton} onClick={ () => {parent.postMessage({ type: "addProductToCart", product_id: product.productId }, "*")}}>
              <svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.998 18c1.1 0 1.999.9 1.999 2s-.9 2-2 2c-1.099 0-1.988-.9-1.988-2s.89-2 1.989-2Zm9.996 0c1.1 0 2 .9 2 2s-.9 2-2 2-1.99-.9-1.99-2 .89-2 1.99-2ZM4.64 2c.38 0 .74.22.9.57L6.209 4h14.794c.76 0 1.24.82.87 1.48l-3.58 6.49c-.339.62-.999 1.03-1.748 1.03H9.097l-1.1 2h10.997c.55 0 1 .45 1 1s-.45 1-1 1H7.998c-1.52 0-2.48-1.63-1.75-2.97l1.35-2.44L3.999 4H3C2.45 4 2 3.55 2 3s.45-1 1-1h1.639Z" fill="#FFFFFF"></path></svg>
            </div>
          </div>
        <div className={styles.productPrice}>
          <div className={styles.productPriceContainer}>
            <span className={styles.productPricePrice}>
              <span>{product.price.whole}</span>
              <sup>{product.price.fraction}</sup>
            </span>
            <span className={styles.currency}>{product.price.currency}</span>
          </div>
        </div>
        <div className={styles.productName}>
          { product.coo && <img src={`https://cdn.rohlik.cz/images/countryFlags/${product.coo}.svg`} className={styles.countryImage} />}
          {product.productName}
        </div>
        <div className={styles.units}>
          <span>{product.textualAmount}</span>
          <span className={styles.unitPrice} >{`${product.pricePerUnit.full}/${product.unit}`}</span>
        </div>
      </div>
    )
}

const Message = ({ role, content, productData }: ChatMessage) => {

  switch (role) {
    case "user":
      return <UserMessage text={content} />;
    case "assistant":
      return <AssistantMessage text={content} productData={productData} />;
    default:
      return null;
  }
};

type ChatProps = {
  onAiStart?: () => void;
  onAiEnd?: () => void;
  functionCallHandler?: (toolCall: {
    toolName: string;
    toolCallId: string;
    args: unknown;
  }) => void;
  productData: ProductData[];
};

export type ChatMessage = {
  content: string | null;
  role: "user" | "assistant" | "tool" | "function" | "data" | "system";
  deltaPlaceholder?: boolean;
  productData: ProductData[];
};

const Chat = ({ onAiStart, functionCallHandler, productData }: ChatProps, ) => {
  const [generatingResponse, setGeneratingResponse] = useState<boolean>(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleRunCompleted = () => {
    setInputDisabled(false);
    setGeneratingResponse(false);
  };

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxToolRoundtrips: 200,
    api: "/api/langtail",
    onFinish: handleRunCompleted,

    // run client-side tools that are automatically executed:
    async onToolCall(message) {
        return functionCallHandler?.(message.toolCall)
    },
  });

  // automatically scroll to bottom of chat
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setGeneratingResponse(true);

    scrollToBottom();
    handleSubmit(e);
    onAiStart?.();
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages
          .filter((msg) => msg.content)
          .map((msg, index) => (
            <Message key={index} role={msg.role} content={msg.content} productData={productData} />
          ))}
        {generatingResponse && <AiLoading />}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleFormSubmit}
        className={`${styles.inputForm} ${styles.clearfix}`}
      >
        <input
          type="text"
          className={styles.input}
          value={input}
          onChange={handleInputChange}
          placeholder="Napište, co chcete uvařit"
        />
        <button
          type="submit"
          className={styles.button}
          disabled={inputDisabled}
        >
          ODESLAT
        </button>
      </form>
    </div>
  );
};

export default Chat;
