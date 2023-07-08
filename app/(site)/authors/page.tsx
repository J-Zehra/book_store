"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import Filters from "./components/filters";
import AuthorItem from "./components/authorItem";

export default function Authors() {
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
            1,234 authors available
          </Typography>
          <Stack direction="row" useFlexGap flexWrap="wrap" spacing={3}>
            {[...Array(12)].map((_, index) => {
              return <AuthorItem key={index} />;
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
