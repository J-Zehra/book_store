import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";


export default function SearchFilter() {
  return (
    <Box>
      <TextField
        placeholder="Search Author"
        size="small"
        variant="outlined"
        sx={{
          padding: "0",
          fontSize: ".8rem",
          bgcolor: "rgba(0, 0, 100, .03)",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
