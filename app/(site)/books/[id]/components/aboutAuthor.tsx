import { Stack, Typography } from "@mui/material";
import React from "react";

export default function AboutAuthor({ bio }: { bio?: string }) {
  return (
    <Stack spacing={2} pt={1}>
      <Typography fontSize="1.3rem" fontWeight="bold">
        About the Author
      </Typography>
      {bio ? (
        <Typography textAlign="justify">{bio}</Typography>
      ) : (
        <Typography
          textAlign="justify"
          fontSize="1.2rem"
          fontWeight="bold"
          sx={{ opacity: ".2" }}
        >{`The author hasn't set their bio yet.`}</Typography>
      )}
    </Stack>
  );
}
