import { Button, Divider, Link, Stack, TextField } from "@mui/material";
import React from "react";

export default function Newsletter() {
  return (
    <>
      <Stack spacing={1}>
        <TextField placeholder="Email Address" />
        <Button sx={{ padding: "1rem" }} variant="contained" size="large">
          Subscribe
        </Button>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="end" spacing={2}>
        <Link
          fontSize=".9rem"
          sx={{
            ":hover": { color: "primary.600" },
            transition: "color .3s ease",
            textDecoration: "none",
            cursor: "pointer",
          }}
          color="text.primary"
        >
          Terms of use
        </Link>
        <Link
          fontSize=".9rem"
          sx={{
            ":hover": { color: "primary.600" },
            transition: "color .3s ease",
            textDecoration: "none",
            cursor: "pointer",
          }}
          color="text.primary"
        >
          Privacy policy
        </Link>
      </Stack>
    </>
  );
}
