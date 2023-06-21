"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { amatic_sc } from "@/utils/font";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Watermarks from "@/components/watermarks";
import PopularBooks from "@/components/popularBooks";

export default function Home() {
  return (
    <ObserverWrapper name="Home">
      <Box height="100vh" position="relative">
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
        <Watermarks />
        <Container maxWidth="lg">
          <Stack
            direction="column"
            height="100vh"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Stack spacing={-3} alignItems="center">
              <Typography fontSize="3.3rem" fontWeight="bold">
                Where Every Page Sparks
              </Typography>
              <Typography
                fontSize="7rem"
                color="primary.500"
                fontFamily={amatic_sc.style.fontFamily}
                sx={{
                  textShadow: "1px 8px 7px rgba(0, 0, 60, .35)",
                  background: "linear-gradient(to bottom, #3f51b5, #5771FF)",
                  backgroundClip: "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                Adventure
              </Typography>
            </Stack>
            <Container maxWidth="sm">
              <Typography textAlign="center">
                Immerse yourself in a world of literary adventure. Discover
                captivating stories that transport you to extraordinary realms.
              </Typography>
            </Container>
            <Stack direction="row" marginTop="2rem" spacing={2}>
              <Button
                startIcon={<MenuBookIcon />}
                size="large"
                variant="contained"
                sx={{ padding: "1rem 1.5rem" }}
              >
                Browse Books
              </Button>
              <Button
                startIcon={<DriveFileRenameOutlineIcon />}
                size="large"
                variant="outlined"
              >
                Discover Authors
              </Button>
            </Stack>
          </Stack>
        </Container>
        <PopularBooks />
      </Box>
    </ObserverWrapper>
  );
}
