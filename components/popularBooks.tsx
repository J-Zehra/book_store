import { Box, IconButton, Container, Stack, Typography } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Top1Book from "./top1Book";
import Image from "next/image";

export default function PopularBooks() {
  return (
    <Box
      sx={{
        zIndex: "2",
        paddingBlock: "5rem",
        background: "linear-gradient(to top, #E9EAEB, #f3f3f3)",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1}>
          <Typography fontSize="1.1rem" fontWeight="bold">
            TOP 7 POPULAR
          </Typography>
          <Typography fontSize="1.1rem" fontWeight="bold" color="primary.500">
            BOOKS
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
                  bgcolor="rgba(0, 0, 0, .1)"
                  borderRadius=".3rem"
                  boxShadow="5px 5px 8px rgba(0, 0, 10, .2)"
                >
                  <Box flex={5} padding=".5rem" paddingBottom="0">
                    <Image
                      src="/book-cover.png"
                      width={500}
                      height={500}
                      alt="Book Cover"
                      style={{
                        width: "100%",
                        height: "12rem",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: ".3rem",
                      }}
                    />
                  </Box>
                  <Stack
                    p=".5rem 1.2rem"
                    flex={1}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      color="primary.500"
                      fontWeight="medium"
                      fontSize="1rem"
                    >
                      $100
                    </Typography>
                    <IconButton size="small" color="primary">
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
