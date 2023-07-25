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
  Typography,
  Autocomplete,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import Uploader from "./components/uploader";
import SuccessModal from "./components/successModal";
import { LoadingButton } from "@mui/lab";

export default function SellBook() {
  const [title, setTitle] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [genres, setGenres] = useState<string[] | null>([]);
  const [pageCount, setPageCount] = useState<number | undefined>(undefined);
  const [totalStocks, setTotalStocks] = useState<number | undefined>(undefined);
  const [description, setDescription] = useState<string>("");
  const [cover, setCover] = useState<{ fileUrl: string; fileKey: string }[]>(
    []
  );
  const [publishing, setPublishing] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const emptyAllState = () => {
    setTitle("");
    setLanguage("");
    setPublisher("");
    setPrice(undefined);
    setGenres([]);
    setPageCount(undefined);
    setTotalStocks(undefined);
    setDescription("");
    setCover([]);
  };

  const handlePublish = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPublishing(true);
    if (
      !title ||
      !publisher ||
      !language ||
      !price ||
      !genres ||
      !pageCount ||
      !totalStocks ||
      !description ||
      !cover
    ) {
      toast.error("Please fill all the fields");
      setPublishing(false);
      return;
    }

    const bookData: BookData = {
      title,
      price: price || 0,
      publisher,
      genres,
      description,
      pageCount: pageCount || 0,
      language,
      cover: cover[0].fileUrl,
      totalStocks: totalStocks || 0,
    };

    axios
      .post("../api/publish", bookData)
      .then((res) => {
        setPublishing(false);
        setOpenModal(true);
        emptyAllState();
        console.log(res);
      })
      .catch((err) => {
        setPublishing(false);
        console.log(err);
      });
  };

  return (
    <ObserverWrapper name="Publish">
      <Toaster />
      <SuccessModal openModal={openModal} setOpenModal={setOpenModal} />
      <Box paddingY="8rem" bgcolor="background.default">
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} alignItems="center">
            <Box flex={1}>
              <Paper
                elevation={0}
                sx={{ height: "35rem", width: "25rem", p: ".5rem" }}
              >
                {cover.length > 0 ? (
                  <Image
                    src={cover[0].fileUrl}
                    alt="Cover"
                    width={500}
                    height={500}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Uploader setCover={setCover} />
                )}
              </Paper>
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
                  label="Price"
                  value={price}
                  type="number"
                  onChange={(e) => setPrice(parseInt(e.target.value, 0))}
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
              <Stack direction="row" width="100%" spacing={2}>
                <TextField
                  fullWidth
                  label="Language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                <TextField
                  label="Total Stocks"
                  value={totalStocks}
                  type="number"
                  fullWidth
                  onChange={(e) => setTotalStocks(parseInt(e.target.value, 0))}
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
                rows={7}
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <LoadingButton
                loading={publishing}
                variant="contained"
                sx={{
                  padding: "1rem",
                }}
                size="large"
                type="submit"
              >
                Publish
              </LoadingButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ObserverWrapper>
  );
}

const genreList = [
  "Action",
  "Comedy",
  "Drama",
  "Romance",
  "Thriller",
  "Sci-fi",
  "Horror",
  "Historical",
  "Mystery",
  "Fantasy",
  "Musicals",
  "Adventure",
  "Sports",
  "Western",
];
