import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Description({ description }: { description?: string }) {
  return (
    <Stack spacing={2} pt={1}>
      <Typography fontSize="1.3rem" fontWeight="bold">
        Description
      </Typography>
      <Typography textAlign="justify">{description}</Typography>
    </Stack>
  );
}
