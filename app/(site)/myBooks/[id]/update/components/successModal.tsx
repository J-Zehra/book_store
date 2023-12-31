import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import Lottie from "react-lottie-player";
import SuccessAnimation from "../../../../../../public/animations/success.json";

export default function SuccessModal({
  setOpenModal,
  openModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}) {
  const handleClose = () => {
    setOpenModal(false);
  };

  const navigate = useRouter();

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
            animationData={SuccessAnimation}
            play
            style={{ width: 200, height: 200 }}
          />

          <Typography
            sx={{ opacity: ".8" }}
            fontSize="1.2rem"
            fontWeight="medium"
          >
            Your book has been updated!
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={() => setOpenModal(false)}>
              Update again
            </Button>
            <Button variant="contained" onClick={() => navigate.back()}>
              Go to manage
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
