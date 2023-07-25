import { activeNavState } from "@/state/atom/navState";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

export default function AuthorLinks() {
  const [activeNav] = useRecoilState(activeNavState);

  return (
    <Stack direction="row" spacing={4} mr={2}>
      <Link href="/analytics" style={{ textDecoration: "none" }}>
        <Typography
          color={activeNav == "analytics" ? "primary" : "text.primary"}
          sx={{
            ":hover": { color: "primary.500" },
            transition: "color .3s ease",
          }}
        >
          Analytics
        </Typography>
      </Link>
      <Link href="/my-books" style={{ textDecoration: "none" }}>
        <Typography
          color={activeNav == "my-books" ? "primary" : "text.primary"}
          sx={{
            ":hover": { color: "primary.500" },
            transition: "color .3s ease",
          }}
        >
          My Books
        </Typography>
      </Link>
    </Stack>
  );
}
