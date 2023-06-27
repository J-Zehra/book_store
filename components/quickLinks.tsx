import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function QuickLinks() {
  const links1 = [
    { title: "Action", link: "" },
    { title: "Comedy", link: "" },
    { title: "Drama", link: "" },
    { title: "Sci-fi", link: "" },
  ];

  const links2 = [
    { title: "Romance", link: "" },
    { title: "Fantasy", link: "" },
    { title: "Mystery", link: "" },
    { title: "Thriller", link: "" },
  ];

  return (
    <>
      <Stack spacing={1}>
        <Typography fontSize="1.3rem" fontWeight="600">
          Quick links
        </Typography>
        <Box
          width="3rem"
          height=".2rem"
          borderRadius=".5rem"
          bgcolor="primary.500"
        />
      </Stack>
      <Box sx={{ opacity: ".8" }}>
        <Typography fontSize=".9rem">
          {`Explore different book categories with the links below.`}
        </Typography>
      </Box>
      <Stack direction="row" spacing={8}>
        <Stack spacing={1}>
          {links1.map((item) => {
            return (
              <Link
                key={item.title}
                fontSize=".9rem"
                sx={{
                  ":hover": { color: "primary.600" },
                  transition: "color .3s ease",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                color="text.primary"
              >
                {item.title}
              </Link>
            );
          })}
        </Stack>
        <Stack spacing={1}>
          {links2.map((item) => {
            return (
              <Link
                key={item.title}
                fontSize=".9rem"
                sx={{
                  ":hover": { color: "primary.600" },
                  transition: "color .3s ease",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                color="text.primary"
              >
                {item.title}
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}
