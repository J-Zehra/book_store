import { Box, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

export default function PublicationDateFilter() {
  return (
    <Box>
      <Button
        size="large"
        sx={{
          color: "text.primary",
          borderColor: "rgba(0, 0, 100, .1)",
          ":hover": { borderColor: "rgba(0, 0, 100, .4)" },
        }}
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
      >
        Publication date
      </Button>
    </Box>
  );
}
