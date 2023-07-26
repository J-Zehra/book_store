"use client";

import { ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { theme, authorTheme } from "../utils/theme";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
