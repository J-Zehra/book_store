import { FetchedCart } from "@/types";
import {
  Box,
  Checkbox,
  Chip,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useRecoilState } from "recoil";
import { cartItemState } from "@/state/atom/cart";

export default function CartItem({ item }: { item: FetchedCart }) {
  const [cartItemLocalState, setCartItemLocalState] =
    useRecoilState(cartItemState);

  const handleDeleteItem = async () => {
    const newList = cartItemLocalState.filter((cartItem) => {
      return item.id !== cartItem.id;
    });

    setCartItemLocalState(newList);

    axios
      .delete("/api/cart/delete", { params: { id: item.id } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper elevation={0}>
      <Stack
        direction="row"
        justifyContent="space-between"
        padding=".6rem"
        height="4rem"
      >
        <Stack direction="row" spacing={2}>
          <Box
            width="3rem"
            borderRadius=".3rem"
            height="100%"
            bgcolor="rgba(0, 0, 0, .1)"
          />
          <Stack justifyContent="space-between">
            <Stack spacing={1} direction="row" alignItems="center">
              <Typography
                fontSize="1rem"
                fontWeight="medium"
                sx={{ opacity: ".8rem" }}
              >
                {item.book.title}
              </Typography>
              <Divider orientation="vertical" />
              <Typography fontSize=".7rem" color="primary">
                {item.book.author.profile.penName}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography fontSize=" 1.3rem" color="primary" fontWeight="bold">
                ${item.book.price}
              </Typography>
              <Chip label={`x${item.quantity}`} size="small" />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Checkbox />
          <IconButton color="error" onClick={handleDeleteItem}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
