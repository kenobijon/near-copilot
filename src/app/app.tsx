import React, { useState, useEffect } from "react";
import Chat from "@/components/chat";
import ReactMarkdown from "react-markdown";
import { SignIn } from "./sign-in"; // NEAR Wallet
import SignUpWithEmail from "../components/firebase/signup-email";
import SignInWithEmail from "../components/firebase/signin-email";
import { Wallet } from "../components/near-wallet";

const wallet = new Wallet({ createAccessKeyFor: "social.near" });

export default function App() {
  const [isSignedInWithNear, setIsSignedInWithNear] = useState(false);
  const [isSignedInWithEmail, setIsSignedInWithEmail] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const signedIn = await wallet.startUp();
      setIsSignedInWithNear(signedIn);
    }

    checkAuth();
  }, []);

  const signInWithWallet = () => {
    wallet.signIn();
  };
  const signOutWithWallet = () => {
    wallet.signOut();
  };

  const handleSignOutWithEmail = () => {
    setIsSignedInWithEmail(false);
  };

  return (
    <main>
      <h1>📖 NEAR Guest Book</h1>

      {isSignedInWithNear || isSignedInWithEmail ? (
        <>
          <button
            onClick={
              isSignedInWithNear ? signOutWithWallet : handleSignOutWithEmail
            }
          >
            Log out
          </button>
          <Chat />
        </>
      ) : (
        <>
          <button onClick={signInWithWallet}>Log in with NEAR Wallet</button>
        </>
      )}

      <SignInWithEmail
        onSignInSuccess={(user) => {
          console.log("User signed in:", user);
          setIsSignedInWithEmail(true);
        }}
      />
      <SignUpWithEmail
        onSignUpSuccess={(user) => {
          console.log("User signed in:", user);
          setIsSignedInWithEmail(true);
        }}
      />
    </main>
  );
}
