"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./chat.module.css";
import Markdown from "react-markdown";
import zod from "zod";
import { AiLoading } from "./AiLoading";

import { useChat } from "@ai-sdk/react";

const UserMessage = ({ text }: { text: string | null }) => {
  return <div className={styles.userMessage}>{text}</div>;
};

const AssistantMessage = ({ text }: { text: string | null }) => {
  return (
    <div className={styles.assistantMessage}>
      <Markdown>{text}</Markdown>
    </div>
  );
};

const Message = ({ role, content }: ChatMessage) => {
  switch (role) {
    case "user":
      return <UserMessage text={content} />;
    case "assistant":
      return <AssistantMessage text={content} />;
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
};

export type ChatMessage = {
  content: string | null;
  role: "user" | "assistant" | "tool" | "function" | "data" | "system";
  deltaPlaceholder?: boolean;
};

const Chat = ({ onAiStart, functionCallHandler }: ChatProps) => {
  const [generatingResponse, setGeneratingResponse] = useState<boolean>(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleRunCompleted = () => {
    setInputDisabled(false);
    setGeneratingResponse(false);
  };

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxToolRoundtrips: 5,
    api: "/api/langtail",
    onFinish: handleRunCompleted,

    // run client-side tools that are automatically executed:
    async onToolCall(message) {
      if (message.toolCall.toolName === "get_weather") {
        functionCallHandler?.(message.toolCall);
      }
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
            <Message key={index} role={msg.role} content={msg.content} />
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
          placeholder="Enter your question"
        />
        <button
          type="submit"
          className={styles.button}
          disabled={inputDisabled}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
