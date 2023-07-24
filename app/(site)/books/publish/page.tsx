"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { BookData } from "@/types";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Autocomplete,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function SellBook() {
  const [title, setTitle] = useState<string>("");
  const [ISBN, setISBN] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const [genres, setGenres] = useState<string[] | null>([]);
  const [pageCount, setPageCount] = useState<number>();
  const [description, setDescription] = useState<string>("");

  const handlePublish = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const bookData: BookData = {
      title,
      isbn: ISBN,
      publisher,
      genres,
      description,
      pageCount: pageCount || 0,
    };

    axios
      .post("../api/publish", bookData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ObserverWrapper name="Sell Book">
      <Box paddingY="8rem" bgcolor="background.default">
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2}>
            <Box flex={1}>
              <Paper sx={{ height: "35rem", width: "25rem" }}></Paper>
            </Box>
            <Stack
              flex={1}
              spacing={2}
              component="form"
              onSubmit={handlePublish}
            >
              <TextField
                label="Title of the book"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Stack direction="row" spacing={2}>
                <TextField
                  label="ISBN"
                  value={ISBN}
                  onChange={(e) => setISBN(e.target.value)}
                />
                <TextField
                  label="Publisher"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />
                <TextField
                  label="Page Count"
                  value={pageCount}
                  type="number"
                  onChange={(e) => setPageCount(parseInt(e.target.value, 0))}
                />
              </Stack>
              <Autocomplete
                multiple
                limitTags={3}
                id="tags-outlined"
                options={genreList}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Genres"
                    placeholder="Add genre"
                  />
                )}
                onChange={(event: any, newValue: string[] | null) => {
                  setGenres(newValue);
                }}
              />
              <TextField
                id="standard-multiline-static"
                label="Write description"
                multiline
                rows={10}
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{
                  padding: "1rem",
                }}
                size="large"
                type="submit"
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

const genreList = ["Action", "Comedy", "Drama"];
