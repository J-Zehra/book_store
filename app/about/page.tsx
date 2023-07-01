"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { Box, Button, Container, Stack } from "@mui/material";

import React from "react";
import Filters from "../books/components/filters";

export default function About() {
  return (
    <ObserverWrapper name="About">
      <Box paddingY="8rem" bgcolor="background.default">
        <Container maxWidth="lg"></Container>
      </Box>
    </ObserverWrapper>
  );
}
