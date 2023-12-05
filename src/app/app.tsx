
import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import Chat from "@/components/chat";
import ReactMarkdown from "react-markdown";
import { SignIn } from "./sign-in";
import { Wallet } from '../components/near-wallet';

const wallet = new Wallet({ createAccessKeyFor: "social.near" });


export default async function App() {
    const isSignedIn = await wallet.startUp();

    const signIn = () => { wallet.signIn() }

    const signOut = () => { wallet.signOut() }

    return (
        <main>
            <table>
                <tr>
                    <td><h1>📖 NEAR Guest Book</h1></td>
                    <td>{isSignedIn
                        ? <button onClick={signOut}>Log out</button>
                        : <button onClick={signIn}>Log in</button>
                    }</td>
                </tr>
            </table>

            <hr />
            {isSignedIn
                ? <Chat />
                : <SignIn />
            }

        </main>
    );
};

// export default App;