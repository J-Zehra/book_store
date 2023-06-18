import { dancing_script } from "@/utils/font";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function TextWatermark({
  top,
  bottom,
  right,
  left,
  tilt,
  quote,
}: {
  tilt: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  quote: string;
}) {
  return (
    <Typography
      className={dancing_script.className}
      sx={{
        maxWidth: "25rem",
        textAlign: "center",
        position: "absolute",
        width: "fit-content",
        height: "fit-content",
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        opacity: ".35",
        transform: `rotate(${tilt})`,
        textShadow: "5px 5px 1px rgba(0, 0, 50, .15)",
      }}
    >
      {quote}
    </Typography>
  );
}