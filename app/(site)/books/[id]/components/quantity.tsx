"use client";

import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Quantity() {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography pr={2}>Quantity: </Typography>
      <IconButton
        disabled={quantity <= 1}
        onClick={() => setQuantity((prev) => prev - 1)}
        color="primary"
        sx={{
          bgcolor: "rgba(0, 0, 100, .1)",
          ":hover": {
            bgcolor: "rgba(0, 0, 100, .2)",
          },
        }}
      >
        <RemoveIcon />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton
        color="primary"
        onClick={() => setQuantity((prev) => prev + 1)}
        sx={{
          bgcolor: "rgba(0, 0, 100, .1)",
          ":hover": {
            bgcolor: "rgba(0, 0, 100, .2)",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
}
