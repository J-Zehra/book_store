"use client";

import { Box, Container, Icon, Link, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";

export default function Footer() {
  const contactInfo = [
    {
      key: "1",
      icon: <LocationOnIcon />,
      info: "123 Mema Street, Hakdog, Footlong",
    },
    {
      key: "2",
      icon: <LocalPhoneIcon />,
      info: "+00-012-264412 ,+00-012-546543",
    },
    {
      key: "3",
      icon: <LanguageIcon />,
      info: "www.hakdog.com",
    },
  ];

  return (
    <Box paddingY="2rem" bgcolor="background.paper">
      <Container maxWidth="lg">
        <Stack direction="row" spacing={5}>
          <Stack flex={1} spacing={2.5}>
            <Stack spacing={1}>
              <Typography fontSize="1.3rem" fontWeight="600">
                Get in touch with us
              </Typography>
              <Box
                width="3rem"
                height=".2rem"
                borderRadius=".5rem"
                bgcolor="primary.500"
              />
            </Stack>
            <Box sx={{ opacity: ".8" }}>
              <Typography fontSize=".9rem">
                {` Have a question or suggestion? We're here to help! Contact us
                below and we'll be happy to assist you.`}
              </Typography>
            </Box>
            <Stack spacing={1}>
              {contactInfo.map((item) => {
                return (
                  <Stack
                    key={item.key}
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ opacity: ".8" }}
                  >
                    <Icon sx={{ opacity: ".8" }}>{item.icon}</Icon>
                    <Typography fontSize=".9rem">{item.info}</Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          <Stack flex={1} spacing={2.5}>
            <Stack spacing={1}>
              <Typography fontSize="1.3rem" fontWeight="600">
                Quick links
              </Typography>
              <Box
                width="3rem"
                height=".2rem"
                borderRadius=".5rem"
                bgcolor="primary.500"
              />
            </Stack>
            <Box sx={{ opacity: ".8" }}>
              <Typography fontSize=".9rem">
                {`Explore different book categories with the links below.`}
              </Typography>
            </Box>
            <Stack direction="row">
              <Stack>
                <Typography>
                  <Link></Link>
                </Typography>
              </Stack>
              <Stack></Stack>
            </Stack>
          </Stack>
          <Stack flex={1}></Stack>
        </Stack>
        <Stack></Stack>
      </Container>
    </Box>
  );
}
