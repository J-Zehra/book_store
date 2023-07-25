"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Lottie from "react-lottie-player";
import { useRecoilValue } from "recoil";
import EmptyCartAnimation from "../../../public/animations/emptyCart.json";
import CartItem from "./components/cartItem";
import Address from "./components/address";
import { cartItemState } from "@/state/atom/cart";
import { cartItemsSelector } from "@/state/selector/cartItemsSelector";

export default function CartPage() {
  const cartItemLocalState = useRecoilValue(cartItemState);

  return (
    <Box paddingY="8rem" bgcolor="background.default">
      <Container maxWidth="lg">
        {cartItemLocalState.length < 1 ? (
          <Stack
            width="100%"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Lottie
              loop
              animationData={EmptyCartAnimation}
              play
              style={{ width: 400, height: 400 }}
            />
            <Stack
              sx={{ position: "absolute" }}
              pt={40}
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography sx={{ opacity: ".6" }} fontWeight="medium">
                Empty
              </Typography>
              <Button color="primary" variant="contained">
                Continue Browsing
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Stack direction="row" spacing={2}>
            <Stack flex={3} spacing={2}>
              {cartItemLocalState.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </Stack>
            <Paper elevation={0} sx={{ flex: 1.5, height: "fit-content" }}>
              <Stack
                p="1rem"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  fontSize="1.3rem"
                  fontWeight="bold"
                  color="text.primary"
                >
                  Order Summary
                </Typography>
                <Address />
                <Stack width="100%" pt={5} spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Total: </Typography>
                    <Typography
                      color="primary"
                      fontSize="2rem"
                      fontWeight="bold"
                    >
                      $120
                    </Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ padding: "1rem" }}
                  >
                    Proceed to checkout
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        )}
      </Container>
    </Box>
  );
}
