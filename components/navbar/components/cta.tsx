import { Button, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function CtaButton() {
  return (
    <Stack  direction="row" spacing={1}>
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
  );
}
