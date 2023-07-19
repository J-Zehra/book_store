"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import GetInTouch from "./getInTouch";
import QuickLinks from "./quickLinks";
import Newsletter from "./newsletter";
import Image from "next/image";
import Socials from "./socials";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentPath = usePathname();

  if (currentPath === "/login" || currentPath === "/register"){
    return
  }

  return (
    <>
      <Box paddingY="2rem" bgcolor="background.paper">
        <Container maxWidth="lg">
          <Stack direction="row" spacing={5}>
            <Stack flex={1} spacing={2.5}>
              <GetInTouch />
            </Stack>
            <Stack flex={1} spacing={2.5}>
              <QuickLinks />
            </Stack>
            <Stack flex={1} justifyContent="space-between">
              <Newsletter />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bgcolor="text.primary">
        <Container maxWidth="lg">
          <Stack
            paddingY="1rem"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flex={1}>
              <Image
                src="/logo2.svg"
                alt="Logo"
                width={500}
                height={50}
                style={{ width: "6rem", height: "100%" }}
              />
            </Box>
            <Box flex={1}>
              <Typography color="whitesmoke" fontSize=".9rem">
                Copyright © 2023 MemaTeam All Right Reserved.
              </Typography>
            </Box>
            <Socials />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
