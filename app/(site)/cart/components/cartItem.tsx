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
import { selectedCartItems } from "@/state/atom/order";
import Quantity from "./quantity";

export default function CartItem({ item }: { item: FetchedCart }) {
  const [cartItemLocalState, setCartItemLocalState] =
    useRecoilState(cartItemState);
  const [selectedCartItem, setSelectedCartItem] =
    useRecoilState(selectedCartItems);

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedCartItem((prev) => [...prev, item]);
    } else {
      const newValue = selectedCartItem.filter((cartItem) => {
        return cartItem.id !== item.id;
      });

      setSelectedCartItem(newValue);
    }
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
              <Typography
                fontSize=" 1.2rem"
                color="primary"
                fontWeight="medium"
              >
                ${item.book.price}
              </Typography>
              <Chip label={`x${item.quantity}`} size="small" />
              <Quantity item={item} />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Checkbox
            sx={{
              transition: "all .3s ease",
              bgcolor: "rgba(0, 0, 100, .1)",
              p: "1rem",
              ":hover": {
                bgcolor: "rgba(0, 0, 100, .2)",
              },
            }}
            onChange={handleChange}
          />
          <IconButton
            color="error"
            sx={{
              transition: "all .3s ease",
              bgcolor: "rgba(100, 0, 0, .1)",
              p: "1rem",
              ":hover": {
                bgcolor: "rgba(100, 0, 0, .2)",
              },
            }}
            onClick={handleDeleteItem}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
