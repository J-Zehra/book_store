"use client";

import { SessionProvider } from "next-auth/react";
import AuthGuard from "./authGuard";

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AuthGuard>{children}</AuthGuard>
    </SessionProvider>
  );
}
