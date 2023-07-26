import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCarousel from "./customCarousel";
import { FetchedBookData } from "@/types";
import axios from "axios";

export default function BestSellers() {
  const [books, setBooks] = useState<FetchedBookData[]>();

  useEffect(() => {
    axios
      .get("/api/books/best-sellers")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box bgcolor="background.default" paddingBottom="2.5rem">
      <Container maxWidth="lg">
        <Stack direction="row" paddingY="2rem" spacing={1}>
          <Typography fontSize="1.2rem" fontWeight="bold">
            Best
          </Typography>
          <Typography fontSize="1.2rem" fontWeight="bold" color="primary">
            Sellers
          </Typography>
        </Stack>

        <CustomCarousel books={books} />
      </Container>
    </Box>
  );
}
