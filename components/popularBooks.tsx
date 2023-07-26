import { Box, IconButton, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Top1Book from "./top1Book";
import Image from "next/image";

import { useRouter } from "next/navigation";
import axios from "axios";
import { BookCartData, FetchedBookData, FetchedCart } from "@/types";
import { useQuery } from "react-query";
import { LoadingButton } from "@mui/lab";
import { useRecoilValue } from "recoil";
import { userDataState } from "@/state/atom/user";

import PopularBookItem from "./popularBookItem";

export default function PopularBooks() {
  const user = useRecoilValue(userDataState);

  const { data: books } = useQuery(["top"], async () => {
    const res = await axios.get("/api/books/top");
    console.log(res);
    return res.data as FetchedBookData[];
  });

  return (
    <Box
      sx={{
        paddingBlock: "5rem",
      }}
      bgcolor="background.default"
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1}>
          <Typography fontSize="1.2rem" fontWeight="bold">
            Top 7 Popular
          </Typography>
          <Typography fontSize="1.2rem" fontWeight="bold" color="primary.500">
            Books
          </Typography>
        </Stack>
        <Stack
          justifyContent="space-between"
          spacing={2}
          direction="row"
          marginTop="2rem"
          height="30rem"
        >
          <Top1Book />
          <Stack
            borderRadius=".3rem"
            width="100%"
            height="100%"
            direction="row"
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            alignItems="end"
            justifyContent="end"
          >
            {books?.map((book, index) => {
              return (
                <PopularBookItem key={book.id} book={book} index={index} />
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
