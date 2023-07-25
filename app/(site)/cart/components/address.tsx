import { Stack, Typography } from "@mui/material";
import React from "react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

export default function Address() {
  return (
    <Stack
      width="100%"
      bgcolor="rgba(0, 0, 0, .1)"
      justifyContent="center"
      alignItems="center"
      borderRadius=".3rem"
      spacing={1}
      sx={{ cursor: "pointer", paddingBlock: "1rem" }}
    >
      <AddLocationAltIcon sx={{ opacity: 0.5 }} />
      <Typography>Add address</Typography>
    </Stack>
  );
}
