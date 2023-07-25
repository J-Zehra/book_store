import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import Lottie from "react-lottie-player";
import SigninFirstAnimation from "../public/animations/pen.json";
import CloseIcon from "@mui/icons-material/Close";

export default function LoginNoticeModal({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => {
    setOpenModal(false);
  };

  const navigate = useRouter();

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
        <IconButton
          sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          onClick={() => setOpenModal(false)}
        >
          <CloseIcon />
        </IconButton>
        <Stack
          width="100%"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Lottie
            loop
            animationData={SigninFirstAnimation}
            play
            style={{ width: 200, height: 200 }}
          />
          <Typography
            fontSize="1rem"
            fontWeight="medium"
            color="primary.dark"
          >
            Please login first or register first.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{ p: ".5rem" }}
              onClick={() => navigate.push("register")}
            >
              Register another account
            </Button>
            <Button
              variant="contained"
              sx={{ p: ".5rem" }}
              onClick={() => navigate.push("login")}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
