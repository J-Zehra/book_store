import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CustomCarousel from "./customCarousel";

export default function BestSellers() {
  return (
    <Box bgcolor="background.default" paddingBottom="2.5rem">
      <Container maxWidth="lg">
        <Stack direction="row" paddingY="2rem" spacing={1}>
          <Typography fontSize="1.1rem" fontWeight="bold">
            Best
          </Typography>
          <Typography fontSize="1.1rem" fontWeight="bold" color="primary.500">
            Sellers
          </Typography>
        </Stack>

        <CustomCarousel />
      </Container>
    </Box>
  );
}
