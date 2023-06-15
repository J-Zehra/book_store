"use client";

import {
  Box,
  Container,
  Stack,
  AppBar,
  Avatar,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";
import Navlinks from "./navlinks";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{ boxShadow: "none", paddingBlock: ".8rem" }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between">
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            gap="5rem"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={500}
              height={50}
              style={{ width: "6rem", height: "100%" }}
            />
            <Navlinks links={["Home", "About", "Books", "Authors"]} />
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              placeholder="Search Books"
              sx={{ padding: "0" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: "primary.300" }}>J</Avatar>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
}
