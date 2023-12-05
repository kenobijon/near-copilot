import { z } from "zod";

export const userSchema = z.union([
    z.object({
        loggedIn: z.literal(false),
    }),
    z.object({
        loggedIn: z.literal(true),
        accountId: z.string(),
        publicKey: z.string(),
        admin: z.boolean().default(false),
        hasProfile: z.literal(false),
    }),
    z.object({
        loggedIn: z.literal(true),
        accountId: z.string(),
        publicKey: z.string(),
        admin: z.boolean().default(false),
        hasProfile: z.literal(true),
        profileType: z.enum(["project", "contributor", "backer"]),
    }),
]);

export type User = z.infer<typeof userSchema>;

export const DEFAULT_USER: User = {
    loggedIn: false,
};