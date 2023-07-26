"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import Filters from "./components/filters";
import AuthorItem from "./components/authorItem";
import { useQuery } from "react-query";
import axios from "axios";
import { Author } from "@/types";

export default function Authors() {
  const { data: authors, refetch } = useQuery(["my-books"], async () => {
    const res = await axios.get(`/api/author`);
    console.log(res);
    return res.data as Author[];
  });

  return (
    <ObserverWrapper name="Authors">
      <Box bgcolor="background.default" paddingY="8rem">
        <Container maxWidth="lg">
          <Filters />
          <Typography
            fontSize="1rem"
            fontWeight="600"
            sx={{ opacity: ".8" }}
            marginTop="4rem"
            marginBottom="1.5rem"
          >
            {authors?.length} authors available
          </Typography>
          <Stack direction="row" useFlexGap flexWrap="wrap" spacing={3}>
            {authors?.map((author) => {
              return <AuthorItem key={author.id} author={author} />;
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
