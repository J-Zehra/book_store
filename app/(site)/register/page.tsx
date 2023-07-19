"use client";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
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

export default function Register() {
  const [name, setName] = useState<string>("");
  const [penName, setPenName] = useState<string>("");
  const [asAuthor, setAsAuthor] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("api/register", { email, password, name, penName, asAuthor })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                    checked={asAuthor}
                    onChange={(e) => setAsAuthor(e.target.checked)}
                  />
                }
                sx={{ color: "primary.500" }}
                label="Register as Author"
              />
              <Grid container spacing={2} mt={1}>
                <Grid item xs={12} sm={asAuthor ? 6 : 0}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                {asAuthor ? (
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, p: ".8rem" }}
                size="large"
              >
                Sign Up
              </Button>
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
    </ObserverWrapper>
  );
}
