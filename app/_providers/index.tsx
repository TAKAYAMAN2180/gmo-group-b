"use client";

import { SessionProvider } from "next-auth/react";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};