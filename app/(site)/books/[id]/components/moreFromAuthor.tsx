import CustomCarousel from "@/components/customCarousel";
import { FetchedBookData } from "@/types";
import { Box, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MoreFromAuthor({ id }: { id?: string }) {
  const [books, setBooks] = useState<FetchedBookData[]>();

  useEffect(() => {
    axios
      .get(`/api/books/author/${id}`)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [id]);

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
        <CustomCarousel books={books} />
      </Container>
    </Box>
  );
}
