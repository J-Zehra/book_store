import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LinesEllipsis from "react-lines-ellipsis";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CustomRating } from "@/reusables/styleRating";
import { useRouter } from "next/navigation";
import { BookCartData, FetchedBookData, FetchedCart } from "@/types";
import axios from "axios";
import moment from "moment";
import { useRecoilValue } from "recoil";
import { userDataState } from "@/state/atom/user";
import { LoadingButton } from "@mui/lab";
import { useQuery } from "react-query";
import CheckIcon from "@mui/icons-material/Check";
import LoginNoticeModal from "@/reusables/loginNoticeModal";

export default function Top1Book() {
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

  const { data: book } = useQuery(["top-1"], async () => {
    const res = await axios.get("/api/books/top1");
    console.log(res);
    return res.data[0] as FetchedBookData;
  });

  const handleVisitClick = () => {
    navigate.push(`books/${book?.id}`);
  };

  const handleAddToCartClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!user.id) {
      setOpenModal(true);
      return;
    }

    setLoading(true);

    let data: BookCartData | null = null;
    if (book) {
      data = {
        bookId: book.id,
        quantity: 1,
        userId: user.id,
      };
    }

    await axios
      .post("/api/cart/add", data)
      .then((res) => {
        setLoading(false);
        refetch();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack
      bgcolor="background.paper"
      borderRadius=".3rem"
      width="100%"
      height="100%"
      direction="row"
      spacing="1rem"
      padding="1rem"
      boxShadow="2px 4px 8px rgba(0, 0, 10, .2)"
      position="relative"
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
          src={book?.cover || "/book-cover.png"}
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
        <Typography fontWeight="bold" fontSize="1.3rem">
          {book?.title}
        </Typography>
        <Divider sx={{ marginBlock: ".6rem", opacity: ".5" }} />
        <Stack direction="row" alignItems="center" spacing="1rem">
          <Typography color="primary" fontSize=".8rem">
            {book?.author.profile.penName}
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ height: "1rem", opacity: ".5" }}
          />
          <Typography fontSize=".8rem">
            {moment(book?.createdAt).format("LL")}
          </Typography>
        </Stack>
        <Stack height="100%" spacing={1} width="100%">
          <Box
            flex={1.5}
            paddingTop="1.5rem"
            color="rgba(0, 0, 0, .8)"
            fontSize="1rem"
          >
            <LinesEllipsis
              text={book?.description}
              maxLine="10"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Box>
          <Stack flex={1} justifyContent="end" spacing={1}>
            <CustomRating size="medium" />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight="bold" color="primary" fontSize="1.6rem">
                ${book?.price}
              </Typography>
              <Stack spacing={2.5} direction="row">
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  direction="row"
                  spacing={1}
                >
                  <LoyaltyIcon sx={{ color: "primary.main" }} />
                  <Typography fontSize=".8rem" color="primary">
                    {book?.bookSale?.length}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleVisitClick}
                sx={{ fontSize: ".9rem", padding: ".6rem" }}
              >
                More info
              </Button>
              {cartItems?.some((item) => item.bookId === book?.id) ? (
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
                <LoadingButton
                  loading={loading}
                  startIcon={<AddShoppingCartIcon />}
                  variant="contained"
                  fullWidth
                  size="medium"
                  onClick={handleAddToCartClick}
                  sx={{ fontSize: ".9rem", padding: ".6rem" }}
                >
                  Add to cart
                </LoadingButton>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Box
        position="absolute"
        width=".8rem"
        height=".8rem"
        borderRadius="20rem"
        p=".6rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        top="-.6rem"
        right="-.6rem"
        color="white"
        bgcolor="primary.main"
      >
        1
      </Box>
    </Stack>
  );
}
