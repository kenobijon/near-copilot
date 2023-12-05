import { z } from "zod";
import { ironSessionConfig } from "@/auth/iron-session";
import { getIronSession } from "iron-session";
import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { User } from "@/auth/user";

const bodySchema = z.object({
    accountId: z.string(),
    publicKey: z.string(),
});

export async function POST(req: NextRequest) {
    try {
        // Validate and parse request body
        const { accountId, publicKey } = bodySchema.parse(await req.json());

        console.log("Login request body:", { accountId, publicKey });
        const session = await getIronSession<User>(cookies(), ironSessionConfig);
        console.log("session", session);
        session.loggedIn = true;
        console.log("logged in: ", session.loggedIn)

        if (!session.loggedIn) {
            return NextResponse.json({ ok: false }, { status: 401 });
        }

        session.accountId = accountId;
        session.publicKey = publicKey;

        console.log("NEW Session: ", session);
        await session.save();

        console.log("Next Response: ", NextResponse);
        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Error in POST function:', error);

        // Handle Zod validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 });
        }

        // Handle other types of errors
        return NextResponse.json({ ok: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
