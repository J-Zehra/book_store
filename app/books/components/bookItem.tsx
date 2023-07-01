import {
  Stack,
  Box,
  Typography,
  Divider,
  Button,
  Paper,
  IconButton,
  Rating,
  styled,
} from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Image from "next/image";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#1D5CFF",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function BookItem() {
  return (
    <Paper elevation={2}>
      <Stack
        bgcolor="background.paper"
        borderRadius=".3rem"
        width="21rem"
        height="12rem"
        direction="row"
        spacing="1rem"
        padding=".8rem"
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
          <Typography fontWeight="bold" fontSize="1rem">
            Harry Potter and the Sorcerer’s Stone
          </Typography>
          <Divider sx={{ marginBlock: ".6rem", opacity: ".5" }} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing="1rem"
          >
            <Typography color="primary.500" fontSize=".7rem">
              JK Rowling
            </Typography>
            <Typography fontSize=".7rem">January 10, 2022</Typography>
          </Stack>
          <Stack height="100%" spacing={1} width="100%">
            <Stack flex={1} justifyContent="end" spacing={1}>
              <StyledRating
                name="customized-color"
                defaultValue={2}
                precision={0.5}
                readOnly
                size="small"
              />
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={1.5}
                alignItems="center"
              >
                <Typography
                  fontWeight="bold"
                  color="primary.500"
                  fontSize="1.3rem"
                >
                  $100
                </Typography>
                <IconButton
                  sx={{
                    bgcolor: "rgba(0, 0, 100, .1)",
                    ":hover": { bgcolor: "rgba(0, 0, 100, .2)" },
                  }}
                  size="large"
                  color="primary"
                >
                  <AddShoppingCartIcon style={{ fontSize: "1.5rem" }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
