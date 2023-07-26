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
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import { CustomRating } from "@/reusables/styleRating";
import { BookCartData, FetchedBookData, FetchedCart } from "@/types";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartItemState } from "@/state/atom/cart";
import CheckIcon from "@mui/icons-material/Check";
import { userDataState } from "@/state/atom/user";
import { useSession } from "next-auth/react";
import LoginNoticeModal from "../../../../reusables/loginNoticeModal";
import { useRouter } from "next/navigation";
import useSessionData from "@/hooks/useSessionData";
import moment from "moment";

export default function BookItem({ book }: { book: FetchedBookData }) {
  const navigate = useRouter();
  const { status, userData } = useSessionData();
  const [cartItemLocalState, setCartItemLocalState] =
    useRecoilState(cartItemState);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleAddToCartClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (status === "unauthenticated") {
      setOpenModal(true);
      return;
    }

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

  const handleBookItemClick = () => {
    navigate.push(`books/${book.id}`);
  };
  console.log(book);
  console.log(cartItemLocalState);

  return (
    <Paper elevation={2}>
      <Stack
        bgcolor="background.paper"
        borderRadius=".3rem"
        width="23rem"
        height="14rem"
        direction="row"
        spacing="1rem"
        padding=".8rem"
        position="relative"
        component="button"
        onClick={handleBookItemClick}
        sx={{ cursor: "pointer", border: "none" }}
      >
        <LoginNoticeModal openModal={openModal} setOpenModal={setOpenModal} />
        <Box
          bgcolor="rgba(0, 0, 0, .2)"
          borderRadius=".3rem"
          width="100%"
          height="100%"
          flex={1}
        >
          <Image
            src={book.cover || "/book-cover.png"}
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
        <Stack
          width="100%"
          alignItems="start"
          spacing={1}
          height="100%"
          flex={1}
        >
          <Typography fontWeight="bold" textAlign="start" fontSize="1rem">
            {book.title}
          </Typography>
          <Divider
            sx={{ marginBlock: ".6rem", opacity: ".5", width: "100%" }}
          />
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
              {moment(book.createdAt).format("LL")}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            {book.genres?.map((genre) => {
              return (
                <Button
                  variant="outlined"
                  key={genre}
                  sx={{
                    fontSize: ".6rem",
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
                ) : book.authorId === userData?.id ? (
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => navigate.push(`/myBooks/${book.id}`)}
                  >
                    Manage
                  </Button>
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
