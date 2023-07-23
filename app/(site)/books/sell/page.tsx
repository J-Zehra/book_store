"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { open_sans } from "@/utils/font";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React from "react";

export default function SellBook() {
  return (
    <ObserverWrapper name="Sell Book">
      <Box paddingY="8rem" bgcolor="background.default">
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2}>
            <Box flex={1}>
              <Paper sx={{ height: "35rem", width: "25rem" }}></Paper>
            </Box>
            <Stack flex={1} spacing={2}>
              <TextField label="Title of the book" />
              <Stack direction="row" spacing={2}>
                <TextField label="ISBN" />
                <TextField label="Publisher" />
                <TextField label="Page Count" />
              </Stack>
              <TextField
                id="standard-multiline-static"
                label="Write description"
                multiline
                rows={13}
                variant="outlined"
              />
              <Button
                variant="contained"
                sx={{
                  padding: "1rem",
                }}
                size="large"
              >
                Publish
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ObserverWrapper>
  );
}
