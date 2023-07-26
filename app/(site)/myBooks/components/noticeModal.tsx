import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Lottie from "react-lottie-player";
import NoticeAnimation from "../../../../public/animations/notice.json";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { useRecoilState } from "recoil";
import { authorBookLocal } from "@/state/atom/authorBooksLocal";

export default function NoticeModal({
  setOpenModal,
  openModal,
  bookId,
  action,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  bookId: string;
  action?: () => void;
}) {
  const handleClose = () => {
    setOpenModal(false);
  };
  const [deleting, setDeleting] = useState<boolean>(false);
  const [localBookState, setLocalBookState] = useRecoilState(authorBookLocal);

  const updateLocalBookState = () => {
    const newBooks = localBookState.filter((book) => {
      return book.id !== bookId;
    });

    setLocalBookState(newBooks);
  };

  const handleDelete = () => {
    setDeleting(true);
    axios
      .delete(`/api/books/delete`, { params: { bookId } })
      .then((res) => {
        console.log(res);
        updateLocalBookState();
        setDeleting(false);
        setOpenModal(false);
        if (action) {
          action();
        }
      })
      .catch((err) => console.log(err));
  };

  console.log(bookId);

  return (
    <Modal open={openModal} disableAutoFocus onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "none",
          borderRadius: ".5rem",
          boxShadow: 30,
          p: 4,
        }}
      >
        <Stack
          width="100%"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Lottie
            loop
            animationData={NoticeAnimation}
            play
            style={{ width: 200, height: 200 }}
          />

          <Typography
            sx={{ opacity: ".8" }}
            fontSize="1.1rem"
            fontWeight="medium"
          >
            Are you sure you want to delete this book?
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
            <LoadingButton
              loading={deleting}
              variant="contained"
              color="error"
              onClick={handleDelete}
            >
              Delete
            </LoadingButton>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
