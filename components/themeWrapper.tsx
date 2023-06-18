"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { theme } from "../utils/theme";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
