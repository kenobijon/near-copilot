import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from "../../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebaseConfig"
import { FormEvent } from 'react';

interface SignUpWithEmailProps {
    onSignUpSuccess: (user: any) => void; // callback prop for signup success
}

const SignUpWithEmail: React.FC<SignUpWithEmailProps> = ({ onSignUpSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Attempt to create a user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            onSignUpSuccess(userCredential.user); // Call the callback with the user info
            // Add user information to the database
            const docRef = await addDoc(collection(db, "users"), {
                email: userCredential.user.email  // assuming the email is in userCredential.user.email
            });
            console.log("Document written with ID: ", docRef.id); // usually we log docRef.id
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <div className = 'sign-up-container'>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpWithEmail;