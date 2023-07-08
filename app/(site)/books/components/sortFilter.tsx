import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SortFilter() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography sx={{ opacity: ".8" }} fontSize=".9rem">
        Sort by:
      </Typography>
      <Button
        size="large"
        sx={{
          color: "text.primary",
          borderColor: "rgba(0, 0, 100, .1)",
          ":hover": { borderColor: "rgba(0, 0, 100, .4)" },
        }}
        variant="text"
        endIcon={<KeyboardArrowDownIcon />}
      >
        Relevance
      </Button>
    </Stack>
  );
}
