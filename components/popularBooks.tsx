import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Top1Book from "./top1Book";

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
          <Top1Book />
          <Box
            bgcolor="rgba(0, 0, 0, .1)"
            borderRadius=".3rem"
            width="100%"
            height="25rem"
          ></Box>
        </Stack>
      </Container>
    </Box>
  );
}
