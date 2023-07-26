import { FetchedBookData } from "@/types";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import NoticeModal from "./noticeModal";
import { useRouter } from "next/navigation";

export default function BookItem({ book }: { book: FetchedBookData }) {
  const navigate = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [bookIdToDelete, setBookIdToDelete] = useState<string>("");

  return (
    <Paper>
      <Stack
        height="5rem"
        padding="1rem"
        justifyContent="space-between"
        direction="row"
        alignItems="center"
      >
        <Stack direction="row" alignItems="center" height="100%" spacing={2}>
          <Box width="4rem" height="100%">
            <Image
              src={book.cover || "/book-cover.png"}
              alt="Cover"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack spacing={2}>
            <Typography fontWeight="medium" color="primary.dark">
              {book.title}
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <InventoryIcon color="primary" sx={{ fontSize: ".8rem" }} />
                <Typography fontSize=".8rem">Stocks: </Typography>
                <Typography fontSize=".8rem">{book.stocks}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <LoyaltyIcon color="primary" sx={{ fontSize: ".8rem" }} />
                <Typography fontSize=".8rem">Total Unit Sold: </Typography>
                <Typography fontSize=".8rem">{book.bookSale.length}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              setBookIdToDelete(book.id);
              setOpenModal(true);
            }}
          >
            Delete
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate.push(`/myBooks/${book.id}`)}
          >
            Manage Book
          </Button>
        </Stack>
      </Stack>
      {openModal ? (
        <NoticeModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          bookId={bookIdToDelete}
        />
      ) : null}
    </Paper>
  );
}
