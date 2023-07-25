import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export default function DropDownMenu({
  setAnchorEl,
  anchorEl,
}: {
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  anchorEl: HTMLElement | null;
}) {
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    signOut();
    setAnchorEl(null);
  };

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      onClick={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      PaperProps={{
        elevation: 5,
      }}
    >
      <MenuItem onClick={handleClose}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar />
          <Typography color="text.primary">
            <Link
              href="/profile"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Profile
            </Link>
          </Typography>
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
  );
}
