import { Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

export default function MoreDetails({
  publisher,
  publishDate,
  totalPage,
  language,
}: {
  publisher?: string;
  publishDate?: string;
  totalPage?: number;
  language?: string;
}) {
  return (
    <Stack spacing={2} pt={1}>
      <Typography fontSize="1.3rem" fontWeight="bold">
        More Details
      </Typography>
      <Stack>
        <Stack direction="row" spacing={1}>
          <Typography>Publisher:</Typography>
          <Typography color="primary">{publisher}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography>Publish Date: </Typography>
          <Typography color="primary">
            {moment(publishDate).format("LL")}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography>Total Page: </Typography>
          <Typography color="primary">{totalPage}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography>Language: </Typography>
          <Typography color="primary">{language}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
