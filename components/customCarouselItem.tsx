import { CustomRating } from "@/reusables/styleRating";
import { BookCartData, FetchedBookData, FetchedCart } from "@/types";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CallMissedOutgoingRoundedIcon from "@mui/icons-material/CallMissedOutgoingRounded";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { userDataState } from "@/state/atom/user";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import LoginNoticeModal from "@/reusables/loginNoticeModal";

export default function CustomCarouselItem({
  book,
}: {
  book: FetchedBookData;
}) {
  const navigate = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const user = useRecoilValue(userDataState);

  const { data: cartItems, refetch } = useQuery(
    ["cartItems", user.id],
    async () => {
      const res = await axios.get(`/api/cart/get/${user.id}`);
      console.log(res);
      return res.data.items as FetchedCart[];
    }
  );

  const handleVisitClick = () => {
    navigate.push(`/books/${book.id}`);
  };

  const handleAddToCartClick = async (book: FetchedBookData) => {
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
      width="16rem"
      height="24rem"
      bgcolor="background.paper"
      borderRadius=".3rem"
      boxShadow="5px 5px 8px rgba(0, 0, 10, .2)"
      position="relative"
      justifyContent="end"
    >
      <LoginNoticeModal openModal={openModal} setOpenModal={setOpenModal} />
      <Image
        src={book.cover || "/book-cover.png"}
        width={500}
        height={500}
        alt="Book Cover"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: ".3rem",
        }}
      />

      <Box
        width="100%"
        height="100%"
        position="absolute"
        top={0}
        right={0}
        borderRadius=".3rem"
        sx={{
          background:
            "linear-gradient(to top, black, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0))",
        }}
      />

      <Box p="1rem 1.5rem" zIndex={2}>
        <Stack direction="row" alignItems="end" justifyContent="space-between">
          <Stack spacing={2}>
            <CustomRating size="medium" />
            <Typography
              fontWeight="700"
              fontSize="1.5rem"
              sx={{ color: "#778DFF" }}
            >
              ${book.price}
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <IconButton
              size="medium"
              onClick={() => handleVisitClick()}
              sx={{
                border: "1px dashed #778DFF",
                padding: ".8rem",
                color: "#778DFF",
                ":hover": { bgcolor: "rgba(60, 60, 160, .3)" },
                transition: "all .3s ease",
              }}
            >
              <CallMissedOutgoingRoundedIcon />
            </IconButton>
            {cartItems?.some((item) => item.bookId === book?.id) ? (
              <IconButton
                sx={{
                  bgcolor: "rgba(0, 0, 100, .1)",
                  ":hover": { bgcolor: "rgba(0, 0, 100, .2)" },
                }}
                size="small"
                color="primary"
              >
                <CheckIcon style={{ fontSize: "1.5rem" }} />
              </IconButton>
            ) : (
              <LoadingButton
                loading={loading}
                sx={{
                  minWidth: "0",
                  padding: ".7rem",
                  border: "1px solid #778DFF",
                  borderRadius: "5rem",
                  color: "#778DFF",
                  bgcolor: "rgba(0, 0, 100, .1)",
                  ":hover": { bgcolor: "rgba(0, 0, 100, .2)" },
                }}
                size="small"
                onClick={() => handleAddToCartClick(book)}
              >
                <AddShoppingCartIcon style={{ fontSize: "1.5rem" }} />
              </LoadingButton>
            )}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
