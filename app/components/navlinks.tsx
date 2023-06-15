import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Navlinks({ links }: { links: string[] }) {
  return (
    <Stack direction="row" spacing={2.5}>
      {links.map((link) => {
        return (
          <Link href={link} style={{ textDecoration: "none" }} key={link}>
            <Typography color="text.primary">{link}</Typography>
          </Link>
        );
      })}
    </Stack>
  );
}
