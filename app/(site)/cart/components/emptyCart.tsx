import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Lottie from "react-lottie-player";
import EmptyCartAnimation from "../../../../public/animations/emptyCart.json";

export default function EmptyCart() {
  return (
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
  );
}
