import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    debug: true,
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        jwt: async ({ token, user, account, profile }) => {
            if (user) {
                token.user = user;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        session: ({ session, token }) => {
            token.accessToken;
            return {
                ...session,
                user: {
                    ...session.user,
                    role: token.role,
                },
            };
        },
    },
};
