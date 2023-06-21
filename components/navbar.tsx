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
  MenuItem,
  Menu,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";
import Navlinks from "./navlinks";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import HideOnScroll from "@/reusables/hideOnScroll";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: "none",
          paddingBlock: ".8rem",
        }}
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
                size="medium"
                sx={{ padding: "0", bgcolor: "rgba(0, 0, 100, .08)" }}
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
              <IconButton onClick={handleClick}>
                <Avatar
                  sx={{
                    bgcolor: "primary.300",
                  }}
                >
                  J
                </Avatar>
              </IconButton>
              <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                onClick={handleClose}
              >
                <MenuItem onClick={handleClose}>Hakdog</MenuItem>
                <MenuItem onClick={handleClose}>Hakdog</MenuItem>
                <MenuItem onClick={handleClose}>Hakdog</MenuItem>
                <MenuItem onClick={handleClose}>Hakdog</MenuItem>
                <MenuItem onClick={handleClose}>Hakdog</MenuItem>
              </Menu>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
