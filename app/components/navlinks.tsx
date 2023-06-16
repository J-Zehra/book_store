import { Button, Icon, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navlinks({ links }: { links: string[] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={3}>
      {links.map((link) => {
        switch (link) {
          case "Home":
            return (
              <Link href="/" style={{ textDecoration: "none" }} key={link}>
                <Typography
                  color="text.primary"
                  sx={{
                    ":hover": { color: "primary.500" },
                    transition: "color .3s ease",
                  }}
                >
                  {link}
                </Typography>
              </Link>
            );
          default:
            return (
              <Link
                href={link.toLowerCase()}
                style={{ textDecoration: "none" }}
                key={link}
              >
                <Typography
                  color="text.primary"
                  sx={{
                    ":hover": { color: "primary.500" },
                    transition: "color .3s ease",
                  }}
                >
                  {link}
                </Typography>
              </Link>
            );
        }
      })}
    </Stack>
  );
}
