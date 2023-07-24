"use client";

import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Modal,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from "react";
import ObserverWrapper from "@/reusables/observerWrapper";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { Role } from "@/utils/enum";
import { NewUser } from "@/types";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/navigation";

export default function Register() {
  const navigate = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [penName, setPenName] = useState<string>("");
  const [role, setRole] = useState<Role>(Role.READER);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistering, setIsRegsitering] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsRegsitering(true);

    const newUser: NewUser = {
      email,
      password,
      username,
      penName,
      role,
    };

    axios
      .post("api/register", newUser)
      .then((res) => {
        console.log(res);
        setIsRegsitering(false);
        setOpenModal(true);
      })
      .catch((err) => {
        console.log(err);
        setIsRegsitering(false);
        setOpenModal(true);
      });
  };

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <ObserverWrapper name="Register">
      <Box
        bgcolor="background.default"
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
        height="100vh"
        position="relative"
      >
        <Image
          src="/register-bg.svg"
          alt="Textured Background"
          width={1000}
          height={1000}
          style={{
            opacity: ".75",
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Container component="main" maxWidth="lg" sx={{ zIndex: 1 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="27rem"
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" fontWeight="500" variant="h5">
              REGISTER AN ACCOUNT
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 5 }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={role === Role.AUTHOR}
                    onChange={(e) =>
                      setRole(e.target.checked ? Role.AUTHOR : Role.READER)
                    }
                  />
                }
                sx={{ color: "primary.500" }}
                label="Register as Author"
              />
              <Grid container spacing={2} mt={1}>
                <Grid item xs={12} sm={role === Role.AUTHOR ? 6 : 0}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                {role === Role.AUTHOR ? (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    component={motion.div}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                  >
                    <TextField
                      required
                      fullWidth
                      id="penName"
                      label="Pen name"
                      name="penName"
                      autoComplete="pen-name"
                      onChange={(e) => setPenName(e.target.value)}
                    />
                  </Grid>
                ) : null}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive updates via email."
                  />
                </Grid>
              </Grid>
              <LoadingButton
                loading={isRegistering}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, p: ".8rem" }}
                size="large"
              >
                Register
              </LoadingButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
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
          <Stack
            width="100%"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              sx={{ opacity: ".6" }}
              fontSize="1.2rem"
              fontWeight="medium"
            >
              Account succesfully created!
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={() => setOpenModal(false)}>
                Register another account
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate.push("login")}
              >
                Go to login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </ObserverWrapper>
  );
}
