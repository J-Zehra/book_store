import { BookCartData, FetchedBookData, FetchedCart } from "@/types";
import { LoadingButton } from "@mui/lab";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CallMissedOutgoingRoundedIcon from "@mui/icons-material/CallMissedOutgoingRounded";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { userDataState } from "@/state/atom/user";
import axios from "axios";
import { useQuery } from "react-query";
import LoginNoticeModal from "@/reusables/loginNoticeModal";

export default function PopularBookItem({
  book,
  index,
}: {
  book: FetchedBookData;
  index: number;
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
      key={book.id}
      width="10rem"
      height="52%"
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
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: ".3rem",
          position: "absolute",
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
            "linear-gradient(to top, black, black, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        }}
      />

      <Stack
        p="1rem 1.2rem"
        zIndex={2}
        direction="row"
        justifyContent="space-between"
        alignItems="end"
        borderRadius=".3rem"
      >
        <Typography
          color="primary"
          fontWeight="bold"
          fontSize="1.3rem"
          sx={{ color: "#778DFF" }}
        >
          ${book.price}
        </Typography>
        <Stack direction="column" spacing={1}>
          <IconButton
            size="medium"
            onClick={() => handleVisitClick()}
            sx={{
              border: "1px dashed #778DFF",
              color: "#778DFF",
              bgcolor: "rgba(60, 60, 160, .3)",
              ":hover": { bgcolor: "rgba(60, 60, 160, .5)" },
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
                padding: ".6rem",
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
      <Box
        position="absolute"
        width=".6rem"
        height=".6rem"
        borderRadius="20rem"
        p=".4rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        top="-.4rem"
        right="-.4rem"
        fontSize=".8rem"
        color="white"
        bgcolor="primary.main"
      >
        {index + 2}
      </Box>
    </Stack>
  );
}
