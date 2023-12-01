"use client";

import { useSignIn } from "@/auth/global";
import { Button } from "@/components/ui/button";


export function SignIn() {
    const signIn = useSignIn();

    return (
        <div>
            <Button onClick={signIn} variant="outline">
                Sign In
            </Button>
        </div>
    );
}