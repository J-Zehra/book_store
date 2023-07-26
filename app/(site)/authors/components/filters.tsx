import { Stack } from "@mui/material";
import React from "react";
import SearchFilter from "./searchFilter";
import RatingFilter from "./ratingFilter";
import SeniorityFilter from "./seniorityFilter";

export default function Filters() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={2}>
        <RatingFilter />
        <SeniorityFilter />
      </Stack>
      {/* <SearchFilter /> */}
    </Stack>
  );
}
