import { IconButton, Stack } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Socials() {
  const socials = [
    { title: "Facebook", icon: <FacebookIcon />, link: "" },
    { title: "Twitter", icon: <TwitterIcon />, link: "" },
    { title: "Instagram", icon: <InstagramIcon />, link: "" },
    { title: "Github", icon: <GitHubIcon />, link: "" },
  ];

  return (
    <Stack direction="row" flex={1} justifyContent="end">
      {socials.map((item) => {
        return (
          <IconButton
            sx={{
              color: "white",
              ":hover": { color: "primary.300" },
              transition: "all .3s ease",
            }}
            key={item.title}
          >
            {item.icon}
          </IconButton>
        );
      })}
    </Stack>
  );
}
