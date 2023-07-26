import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import NoticeModal from "./noticeModal";
import { useRouter } from "next/navigation";

export default function ActionButtons({ id }: { id: string }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useRouter();

  const handleAction = () => {
    navigate.back();
  };

  return (
    <Stack direction="row" spacing={1.5} pt={1} pb={1}>
      <Button
        variant="outlined"
        fullWidth
        size="large"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => setOpenModal(true)}
        sx={{ fontSize: "1rem", padding: "1rem" }}
      >
        Delete
      </Button>
      <Button
        startIcon={<BorderColorIcon />}
        variant="contained"
        fullWidth
        size="large"
        sx={{ fontSize: "1rem", padding: "1rem" }}
        onClick={() => navigate.push(`/myBooks/${id}/update`)}
      >
        Update
      </Button>
      <NoticeModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        action={handleAction}
        bookId={id}
      />
    </Stack>
  );
}
