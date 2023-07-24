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
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Lottie from "react-lottie-player";
import UploadAnimation from "../../../../public/animations/upload.json";
import Image from "next/image";

export default function SellBook() {
  const [title, setTitle] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [genres, setGenres] = useState<string[] | null>([]);
  const [pageCount, setPageCount] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [filePreviewUrl, setFilePreviewUrl] = useState<string>("");

  const handlePublish = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const bookData: BookData = {
      title,
      price: price || 0,
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

  const handleChange = (file: File) => {
    setFilePreviewUrl(URL.createObjectURL(file));
    setFile(file);
  };

  return (
    <ObserverWrapper name="Sell Book">
      <Box paddingY="8rem" bgcolor="background.default">
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} alignItems="center">
            <Box flex={1}>
              <Paper
                elevation={0}
                sx={{ height: "35rem", width: "25rem", p: ".5rem" }}
              >
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={["JPG", "PNG", "GIF"]}
                >
                  {filePreviewUrl ? (
                    <Image
                      src={filePreviewUrl}
                      width={500}
                      height={500}
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: ".3rem",
                      }}
                    />
                  ) : (
                    <Stack
                      height="100%"
                      width="100%"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ cursor: "pointer" }}
                    >
                      <Lottie
                        loop
                        animationData={UploadAnimation}
                        play
                        style={{ width: 200, height: 200 }}
                      />
                      <Typography
                        fontWeight="medium"
                        fontSize="1.1rem"
                        sx={{ opacity: ".5" }}
                      >
                        Drag and drop your book cover here
                      </Typography>
                      <Stack alignItems="center" mt={1} spacing={1}>
                        <Typography
                          fontWeight="medium"
                          fontSize="1.1rem"
                          sx={{ opacity: ".5" }}
                        >
                          or
                        </Typography>
                        <Button variant="contained">Browse</Button>
                      </Stack>
                    </Stack>
                  )}
                </FileUploader>
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
