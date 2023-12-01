import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { ironSessionConfig } from "@/auth/iron-session";
import { User } from "@/auth/user";
import { cookies } from "next/headers";

export async function GET() {
    const session = await getIronSession<User>(cookies(), ironSessionConfig);

    if (!session.logedIn) {
        return NextResponse.json(
            { ok: false },
            {
                status: 401,
            },
        );
    }

    return NextResponse.json(session);
}