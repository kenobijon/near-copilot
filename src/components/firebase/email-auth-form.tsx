import React, { useState } from 'react';
import SignInWithEmail from './signin-email'; // Adjust the path as needed
import SignUpWithEmail from './signup-email'; // Adjust the path as needed
import './email-auth-form.css';

interface EmailAuthFormProps {
    onSignInSuccess: (user: any) => void;
    onSignUpSuccess: (user: any) => void;
}

const EmailAuthForm: React.FC<EmailAuthFormProps> = ({ onSignInSuccess, onSignUpSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-container">
            {isLogin ? (
                <>
                    <SignInWithEmail onSignInSuccess={onSignInSuccess} />
                    <button className={"toggle-button"} onClick={toggleForm}>Need an account? Sign Up</button>
                </>
            ) : (
                <>
                    <SignUpWithEmail onSignUpSuccess={onSignUpSuccess} />
                    <button className={"toggle-button"} onClick={toggleForm}>Already have an account? Login</button>
                </>
            )}
        </div>
    );
};

export default EmailAuthForm;
