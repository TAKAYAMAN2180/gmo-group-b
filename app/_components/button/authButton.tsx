"use client";

import { signIn, signOut, useSession } from "next-auth/react";

// ログインボタン
export const LoginButton = () => {
    const { data: session, status: status } = useSession();
    console.log(session);
    console.log(status);

    return (
        <button style={{ marginRight: 10 }} onClick={() => signIn()}>
            Sign in
        </button>
    );
};

// ログアウトボタン
export const LogoutButton = () => {
    const { data: session, status: status } = useSession();
    console.log(session);
    console.log(status);

    return (
        <button style={{ marginRight: 10 }} onClick={() => signOut()}>
            Sign Out
        </button>
    );
};