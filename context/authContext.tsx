"use client";

import { SessionProvider } from "next-auth/react";

const AuthContext = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default AuthContext;
