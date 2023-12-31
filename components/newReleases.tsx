import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCarousel from "./customCarousel";
import { FetchedBookData } from "@/types";
import axios from "axios";

export default function NewReleases() {
  const [books, setBooks] = useState<FetchedBookData[]>();

  useEffect(() => {
    axios
      .get("/api/books/new")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box bgcolor="background.default">
      <Container maxWidth="lg">
        <Stack direction="row" paddingY="2rem" spacing={1}>
          <Typography fontSize="1.2rem" fontWeight="bold">
            New
          </Typography>
          <Typography fontSize="1.2rem" fontWeight="bold" color="primary">
            Releases
          </Typography>
        </Stack>

        <CustomCarousel books={books} />
      </Container>
    </Box>
  );
}
