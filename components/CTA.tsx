import { Button } from "@mui/material";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Link from "next/link";

export default function CTA() {
  return (
    <>
      <Button
        startIcon={<MenuBookIcon />}
        size="large"
        variant="contained"
        sx={{ padding: "1rem 1.5rem" }}
      >
        <Link
          href="/books"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          Browse Books
        </Link>
      </Button>
      <Button
        startIcon={<DriveFileRenameOutlineIcon />}
        size="large"
        variant="outlined"
      >
        <Link
          href="/authors"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          Discover Authors
        </Link>
      </Button>
    </>
  );
}
