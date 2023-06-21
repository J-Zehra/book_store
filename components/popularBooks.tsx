import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function PopularBooks() {
  return (
    <Box bgcolor="#E9EAEB" sx={{ paddingBlock: "2rem" }}>
      <Container maxWidth="lg">
        <Typography fontSize="1.2rem" fontWeight="bold">
          Top 7 Popular
        </Typography>
      </Container>
    </Box>
  );
}
