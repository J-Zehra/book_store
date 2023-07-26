"use client";

import { activeNavState } from "@/state/atom/navState";
import { Stack, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

export default function Navlinks({ links }: { links: string[] }) {
  const [activeNav] = useRecoilState(activeNavState);

  return (
    <Stack direction="row" spacing={4}>
      {links.map((link) => {
        switch (link) {
          case "Home":
            return (
              <Link href="/" style={{ textDecoration: "none" }} key={link}>
                <Typography
                  color={activeNav == link ? "primary" : "text.primary"}
                  sx={{
                    ":hover": { color: "primary" },
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
                  color={activeNav == link ? "primary" : "text.primary"}
                  sx={{
                    ":hover": { color: "primary" },
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
