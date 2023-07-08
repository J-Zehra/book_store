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
  Divider,
  ListItemIcon,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import Navlinks from "./navlinks";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import HideOnScroll from "@/reusables/hideOnScroll";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { status, data } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    signOut();
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
              <Link
                href="/"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={500}
                  height={50}
                  style={{ width: "6rem", height: "100%" }}
                />
              </Link>
              <Navlinks links={["Home", "About", "Books", "Authors"]} />
            </Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField
                placeholder="Search Books"
                size="medium"
                variant="outlined"
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
              {status === "authenticated" ? (
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              ) : null}
              {status === "authenticated" ? (
                <IconButton onClick={handleClick}>
                  <Avatar
                    sx={{
                      bgcolor: "primary.300",
                    }}
                  >
                    {data.user?.name?.at(0)}
                  </Avatar>
                </IconButton>
              ) : (
                <Stack direction="row" spacing={1}>
                  <Button variant="outlined">
                    <Link
                      href="/register"
                      style={{ textDecoration: "inherit", color: "inherit" }}
                    >
                      Register
                    </Link>
                  </Button>
                  <Button variant="contained">
                    <Link
                      href="/login"
                      style={{ textDecoration: "inherit", color: "inherit" }}
                    >
                      Login
                    </Link>
                  </Button>
                </Stack>
              )}
              <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 5,
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar />
                    <Typography>Profile</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar />
                    <Typography>My account</Typography>
                  </Stack>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
