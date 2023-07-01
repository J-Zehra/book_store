import { Button, Stack, FormControlLabel, Switch } from "@mui/material";
import React from "react";
import GenreFilter from "./genreFilter";
import PriceRangeFilter from "./priceRangeFilter";
import PublicationDateFilter from "./publicationDateFilter";
import RatingFilter from "./ratingFilter";
import SortFilter from "./sortFilter";

export default function Filters() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={2}>
        <GenreFilter />
        <PriceRangeFilter />
        <RatingFilter />
        <PublicationDateFilter />
      </Stack>
      <SortFilter />
    </Stack>
  );
}
