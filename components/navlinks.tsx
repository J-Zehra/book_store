import useApp from "@/hooks/useAppContext";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Navlinks({ links }: { links: string[] }) {
  const appContext = useApp();

  console.log(appContext?.activeNav);

  return (
    <Stack direction="row" spacing={4}>
      {links.map((link) => {
        switch (link) {
          case "Home":
            return (
              <Link href="/" style={{ textDecoration: "none" }} key={link}>
                <Typography
                  color={
                    appContext?.activeNav == link
                      ? "primary.500"
                      : "text.primary"
                  }
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
                  color={
                    appContext?.activeNav == link
                      ? "primary.500"
                      : "text.primary"
                  }
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
