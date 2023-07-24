"use client";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React from "react";
import { CustomRating } from "@/reusables/styleRating";
import Quantity from "./components/quantity";
import ActionButtons from "./components/actionButtons";
import Description from "./components/description";
import AboutAuthor from "./components/aboutAuthor";
import MoreFromAuthor from "./components/moreFromAuthor";
import MoreDetails from "./components/moreDetails";

export default function BookInfo() {
  const { id } = useParams();

  return (
    <Box paddingY="8rem" bgcolor="background.default">
      <Container maxWidth="lg">
        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <Stack flex={1} justifyContent="start" alignItems="center">
            <Image
              src="/book-cover.png"
              width={500}
              height={500}
              alt="Book Cover"
              style={{
                width: "60%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: ".3rem",
              }}
            />
          </Stack>
          <Stack flex={1} spacing={2}>
            <Typography fontWeight="bold" fontSize="2rem">
              Harry Potter and the Sorcerer’s Stone
            </Typography>
            <Stack direction="row" alignItems="center" spacing="1rem">
              <Typography color="primary" fontSize=".8rem">
                JK Rowling
              </Typography>
              <Divider
                orientation="vertical"
                sx={{ height: "1rem", opacity: ".5" }}
              />
              <Typography fontSize=".8rem">January 10, 2022</Typography>
              <Divider
                orientation="vertical"
                sx={{ height: "1rem", opacity: ".5" }}
              />
              <Stack spacing={2.5} direction="row">
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  direction="row"
                  spacing={1}
                >
                  <LoyaltyIcon sx={{ color: "primary.main" }} />
                  <Typography fontSize=".8rem" color="primary">
                    100
                  </Typography>
                </Stack>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  direction="row"
                  color="primary"
                  spacing={0.8}
                >
                  <RemoveRedEyeIcon sx={{ color: "primary.main" }} />
                  <Typography fontSize=".8rem" color="primary">
                    100
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <CustomRating size="medium" />
            <Divider sx={{ marginBlock: ".6rem", opacity: ".5" }} />
            <Typography fontWeight="bold" color="primary" fontSize="2.8rem">
              $100
            </Typography>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Quantity />
              <Chip
                label="20 Stocks available"
                color="primary"
                variant="outlined"
              />
            </Stack>
            <ActionButtons />
            <Divider sx={{ marginBlock: ".6rem", opacity: ".5" }} />
            <Description />
            <MoreDetails />
            <AboutAuthor />
          </Stack>
        </Stack>
        <MoreFromAuthor />
      </Container>
    </Box>
  );
}
