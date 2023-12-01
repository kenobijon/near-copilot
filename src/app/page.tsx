"use client";
import Chat from "@/components/chat";
import ReactMarkdown from "react-markdown";
import { SignIn } from "./sign-in";

export default function Home() {

  return (
    <div className="w-full h-screen min-h-screen items-center justify-center">
      {/* {messages.map((message, i) => {
        return <ReactMarkdown key={i} children={message.content} />;
      })} */}
      <SignIn />
      <Chat />
    </div>
  );
}
