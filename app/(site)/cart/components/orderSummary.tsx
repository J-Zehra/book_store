import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Address from "./address";
import { useRecoilValue } from "recoil";
import { selectedCartItems } from "@/state/atom/order";
import { useRouter } from "next/navigation";

export default function OrderSummary() {
  const items = useRecoilValue(selectedCartItems);

  const calculateTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.book.price * item.quantity;
    });

    return total;
  };
  const navigate = useRouter();

  const handleCheckout = () => {
    navigate.push("/checkout");
  };

  return (
    <Paper elevation={0} sx={{ flex: 1.5, height: "fit-content" }}>
      <Stack p="1rem" spacing={2} justifyContent="center" alignItems="center">
        <Typography fontSize="1.3rem" fontWeight="bold" color="text.primary">
          Order Summary
        </Typography>
        <Address />
        <Stack width="100%" pt={5} spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Total: </Typography>
            <Typography color="primary" fontSize="2rem" fontWeight="bold">
              ${calculateTotalPrice()}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            onClick={handleCheckout}
            color="primary"
            sx={{ padding: "1rem" }}
          >
            Proceed to checkout
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}