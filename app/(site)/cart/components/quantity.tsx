import { IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FetchedCart } from "@/types";
import { useRecoilState } from "recoil";
import { cartItemState } from "@/state/atom/cart";
import { selectedCartItems } from "@/state/atom/order";

export default function Quantity({ item }: { item: FetchedCart }) {
  const [selectedCartItem, setSelectedCartItem] =
    useRecoilState(selectedCartItems);

  const [quantity, setQuantity] = useState<number>(item.quantity);

  useEffect(() => {
    const updateSelectedItem = selectedCartItem.map((selected) => {
      if (selected.id === item.id) {
        return { ...selected, quantity };
      }
      return selected;
    });

    setSelectedCartItem(updateSelectedItem);
  }, [quantity]);

  return (
    <Stack direction="row" spacing={1} ml={5} alignItems="center">
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
      <Typography fontSize=".8rem">{quantity}</Typography>
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
