import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CustomCarousel from "./customCarousel";

export default function NewReleases() {
  return (
    <Box bgcolor="background.default">
      <Container maxWidth="lg">
        <Stack direction="row" paddingY="2rem" spacing={1}>
          <Typography fontSize="1.2rem" fontWeight="bold">
            New
          </Typography>
          <Typography fontSize="1.2rem" fontWeight="bold" color="primary.500">
            Releases
          </Typography>
        </Stack>

        <CustomCarousel />
      </Container>
    </Box>
  );
}
