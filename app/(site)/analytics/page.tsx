"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { Box, Container } from "@mui/material";
import React from "react";

export default function AnalyticsPage() {
  return (
    <ObserverWrapper name="Analytics">
      <Box bgcolor="background.default" paddingY="8rem">
        <Container maxWidth="lg"></Container>
      </Box>
    </ObserverWrapper>
  );
}
