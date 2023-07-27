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
import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import { CustomRating } from "@/reusables/styleRating";
import { BookCartData, FetchedBookData, FetchedCart } from "@/types";
import axios from "axios";
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import CheckIcon from "@mui/icons-material/Check";
import LoginNoticeModal from "../../../../reusables/loginNoticeModal";
import { useRouter } from "next/navigation";
import moment from "moment";
import { userDataState } from "@/state/atom/user";
import { selectedCartItems } from "@/state/atom/order";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQuery,
} from "react-query";
import { LoadingButton } from "@mui/lab";

export default function BookItem({ book }: { book: FetchedBookData }) {
  const navigate = useRouter();
  const user = useRecoilValue(userDataState);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { data: cartItems, refetch } = useQuery(
    ["cartItems", user.id],
    async () => {
      const res = await axios.get(`/api/cart/get/${user.id}`);
      console.log(res);
      return res.data.items as FetchedCart[];
    }
  );

  const handleAddToCartClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!user.id) {
      setOpenModal(true);
      return;
    }

    setLoading(true);

    const data: BookCartData = {
      bookId: book.id,
      quantity: 1,
      userId: user.id,
    };

    await axios
      .post("/api/cart/add", data)
      .then((res) => {
        refetch();
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBookItemClick = () => {
    navigate.push(`books/${book.id}`);
  };

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
                {cartItems?.some((item) => item.bookId === book.id) ? (
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
                ) : book.authorId === user?.id ? (
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate.push(`/myBooks/${book.id}`);
                    }}
                  >
                    Manage
                  </Button>
                ) : (
                  <LoadingButton
                    loading={loading}
                    sx={{
                      minWidth: "0",
                      padding: ".8rem",
                      borderRadius: "5rem",
                      bgcolor: "rgba(0, 0, 100, .1)",
                      ":hover": { bgcolor: "rgba(0, 0, 100, .2)" },
                    }}
                    size="small"
                    color="primary"
                    onClick={handleAddToCartClick}
                  >
                    <AddShoppingCartIcon style={{ fontSize: "1.5rem" }} />
                  </LoadingButton>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
