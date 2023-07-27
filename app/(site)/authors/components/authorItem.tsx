import { Author } from "@/types";
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

export default function AuthorItem({ author }: { author: Author }) {
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
        <Avatar sx={{ height: "6rem", width: "6rem", bgcolor: "primary" }}>
          {author?.profile?.penName.at(0)}
        </Avatar>
        <Stack direction="column" justifyContent="space-between">
          <Stack spacing={1}>
            <Typography fontWeight="500" fontSize="1.1rem">
              {author?.profile?.penName}
            </Typography>
            <StyledRating
              name="customized-color"
              defaultValue={0}
              precision={0.5}
              readOnly
              size="small"
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            {author?.books[0]?.genres.map((genre, index) => {
              if (index < 2) {
                return (
                  <Button
                    key={genre}
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
                    {genre}
                  </Button>
                );
              } else {
                return null;
              }
            })}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
