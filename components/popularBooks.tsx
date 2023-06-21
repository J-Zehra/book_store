import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function PopularBooks() {
  return (
    <Box bgcolor="#E9EAEB" sx={{ paddingBlock: "4rem" }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1}>
          <Typography fontSize="1.1rem" fontWeight="bold">
            TOP 7 POPULAR
          </Typography>
          <Typography fontSize="1.1rem" fontWeight="bold" color="primary.500">
            BOOKS
          </Typography>
        </Stack>
        <Stack
          justifyContent="space-between"
          spacing={2}
          direction="row"
          marginTop="2rem"
        >
          <Box
            bgcolor="rgba(0, 0, 0, .1)"
            borderRadius=".3rem"
            width="100%"
            height="20rem"
          ></Box>
          <Box
            bgcolor="rgba(0, 0, 0, .1)"
            borderRadius=".3rem"
            width="100%"
            height="20rem"
          ></Box>
        </Stack>
      </Container>
    </Box>
  );
}
