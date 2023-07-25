"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { Box, Container, Stack, Pagination, Typography } from "@mui/material";
import React from "react";
import Filters from "./components/filters";
import BookItem from "./components/bookItem";
import { useRecoilValue } from "recoil";
import { bookListState } from "@/state/atom/books";
import { BookData, FetchedBookData } from "@/types";

export default function Books() {
  const bookList = useRecoilValue(bookListState) as FetchedBookData[];

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
            1,234 books available
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
