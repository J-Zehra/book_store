"use client";

import { ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { theme, authorTheme } from "../utils/theme";
import useSessionData from "@/hooks/useSessionData";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const { userData } = useSessionData();

  // if (userData?.author) {
  //   return <ThemeProvider theme={authorTheme}>{children}</ThemeProvider>;
  // }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
