import { Button } from "@mui/material";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Link from "next/link";

export default function AuthorCTA() {
  return (
    <>
      <Button
        startIcon={<MenuBookIcon />}
        size="large"
        variant="contained"
        sx={{ padding: "1rem 1.5rem" }}
      >
        <Link
          href="/books/publish"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          Sell New Book
        </Link>
      </Button>
      <Button
        startIcon={<DriveFileRenameOutlineIcon />}
        size="large"
        variant="outlined"
      >
        <Link
          href="/myBooks"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          My Books
        </Link>
      </Button>
    </>
  );
}
