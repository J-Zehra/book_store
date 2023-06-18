"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { amatic_sc } from "@/utils/font";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import TextWatermark from "@/reusables/textWatermark";

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
        <TextWatermark
          quote="There is no friend as loyal as a book. - Ernest Hemingway"
          tilt="10deg"
          top="7rem"
          left="3rem"
        />
        <TextWatermark
          quote="A reader lives a thousand lives before he dies. The man who never reads lives only one. - George R.R. Martin"
          tilt="-10deg"
          top="7rem"
          right="5rem"
        />
        <TextWatermark
          quote="Reading is dreaming with open eyes- Anissa Trisdianty"
          tilt="5deg"
          top="22rem"
          left="10rem"
        />
        <TextWatermark
          quote="Books are a uniquely portable magic. - Stephen King"
          tilt="-10deg"
          bottom="10rem"
          left="8rem"
        />
        <TextWatermark
          quote="The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss"
          tilt="10deg"
          bottom="13rem"
          right="5rem"
        />
        <TextWatermark
          quote="So many books, so little time. - Frank Zappa"
          tilt="0deg"
          bottom="7rem"
          right="40rem"
        />
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
                className={amatic_sc.className}
                sx={{ textShadow: "1px 8px 7px rgba(0, 0, 60, .35)" }}
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
                sx={{ textTransform: "none", padding: "1rem 1.5rem" }}
              >
                Browse Books
              </Button>
              <Button
                startIcon={<DriveFileRenameOutlineIcon />}
                size="large"
                variant="outlined"
                sx={{ textTransform: "none", padding: "1rem 1.5rem" }}
              >
                Discover Authors
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ObserverWrapper>
  );
}
