"use client";

import { setUser } from "@/auth/global";
import { useWalletSelectorEffect } from "@/auth/selector";
import { User } from "@/auth/user";
import { redirect, usePathname } from "next/navigation";



export function Providers({
    children,
    user,
}: {
    children?: React.ReactNode;
    user: User;
}) {
    useWalletSelectorEffect();
    setUser(user);
    useOnboardingRedirect(user);

    return (
        children
    );
}

function useOnboardingRedirect(user: User) {
    const pathname = usePathname();

    if (!(pathname === "/") && !user.loggedIn) {
        return redirect("/");
    }
}