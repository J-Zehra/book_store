import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LinesEllipsis from "react-lines-ellipsis";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { ChangeEvent } from "react";
import Image from "next/image";
import { CustomRating } from "@/reusables/styleRating";
import { useRouter } from "next/navigation";

export default function Top1Book() {
  const navigate = useRouter();
  const handleVisitClick = () => {
    navigate.push("books/id");
  };

  return (
    <Stack
      bgcolor="background.paper"
      borderRadius=".3rem"
      width="100%"
      height="100%"
      direction="row"
      spacing="1rem"
      padding="1rem"
      boxShadow="2px 4px 8px rgba(0, 0, 10, .2)"
      position="relative"
    >
      <Box
        bgcolor="rgba(0, 0, 0, .2)"
        borderRadius=".3rem"
        width="100%"
        height="100%"
        flex={1}
      >
        <Image
          src="/book-cover.png"
          width={500}
          height={500}
          alt="Book Cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: ".3rem",
          }}
        />
      </Box>
      <Stack width="100%" spacing={1} height="100%" flex={1}>
        <Typography fontWeight="bold" fontSize="1.3rem">
          Harry Potter and the Sorcerer’s Stone
        </Typography>
        <Divider sx={{ marginBlock: ".6rem", opacity: ".5" }} />
        <Stack direction="row" alignItems="center" spacing="1rem">
          <Typography color="primary" fontSize=".8rem">
            JK Rowling
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ height: "1rem", opacity: ".5" }}
          />
          <Typography fontSize=".8rem">January 10, 2022</Typography>
        </Stack>
        <Stack height="100%" spacing={1} width="100%">
          <Box
            flex={1.5}
            paddingTop="1.5rem"
            color="rgba(0, 0, 0, .8)"
            fontSize="1rem"
          >
            <LinesEllipsis
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              maxLine="8"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Box>
          <Stack flex={1} justifyContent="end" spacing={1}>
            <CustomRating size="medium" />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight="bold" color="primary" fontSize="1.6rem">
                $100
              </Typography>
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
            <Stack direction="row" spacing={1.5}>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleVisitClick}
                sx={{ fontSize: ".9rem", padding: ".6rem" }}
              >
                More info
              </Button>
              <Button
                startIcon={<AddShoppingCartIcon />}
                variant="contained"
                fullWidth
                size="medium"
                sx={{ fontSize: ".9rem", padding: ".6rem" }}
              >
                Add to cart
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Box
        position="absolute"
        width=".8rem"
        height=".8rem"
        borderRadius="20rem"
        p=".6rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        top="-.6rem"
        right="-.6rem"
        color="white"
        bgcolor="primary.main"
      >
        1
      </Box>
    </Stack>
  );
}
