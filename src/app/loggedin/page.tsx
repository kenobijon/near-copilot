"use client";
import Chat from "@/components/chat";
import { LogOut } from "../logout";

export default function Success(defaultProps: any) {

    console.log("Inside Frickin Success")
    return (
        <div className="w-full h-screen min-h-screen items-center justify-center">
            {/* {messages.map((message, i) => {
        return <ReactMarkdown key={i} children={message.content} />;
      })} */}
            <LogOut />
            <Chat />
        </div>
    );
}