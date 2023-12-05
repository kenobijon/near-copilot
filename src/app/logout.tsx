"use client";

import { useSignOut } from "@/auth/global";
import { Button } from "@/components/ui/button";


export function LogOut() {
    const signOut = useSignOut();

    return (
        <div>
            <Button onClick={signOut} variant="outline">
                Log Out
            </Button>
        </div>
    );
}