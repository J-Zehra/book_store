import { dancing_script } from "@/utils/font";
import { Typography } from "@mui/material";
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
      fontFamily={dancing_script.style.fontFamily}
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
        opacity: ".25",
        transform: `rotate(${tilt})`,
        textShadow: "5px 5px 1px rgba(0, 0, 50, .15)",
      }}
    >
      {quote}
    </Typography>
  );
}
