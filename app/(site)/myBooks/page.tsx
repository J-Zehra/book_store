"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { authorBookListSelector } from "@/state/selector/authorBooks";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import BookItem from "./components/bookItem";
import { authorBookLocal } from "@/state/atom/authorBooksLocal";
import { useQuery } from "react-query";
import { FetchedBookData } from "@/types";
import { userDataState } from "@/state/atom/user";
import axios from "axios";

export default function MyBooks() {
  const user = useRecoilValue(userDataState);

  const { data: bookList, refetch } = useQuery(["my-books"], async () => {
    const res = await axios.get(`/api/books/author/${user.id}`);
    console.log(res);
    return res.data as FetchedBookData[];
  });

  return (
    <ObserverWrapper name="MyBook">
      <Box paddingY="8rem" bgcolor="background.default">
        <Container maxWidth="lg">
          <Typography fontSize="1.4rem" fontWeight="bold" color="primary.dark">
            My Books
          </Typography>
          <Typography mt={5} mb={2}>{bookList?.length} total books</Typography>
          <Stack spacing={2} width="100%">
            {bookList?.map((book) => {
              return <BookItem key={book.id} book={book} refetch={refetch} />;
            })}
          </Stack>
        </Container>
      </Box>
    </ObserverWrapper>
  );
}
