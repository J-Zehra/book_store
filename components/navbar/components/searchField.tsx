import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchField() {
  return (
    <TextField
      placeholder="Search Books"
      hiddenLabel
      size="small"
      variant="outlined"
      sx={{
        padding: "0",
        bgcolor: "rgba(0, 0, 100, .02)",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
