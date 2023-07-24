import CustomCarousel from "@/components/customCarousel";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function MoreFromAuthor() {
  return (
    <Box bgcolor="background.default" pt={5}>
      <Container maxWidth="lg">
        <Stack direction="row" paddingY="2rem" spacing={1}>
          <Typography fontSize="1.2rem" fontWeight="bold">
            More from this
          </Typography>
          <Typography fontSize="1.2rem" fontWeight="bold" color="primary">
            Author
          </Typography>
        </Stack>
        <CustomCarousel />
      </Container>
    </Box>
  );
}
