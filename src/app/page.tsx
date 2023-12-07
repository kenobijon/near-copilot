"use client";
import Chat from "@/components/chat";
import ReactMarkdown from "react-markdown";
import { SignIn } from "./sign-in";
import EmailAuthForm from "@/components/firebase/email-auth-form";

export default function Home() {

  return (
    <div className="w-full h-screen min-h-screen items-center justify-center">
      {/* {messages.map((message, i) => {
        return <ReactMarkdown key={i} children={message.content} />;
      })} */}
      <SignIn />
      <EmailAuthForm
        onSignInSuccess={(user) => {
          console.log("User signed in:", user);
          //setIsSignedInWithEmail(true);
        }}
        onSignUpSuccess={(user) => {
          console.log("User signed up:", user);
          //setIsSignedInWithEmail(true);
        }}
      />
      {/* <SignInWithEmail
        onSignInSuccess={(user) => {
          console.log("User signed in:", user);
          //setIsSignedInWithEmail(true);
        }}
      />
      <SignUpWithEmail
        onSignUpSuccess={(user) => {
          console.log("User signed in:", user);
          //setIsSignedInWithEmail(true);
        }}
      /> */}
      <Chat />
    </div>
  );
}
