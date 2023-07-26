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
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { cartItemState } from "@/state/atom/cart";
import { selectedCartItems } from "@/state/atom/order";
import Quantity from "./quantity";
import Image from "next/image";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import { LoadingButton } from "@mui/lab";

export default function CartItem({
  item,
  refetch,
}: {
  item: FetchedCart;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<FetchedCart[], unknown>>;
}) {
  console.log(item);
  const [selectedCartItem, setSelectedCartItem] =
    useRecoilState(selectedCartItems);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteItem = async () => {
    setLoading(true);
    await axios
      .delete("/api/cart/delete", { params: { id: item.id } })
      .then((res) => {
        console.log(res);
        setLoading(false);
        refetch();
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
          >
            <Image
              src={item.book.cover || "/book-cover.png"}
              alt="Cover"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
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
              <Chip label={`x${item?.quantity}`} size="small" />
              {/* <Quantity item={item} /> */}
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
          <LoadingButton
            loading={loading}
            sx={{
              minWidth: "0",
              padding: ".8rem",
              borderRadius: "5rem",
              transition: "all .3s ease",
              bgcolor: "rgba(100, 0, 0, .1)",
              p: "1rem",
              ":hover": {
                bgcolor: "rgba(100, 0, 0, .2)",
              },
            }}
            size="small"
            color="error"
            onClick={handleDeleteItem}
          >
            <DeleteIcon />
          </LoadingButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
