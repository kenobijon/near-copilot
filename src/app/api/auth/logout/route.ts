import { NextResponse } from "next/server";

import { ironSessionConfig } from "@/auth/iron-session";
import { getIronSession } from "iron-session";
import { User } from "@/auth/user";
import { cookies } from "next/headers";

export async function POST() {
    const session = await getIronSession<User>(cookies(), ironSessionConfig);
    session.destroy();
    return NextResponse.json(
        { ok: true }
    );
}