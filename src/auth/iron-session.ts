import { type SessionOptions } from "iron-session";


export const ironSessionConfig: SessionOptions = {
    cookieName: "near-copilot-session",
    password: process.env.SESSION_PASSWORD ?? "secretsecretsecretsecretsecretsecretsecretsecretsecret",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        path: "/",
        httpOnly: true,
    },
};