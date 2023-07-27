"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { Box, Container, Stack, Pagination, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Filters from "./components/filters";
import BookItem from "./components/bookItem";
import { BookData, FetchedBookData, FetchedCart } from "@/types";
import axios from "axios";
import { useQuery } from "react-query";

export default function Books() {
  const { data: bookList } = useQuery(
    ["books"],
    async () => {
      const res = await axios.get("/api/books");
      console.log(res);
      return res.data as FetchedBookData[];
    },
    { refetchOnMount: true }
  );

  return (
    <ObserverWrapper name="Books">
      <Box paddingY="8rem" bgcolor="background.default">
        <Container maxWidth="lg">
          <Filters />
          <Typography
            fontSize="1rem"
            fontWeight="600"
            sx={{ opacity: ".8" }}
            marginTop="4rem"
            marginBottom="1.5rem"
          >
            {bookList?.length} books available
          </Typography>
          <Stack direction="row" useFlexGap flexWrap="wrap" spacing={3}>
            {bookList?.map((book) => {
              return <BookItem key={book.id} book={book} />;
            })}
          </Stack>
          <Stack alignItems="center" marginTop="2rem">
            <Pagination
              count={10}
              variant="outlined"
              size="large"
              shape="rounded"
              color="primary"
            />
          </Stack>
        </Container>
      </Box>
    </ObserverWrapper>
  );
}
