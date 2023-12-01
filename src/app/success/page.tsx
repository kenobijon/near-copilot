"use client";
import Chat from "@/components/chat";
import ReactMarkdown from "react-markdown";


export default function Success() {

    return (
        <div className="w-full h-screen min-h-screen items-center justify-center">
            {/* {messages.map((message, i) => {
        return <ReactMarkdown key={i} children={message.content} />;
      })} */}
            <Chat />
        </div>
    );
}