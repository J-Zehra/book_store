import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCarousel from "./customCarousel";
import { FetchedBookData } from "@/types";
import axios from "axios";

export default function BudgetBooks() {
  const [books, setBooks] = useState<FetchedBookData[]>();

  useEffect(() => {
    axios
      .get("/api/books/random")
      .then((res) => {
        console.log(res);
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
            Low
          </Typography>
          <Typography fontSize="1.2rem" fontWeight="bold" color="primary">
            Budget?
          </Typography>
        </Stack>

        <CustomCarousel books={books} />
      </Container>
    </Box>
  );
}
