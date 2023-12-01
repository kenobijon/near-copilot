import { z } from "zod";
import { ironSessionConfig } from "@/auth/iron-session";

import { getIronSession, sealData } from "iron-session";
import { type NextRequest, NextResponse } from "next/server";



import { cookies } from "next/headers";
import { User } from "@/auth/user";


const bodySchema = z.object({
    accountId: z.string(),
    publicKey: z.string(),
});

export async function POST(req: NextRequest) {
    const { accountId, publicKey } = bodySchema.parse(await req.json());

    const session = await getIronSession<User>(cookies(), ironSessionConfig);
    console.log("session", session);
    session.logedIn = true;
    console.log("logged in: ", session.logedIn)
    if (!session.logedIn) {
        return NextResponse.json({ ok: false }, { status: 401 });
    }

    session.accountId = accountId;
    session.publicKey = publicKey;
    await session.save();

    return NextResponse.json({ ok: true });
}
