import {
  Stack,
  Box,
  Typography,
  Divider,
  Paper,
  IconButton,
  Button,
  BoxProps,
} from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import { CustomRating } from "@/reusables/styleRating";
import { BookCartData, FetchedBookData, FetchedCart } from "@/types";
import axios from "axios";
import { useRecoilState } from "recoil";
import { cartItemState } from "@/state/atom/cart";
import CheckIcon from "@mui/icons-material/Check";

export default function BookItem({ book }: { book: FetchedBookData }) {
  const [cartItemLocalState, setCartItemLocalState] =
    useRecoilState(cartItemState);

  console.log(cartItemLocalState);

  const handleAddToCartClick = async () => {
    const data: BookCartData = {
      bookId: book.id,
      quantity: 1,
      userId: book.authorId,
    };

    const localCartState: FetchedCart = {
      book: {
        author: { profile: { penName: book.author.profile.penName } },
        cover: book.cover || "",
        price: book.price,
        title: book.title,
      },
      bookId: book.id,
      quantity: 1,
    };

    setCartItemLocalState((prev) => [...prev, localCartState]);

    await axios
      .post("/api/cart/add", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper elevation={2}>
      <Stack
        bgcolor="background.paper"
        borderRadius=".3rem"
        width="21rem"
        height="13rem"
        direction="row"
        spacing="1rem"
        padding=".8rem"
        position="relative"
        // sx={{ cursor: "pointer" }}
      >
        <Box
          bgcolor="rgba(0, 0, 0, .2)"
          borderRadius=".3rem"
          width="100%"
          height="100%"
          flex={1}
        >
          <Image
            src="/book-cover.png"
            width={500}
            height={500}
            alt="Book Cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: ".3rem",
            }}
          />
        </Box>
        <Stack width="100%" spacing={1} height="100%" flex={1}>
          <Typography fontWeight="bold" fontSize="1rem">
            {book.title}
          </Typography>
          <Divider sx={{ marginBlock: ".6rem", opacity: ".5" }} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing="1rem"
          >
            <Typography fontWeight="500" color="primary" fontSize=".7rem">
              {book.author.profile.penName}
            </Typography>
            <Typography fontWeight="500" fontSize=".7rem">
              January 10, 2022
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            {book.genres?.map((genre) => {
              return (
                <Button
                  variant="outlined"
                  key={genre}
                  sx={{
                    fontSize: ".5rem",
                    borderRadius: "10rem",
                    padding: ".1rem .5rem",
                    bgcolor: "rgba(0, 0, 100, .05)",
                    minWidth: "0",
                    width: "fit-content",
                  }}
                  size="small"
                >
                  {genre}
                </Button>
              );
            })}
          </Stack>
          <Stack height="100%" spacing={1} width="100%">
            <Stack flex={1} justifyContent="end" spacing={1}>
              <CustomRating size="small" />
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={1.5}
                alignItems="center"
              >
                <Typography fontWeight="bold" color="primary" fontSize="1.3rem">
                  ${book.price}
                </Typography>
                {cartItemLocalState.some((item) => item.bookId === book.id) ? (
                  <IconButton
                    sx={{
                      bgcolor: "rgba(0, 0, 100, .1)",
                      ":hover": { bgcolor: "rgba(0, 0, 100, .2)" },
                    }}
                    size="large"
                    color="primary"
                    disabled
                  >
                    <CheckIcon style={{ fontSize: "1.5rem" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    sx={{
                      bgcolor: "rgba(0, 0, 100, .1)",
                      ":hover": { bgcolor: "rgba(0, 0, 100, .2)" },
                    }}
                    size="large"
                    color="primary"
                    onClick={handleAddToCartClick}
                  >
                    <AddShoppingCartIcon style={{ fontSize: "1.5rem" }} />
                  </IconButton>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
