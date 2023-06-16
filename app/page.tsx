"use client";

import { Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box height="100vh">
      <Image
        src="/bg-texture.png"
        alt="Textured Background"
        width={1000}
        height={1000}
        style={{
          opacity: ".75",
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {/* <Typography color="primary">Home</Typography> */}
    </Box>
  );
}
