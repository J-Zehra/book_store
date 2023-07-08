"use client";

import { SessionProvider, getSession, useSession } from "next-auth/react";

const AuthContext = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default AuthContext;
