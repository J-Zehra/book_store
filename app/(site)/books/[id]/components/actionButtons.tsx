import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useRecoilState, useRecoilValue } from "recoil";
import { userDataState } from "@/state/atom/user";
import { useQuery } from "react-query";
import {
  BookCartData,
  BookFullDetails,
  FetchedBookData,
  FetchedCart,
} from "@/types";
import axios from "axios";
import LoginNoticeModal from "@/reusables/loginNoticeModal";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/navigation";
import { selectedCartItems, selectedOrderItem } from "@/state/atom/order";

export default function ActionButtons({
  book,
  quantity,
}: {
  book: BookFullDetails;
  quantity: number;
}) {
  const navigate = useRouter();
  const user = useRecoilValue(userDataState);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [order, setOrder] = useRecoilState(selectedCartItems);

  const { data: cartItems, refetch } = useQuery(
    ["cartItems", user.id],
    async () => {
      const res = await axios.get(`/api/cart/get/${user.id}`);
      console.log(res);
      return res.data.items as FetchedCart[];
    }
  );

  const handleAddToCartClick = async () => {
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
        refetch();
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack direction="row" spacing={1.5} pt={1} pb={1}>
      <LoginNoticeModal openModal={openModal} setOpenModal={setOpenModal} />
      {cartItems?.some((item) => item.bookId === book?.id) ? (
        <Button
          variant="outlined"
          fullWidth
          size="large"
          disabled
          startIcon={<AddShoppingCartIcon />}
          sx={{ fontSize: "1rem", padding: "1rem" }}
        >
          Already in the cart
        </Button>
      ) : (
        <LoadingButton
          loading={loading}
          variant="outlined"
          fullWidth
          size="large"
          startIcon={<AddShoppingCartIcon />}
          sx={{ fontSize: "1rem", padding: "1rem" }}
          onClick={handleAddToCartClick}
        >
          Add to cart
        </LoadingButton>
      )}
      <Button
        startIcon={<AttachMoneyIcon />}
        variant="contained"
        fullWidth
        size="large"
        onClick={() => {
          const bookDetail: FetchedCart = {
            book: {
              author: { profile: { penName: book?.author.profile.penName } },
              cover: book.cover,
              price: book.price,
              title: book.title,
              authorId: book?.authorId,
            },
            bookId: book.id,
            quantity,
          };
          setOrder((prev) => [...prev, bookDetail]);
          navigate.push("/checkout");
        }}
        sx={{ fontSize: "1rem", padding: "1rem" }}
      >
        Buy now
      </Button>
    </Stack>
  );
}
