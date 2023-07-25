"use client";

import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import CartItem from "./components/cartItem";
import { cartItemState } from "@/state/atom/cart";

import EmptyCart from "./components/emptyCart";
import OrderSummary from "./components/orderSummary";

export default function CartPage() {
  const cartItemLocalState = useRecoilValue(cartItemState);

  return (
    <Box paddingY="8rem" bgcolor="background.default">
      <Container maxWidth="lg">
        {cartItemLocalState.length < 1 ? (
          <EmptyCart />
        ) : (
          <Stack direction="row" spacing={2}>
            <Stack flex={3} spacing={2}>
              {cartItemLocalState.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </Stack>
            <OrderSummary />
          </Stack>
        )}
      </Container>
    </Box>
  );
}
