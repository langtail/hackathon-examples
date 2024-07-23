"use client";

import { cn } from "@/lib/styles";
import { trpc } from "@/lib/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChatStream } from "langtail/react/useChatStream";
import { Fragment, MutableRefObject, useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    message: z.string(),
  })
  .refine((data) => data.message.trim().length > 0, {
    message: "Message cannot be empty",
  });
type ChatProps = {
  videoInfo: ReturnType<typeof trpc.processVideo.useMutation>;
};

export default function Chat({ videoInfo }: ChatProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { isLoading, messages, send } = useChatStream({
    fetcher: (message) => {
      return fetch(`/api/chat`, {
        method: "POST",
        body: JSON.stringify({
          messages: [message],
          variables: { transcription: videoInfo.data?.transcription },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.body);
    },
  });

  const renderFunction = (toolCall: any) => {
    if (toolCall.function.name === "post_proposal") {
      const args = z
        .object({
          message: z.string(),
        })
        .parse(JSON.parse(toolCall.function.arguments));

      return (
        <div className="flex flex-col gap-3">
          <p>{args.message}</p>
          <div className="flex gap-2 items-center">
            <button className="p-1 px-2 text-xs rounded-xl bg-slate-200 text-black">
              Copy
            </button>
            <button className="p-1 px-2 text-xs rounded-xl bg-slate-200 text-black">
              Share to X
            </button>
          </div>
        </div>
      );
    }

    if (toolCall.function.name === "handle_error") {
      const args = z
        .object({
          message: z.string(),
        })
        .parse(JSON.parse(toolCall.function.arguments));

      return <p>{args.message}</p>;
    }

    return <p>{`unknown tool call: ${toolCall.function.name}`}</p>;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.handleSubmit((data) => {
        send({ role: "user", content: data.message });
        form.reset();
      })(event);
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full w-full max-w-md md:max-w-3xl">
      <div className="mt-2 flex-grow flex flex-col gap-2 w-full p-2 overflow-auto">
        <div className="flex justify-end">
          <div className="p-3 bg-gray-500/20 rounded-lg max-w-[75%]">
            <div className="rounded-lg overflow-auto aspect-video bg-black/10">
              <img src={videoInfo.data!.thumbnail} />
            </div>
            <p className="pt-2">{videoInfo.data!.title}</p>
          </div>
        </div>

        <div className="flex">
          <span className="p-3 bg-blue-500/20 rounded-lg max-w-[75%]">
            Tell me what you want to publish about this video and on what
            platform?
          </span>
        </div>

        {messages.map((message, i) => {
          if (message.role === "assistant") {
            let msg = message as any;

            return (
              <Fragment key={i}>
                {message.content && (
                  <div key={`${i} - message`} className="flex">
                    <span className="p-3 bg-blue-500/20 rounded-lg max-w-[75%]">
                      {message.content}
                    </span>
                  </div>
                )}

                {msg.tool_calls?.map((toolCall: any, toolIndex: number) => (
                  <div key={`${i} - tool - ${toolIndex}`} className="flex">
                    <span className="p-3 bg-blue-500/20 rounded-lg max-w-[75%]">
                      {renderFunction(toolCall)}
                    </span>
                  </div>
                ))}
              </Fragment>
            );
          } else if (message.role === "user") {
            return (
              <div key={i} className="flex justify-end">
                <span className="p-3 bg-gray-500/20 rounded-lg max-w-[75%]">
                  {message.content}
                </span>
              </div>
            );
          } else {
            return (
              <div key={i} className="flex justify-end">
                <span className="p-3 bg-gray-500/20 rounded-lg max-w-[75%]">
                  unknown
                </span>
              </div>
            );
          }
        })}

        {isLoading && (
          <div className="flex">
            <span className="p-3 bg-blue-500/20 rounded-lg max-w-[75%]">
              Loading...
            </span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <form
        className="flex flex-shrink-0 p-3 border border-gray-600 rounded-3xl my-2 focus-within:border-gray-200"
        onSubmit={form.handleSubmit((data) => {
          send({ role: "user", content: data.message });
          form.reset();
        })}
        onKeyDown={handleKeyDown}
      >
        <Controller
          name="message"
          control={form.control}
          render={({ field: { onChange, value } }) => (
            <TextArea
              className="ml-4 flex-grow bg-transparent min-h-[24px] max-h-[200px] overflow-auto outline-none border-gray-600"
              value={value}
              onChange={(value) => {
                form.setValue("message", value);
                onChange(value);
              }}
            />
          )}
        />
        <div className="flex-shrink-0 flex items-end justify-center w-[100px">
          <button
            className={cn(
              "mx-4 font-light",
              !form.formState.isValid && "text-gray-600"
            )}
            type="submit"
            disabled={!form.formState.isValid}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

type TextAreaProps = {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

function TextArea({ value = "", onChange, className }: TextAreaProps) {
  const contentEditableRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const handleInput = (e: any) => {
    const newValue = e.target.innerText;
    if (onChange) {
      onChange(newValue);
    }
  };

  const getCaretPosition = (element: HTMLDivElement): number => {
    let caretOffset = 0;
    const doc = element.ownerDocument || document;
    const win = doc.defaultView || window;
    const sel = win.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      caretOffset = preCaretRange.toString().length;
    }
    return caretOffset;
  };

  const setCaretPosition = (element: HTMLDivElement, offset: number) => {
    const range = document.createRange();
    const sel = window.getSelection();
    let charIndex = 0;
    const nodeStack: Node[] = [element];
    let node: Node | null = null;
    let foundStart = false;

    range.setStart(element, 0);
    range.collapse(true);

    while (nodeStack.length > 0) {
      node = nodeStack.pop()!;
      if (node.nodeType === 3) {
        const nextCharIndex = charIndex + (node as Text).length;
        if (!foundStart && offset >= charIndex && offset <= nextCharIndex) {
          range.setStart(node, offset - charIndex);
          range.setEnd(node, offset - charIndex);
          foundStart = true;
          break;
        }
        charIndex = nextCharIndex;
      } else {
        let i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    sel?.removeAllRanges();
    sel?.addRange(range);
  };

  useEffect(() => {
    if (contentEditableRef.current) {
      const currentCursorPosition = getCaretPosition(
        contentEditableRef.current
      );
      contentEditableRef.current.innerText = value;
      setCaretPosition(contentEditableRef.current, currentCursorPosition);
    }
  }, [value]);

  return (
    <div
      ref={contentEditableRef}
      className={className}
      contentEditable
      onInput={handleInput}
    />
  );
}
