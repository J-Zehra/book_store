import { IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FetchedCart } from "@/types";
import { useRecoilState } from "recoil";
import { cartItemState } from "@/state/atom/cart";
import { selectedCartItems } from "@/state/atom/order";

export default function Quantity({ item }: { item: FetchedCart }) {
  const [cartItemLocalState, setCartItemLocalState] =
    useRecoilState(cartItemState);
  const [selectedCartItem, setSelectedCartItem] =
    useRecoilState(selectedCartItems);

  const [quantity, setQuantity] = useState<number>(item.quantity);

  useEffect(() => {
    const updatedCart = cartItemLocalState.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity };
      }
      return cartItem;
    });

    const updateSelectedItem = selectedCartItem.map((selected) => {
      if (selected.id === item.id) {
        return { ...selected, quantity };
      }
      return selected;
    });

    setSelectedCartItem(updateSelectedItem);
    setCartItemLocalState(updatedCart);
  }, [quantity]);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton
        disabled={quantity <= 1}
        onClick={() => setQuantity((prev) => prev - 1)}
        color="primary"
        sx={{
          width: "1rem",
          height: "1rem",
          padding: ".7rem",
          bgcolor: "rgba(0, 0, 100, .1)",
          ":hover": {
            bgcolor: "rgba(0, 0, 100, .2)",
          },
        }}
      >
        <RemoveIcon sx={{ fontSize: "1rem" }} />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton
        color="primary"
        onClick={() => setQuantity((prev) => prev + 1)}
        sx={{
          width: "1rem",
          height: "1rem",
          padding: ".7rem",
          bgcolor: "rgba(0, 0, 100, .1)",
          ":hover": {
            bgcolor: "rgba(0, 0, 100, .2)",
          },
        }}
      >
        <AddIcon sx={{ fontSize: "1rem" }} />
      </IconButton>
    </Stack>
  );
}
