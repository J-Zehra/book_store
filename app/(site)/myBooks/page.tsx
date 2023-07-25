"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { authorBookListSelector } from "@/state/selector/authorBooks";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import BookItem from "./components/bookItem";
import { authorBookLocal } from "@/state/atom/authorBooksLocal";

export default function MyBooks() {
  const books = useRecoilValue(authorBookListSelector);
  const [localBookState, setLocalBookState] = useRecoilState(authorBookLocal);
  console.log(books);

  useEffect(() => {
    if (books) {
      setLocalBookState(books);
    }
  }, [books, setLocalBookState]);

  return (
    <ObserverWrapper name="MyBook">
      <Box paddingY="8rem" bgcolor="background.default">
        <Container maxWidth="lg">
          <Typography fontSize="1.4rem" fontWeight="bold" color="primary.dark">
            My Books
          </Typography>
          <Stack spacing={2} width="100%" mt={5}>
            {localBookState.map((book) => {
              return <BookItem key={book.id} book={book} />;
            })}
          </Stack>
        </Container>
      </Box>
    </ObserverWrapper>
  );
}
