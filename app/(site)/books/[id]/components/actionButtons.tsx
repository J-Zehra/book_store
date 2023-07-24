import { Button, Stack } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function ActionButtons() {
  return (
    <Stack direction="row" spacing={1.5} pt={1} pb={1}>
      <Button
        variant="outlined"
        fullWidth
        size="large"
        startIcon={<AddShoppingCartIcon />}
        sx={{ fontSize: "1rem", padding: "1rem" }}
      >
        Add to cart
      </Button>
      <Button
        startIcon={<AttachMoneyIcon />}
        variant="contained"
        fullWidth
        size="large"
        sx={{ fontSize: "1rem", padding: "1rem" }}
      >
        Buy now
      </Button>
    </Stack>
  );
}
