"use client";

import { Avatar, Box, Container } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

export default function BookInfo() {
  const { id } = useParams();

  return (
    <Box paddingY="8rem" bgcolor="background.default">
      <Container maxWidth="lg"></Container>
    </Box>
  );
}
