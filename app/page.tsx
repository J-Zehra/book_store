"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { amatic_sc } from "@/utils/font";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

import Watermarks from "@/components/watermarks";
import PopularBooks from "@/components/popularBooks";
import BestSellers from "@/components/bestSellers";
import NewReleases from "@/components/newReleases";
import { useSession } from "next-auth/react";
import CTA from "@/components/CTA";
import useSessionData from "@/hooks/useSessionData";
import AuthorCTA from "@/authorComponents/authorCTA";

export default function Home() {
  const { userData } = useSessionData();

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
              <Typography
                fontSize="3.5rem"
                fontWeight="bold"
                color="text.primary"
              >
                Where Every Page Sparks
              </Typography>
              <Typography
                fontSize="7rem"
                color="primary"
                fontFamily={amatic_sc.style.fontFamily}
                sx={{
                  textShadow: "1px 8px 7px rgba(0, 0, 60, .35)",
                  background: "linear-gradient(to bottom, #3f51b5, #5771FF)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "tranparent",
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
              {userData?.author ? <AuthorCTA /> : <CTA />}
            </Stack>
          </Stack>
        </Container>
      </Box>
      <PopularBooks />
      <NewReleases />
      <BestSellers />
    </ObserverWrapper>
  );
}
