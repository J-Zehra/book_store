import { Slide, useScrollTrigger } from "@mui/material";
import React from "react";

export default function HideOnScroll({
  children,
}: {
  children: React.ReactElement;
}) {
  const trigger = useScrollTrigger({ threshold: 150 });
  const backdropTrigger = useScrollTrigger({
    threshold: 1,
    disableHysteresis: true,
  });

  return (
    <Slide
      direction="down"
      in={!trigger}
      style={{
        backdropFilter: backdropTrigger ? "blur(25px)" : "none",
      }}
    >
      {children}
    </Slide>
  );
}
