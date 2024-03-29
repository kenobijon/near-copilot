"use client";
import React, { useEffect, useRef } from "react";

import {
  ChatContainer,
  ChatContent,
  ChatDescription,
  ChatFooter,
  ChatHeader,
} from "./chat/elements";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Message, useChat } from "ai/react";
import { Grid } from "react-loader-spinner";
import Bubble from "./chat/bubble";

import { conversationhistory } from "@/mock/conversationHistory";
import { IconSend } from "@tabler/icons-react";

export default function Chat() {
  let {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages,
  } = useChat();

  // useEffect(() => {
  //   const localMessages: string = localStorage.getItem("messages") || "[]";
  //   const initialMessages = JSON.parse(localMessages).map(
  //     (obj: any) => obj as Message
  //   );
  //   setMessages(initialMessages);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("messages", JSON.stringify(messages));
  // }, [messages]);

  // messages = [...conversationhistory.messages, ...messages];

  // Create a reference to the scroll area
  const scrollAreaRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom when the messages change
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  interface Message {
    role: "function" | "user" | "assistant" | "system";
    content: string;
  }

  return (
    <ChatContainer className="flex flex-col">
      {messages.length === 0 ? (
        <div className="mx-auto flex flex-grow w-[300px] flex-col mt-[15%] space-y-6 sm:w-[600px]">
          <div className="text-center text-4xl font-bold text-black dark:text-white">
            NEAR Founder Co-Pilot
          </div>
          <div className="text-center text-lg text-black dark:text-white">
            <div className="mb-2 font-bold">NEAR Founder Co-Pilot</div>
          </div>
        </div>
      ) : (
        <>
          <ChatHeader className="border-b py-2 border-assistant-background">
            {/* <ChatTitle className="text-lg">Chatbot</ChatTitle> */}
            <ChatDescription className="content_width text-center leading-3">
              Powered by NEAR Horizon
            </ChatDescription>
          </ChatHeader>
          <ChatContent className="flex-grow overflow-y-auto pb-15">
            <ScrollArea
              ref={scrollAreaRef}
              className="h-full overflow-y-auto w-full bg-transparent spacy-y-4"
            >
              {messages.map((message, i) => (
                <Bubble key={i} message={{ ...message }} loading={isLoading} />
              ))}

              {isLoading && messages[messages.length - 1].role === "user" && (
                <Bubble
                  key={"i"}
                  message={{ id: "loading", content: "", role: "assistant" }}
                  loading={isLoading}
                />
              )}
            </ScrollArea>
          </ChatContent>
        </>
      )}

      <ChatFooter className="w-full sticky bottom-0 space-x-2 pt-2">
        <div className="content_width bg-transparent flex items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full overflow-hidden bg-assistant-background  rounded-xl flex items-center mx-auto text-gray-600"
          >
            <Input
              placeholder="Type your message"
              value={input}
              onChange={handleInputChange}
              className="bg-transparent text-foreground rounded-xl -mr-9"
            />
            <button
              type={`${!isLoading ? "submit" : "button"}`}
              className={`mr-2 rounded p-1.5 opacity-60 text-white ${!isLoading
                ? " hover:bg-gray-500 hover:text-white/80"
                : "pointer-events-none"
                } `}
            >
              {isLoading ? (
                <Grid
                  height={20}
                  width={20}
                  radius={10}
                  ariaLabel="grid-loading"
                  color="#fff"
                  ms-visible={true}
                />
              ) : (
                <IconSend size={20} />
              )}
            </button>
          </form>
        </div>
      </ChatFooter>
    </ChatContainer>
  );
}
