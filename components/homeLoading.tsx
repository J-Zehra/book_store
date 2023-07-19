import React from "react";
import Lottie from "react-lottie-player";
import BookLoadingAnimation from "../public/animations/book_loading_animation.json";
import { Box } from "@mui/material";

export default function HomeLoading() {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Lottie
        loop
        animationData={BookLoadingAnimation}
        play
        style={{ width: 200, height: 200 }}
      />
    </Box>
  );
}
