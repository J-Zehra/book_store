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
          height="25rem"
        >
          <Top1Book />
          <Stack
            borderRadius=".3rem"
            width="100%"
            height="100%"
            direction="row"
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            alignItems="end"
            justifyContent="end"
          >
            {[...Array(6)].map((_, index) => {
              return (
                <Box
                  key={index}
                  width="10rem"
                  height="13rem"
                  bgcolor="rgba(0, 0, 0, .1)"
                  borderRadius=".3rem"
                ></Box>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
