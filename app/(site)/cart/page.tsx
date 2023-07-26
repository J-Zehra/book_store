"use client";

import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CartItem from "./components/cartItem";
import { cartItemState } from "@/state/atom/cart";

import EmptyCart from "./components/emptyCart";
import OrderSummary from "./components/orderSummary";
import { useQuery } from "react-query";
import axios from "axios";
import { FetchedCart } from "@/types";
import { userDataState } from "@/state/atom/user";

export default function CartPage() {
  const user = useRecoilValue(userDataState);
  const { data: cartItems, refetch } = useQuery(
    ["cartItems", user.id],
    async () => {
      const res = await axios.get(`/api/cart/get/${user.id}`);
      console.log(res);
      return res.data.items as FetchedCart[];
    }
  );

  return (
    <Box paddingY="8rem" bgcolor="background.default">
      <Container maxWidth="lg">
        {cartItems && cartItems?.length < 1 ? (
          <EmptyCart />
        ) : (
          <Stack direction="row" spacing={2}>
            <Stack flex={3} spacing={2}>
              {cartItems?.map((item) => {
                return <CartItem key={item.id} item={item} refetch={refetch} />;
              })}
            </Stack>
            <OrderSummary />
          </Stack>
        )}
      </Container>
    </Box>
  );
}
