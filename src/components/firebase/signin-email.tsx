import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from "../../firebaseConfig"
import { FormEvent } from 'react';
import styles from './signin-email.module.css';

interface SignInWithEmailProps {
    onSignInSuccess: (user: any) => void; // callback prop for sign-in success
}

const SignInWithEmail: React.FC<SignInWithEmailProps> = ({ onSignInSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                onSignInSuccess(userCredential.user); // Call the callback with the user info
            }).catch((error) => {
                console.log(error);
        });
    };

    return (
        <div className = 'sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Log In to your account</h1>
                <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input 
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default SignInWithEmail;