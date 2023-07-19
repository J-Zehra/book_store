"use client";

import { Avatar, Box, Container } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

export default function AuthorInfo() {
  const { id } = useParams();

  return (
    <Box paddingY="8rem" bgcolor="background.default">
      <Container maxWidth="lg">
        <Avatar
          sx={{
            width: "16rem",
            height: "16rem",
            bgcolor: "primary.300",
          }}
        ></Avatar>
      </Container>
    </Box>
  );
}
