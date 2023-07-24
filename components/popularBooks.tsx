import { Box, IconButton, Container, Stack, Typography } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Top1Book from "./top1Book";
import Image from "next/image";
import CallMissedOutgoingRoundedIcon from "@mui/icons-material/CallMissedOutgoingRounded";
import { useRouter } from "next/navigation";

export default function PopularBooks() {
  const navigate = useRouter();
  const handleVisitClick = () => {
    navigate.push("books/id");
  };

  return (
    <Box
      sx={{
        paddingBlock: "5rem",
      }}
      bgcolor="background.default"
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1}>
          <Typography fontSize="1.2rem" fontWeight="bold">
            Top 7 Popular
          </Typography>
          <Typography fontSize="1.2rem" fontWeight="bold" color="primary.500">
            Books
          </Typography>
        </Stack>
        <Stack
          justifyContent="space-between"
          spacing={2}
          direction="row"
          marginTop="2rem"
          height="30rem"
        >
          <Top1Book />
          <Stack
            borderRadius=".3rem"
            width="100%"
            height="100%"
            direction="row"
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            alignItems="end"
            justifyContent="end"
          >
            {[...Array(6)].map((_, index) => {
              return (
                <Stack
                  key={index}
                  width="10rem"
                  height="52%"
                  bgcolor="background.paper"
                  borderRadius=".3rem"
                  boxShadow="5px 5px 8px rgba(0, 0, 10, .2)"
                  position="relative"
                  justifyContent="end"
                >
                  <Image
                    src="/book-cover.png"
                    width={500}
                    height={500}
                    alt="Book Cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: ".3rem",
                      position: "absolute",
                    }}
                  />

                  <Box
                    width="100%"
                    height="100%"
                    position="absolute"
                    top={0}
                    right={0}
                    borderRadius=".3rem"
                    sx={{
                      background:
                        "linear-gradient(to top, black, rgba(0, 0, 0, 0))",
                    }}
                  />

                  <Stack
                    p="1rem 1.2rem"
                    zIndex={2}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="end"
                    borderRadius=".3rem"
                  >
                    <Typography
                      color="primary"
                      fontWeight="bold"
                      fontSize="1.3rem"
                      sx={{ color: "#778DFF" }}
                    >
                      $100
                    </Typography>
                    <Stack direction="column" spacing={1}>
                      <IconButton
                        size="medium"
                        onClick={handleVisitClick}
                        sx={{
                          border: "1px dashed #778DFF",
                          color: "#778DFF",
                          bgcolor: "rgba(60, 60, 160, .3)",
                          ":hover": { bgcolor: "rgba(60, 60, 160, .5)" },
                        }}
                      >
                        <CallMissedOutgoingRoundedIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{
                          border: "1px solid #778DFF",
                          padding: ".5rem",
                          color: "#778DFF",
                        }}
                        color="primary"
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    </Stack>
                  </Stack>
                  <Box
                    position="absolute"
                    width=".6rem"
                    height=".6rem"
                    borderRadius="20rem"
                    p=".4rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    top="-.4rem"
                    right="-.4rem"
                    fontSize=".8rem"
                    color="white"
                    bgcolor="primary.main"
                  >
                    {index + 2}
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
