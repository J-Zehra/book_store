import {
  Avatar,
  Paper,
  Stack,
  Typography,
  styled,
  Rating,
  Button,
} from "@mui/material";
import React from "react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#1D5CFF",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function AuthorItem() {
  return (
    <Paper elevation={2}>
      <Stack
        padding=".8rem"
        direction="row"
        spacing={3}
        width="15rem"
        sx={{
          cursor: "pointer",
          ":hover": { bgcolor: "#CBD3D8" },
          transition: "all .3s ease",
        }}
      >
        <Avatar sx={{ height: "6rem", width: "6rem" }} />
        <Stack direction="column" justifyContent="space-between">
          <Stack spacing={1}>
            <Typography fontWeight="500" fontSize="1.1rem">
              Pen name
            </Typography>
            <StyledRating
              name="customized-color"
              defaultValue={2}
              precision={0.5}
              readOnly
              size="small"
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              sx={{
                fontSize: ".5rem",
                borderRadius: "10rem",
                padding: ".1rem .5rem",
                bgcolor: "rgba(0, 0, 100, .05)",
                minWidth: "0",
                width: "fit-content",
              }}
              size="small"
            >
              Action
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontSize: ".5rem",
                borderRadius: "10rem",
                padding: ".1rem .5rem",
                bgcolor: "rgba(0, 0, 100, .05)",
                minWidth: "0",
                width: "fit-content",
              }}
              size="small"
            >
              Comedy
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
