import { Stack, Typography } from "@mui/material";
import React from "react";

export default function MoreDetails() {
  return (
    <Stack spacing={2} pt={1}>
      <Typography fontSize="1.3rem" fontWeight="bold">
        More Details
      </Typography>
      <Stack>
        <Stack>
          <Typography>Publisher: </Typography>
          <Typography> </Typography>
        </Stack>
        <Stack>
          <Typography>Publish Date: </Typography>
          <Typography> </Typography>
        </Stack>
        <Stack>
          <Typography>Total Page: </Typography>
          <Typography> </Typography>
        </Stack>
        <Stack>
          <Typography>Dimensions: </Typography>
          <Typography> </Typography>
        </Stack>
        <Stack>
          <Typography>Weight: </Typography>
          <Typography> </Typography>
        </Stack>
        <Stack>
          <Typography>Language: </Typography>
          <Typography> </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
