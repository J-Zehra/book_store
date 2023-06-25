"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box paddingY="2rem" bgcolor="background.paper">
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1}>
          <Stack flex={1} spacing={2}>
            <Stack spacing={1}>
              <Typography fontSize="1.3rem" fontWeight="medium">
                Get in touch with us
              </Typography>
              <Box
                width="3rem"
                height=".2rem"
                borderRadius=".5rem"
                bgcolor="primary.500"
              />
            </Stack>
            <Box>
              <Typography fontSize=".9rem">
                {` Have a question or suggestion? We're here to help! Contact us
                below and we'll be happy to assist you.`}
              </Typography>
            </Box>
          </Stack>
          <Stack flex={1}></Stack>
          <Stack flex={1}></Stack>
        </Stack>
        <Stack></Stack>
      </Container>
    </Box>
  );
}
