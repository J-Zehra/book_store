import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Pagination, Navigation } from "swiper";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function CustomCarousel() {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      navigation
      slidesPerView={6}
      loop
      centerInsufficientSlides
      modules={[Pagination, Navigation]}
      style={{
        width: "100%",
        height: "100%",
        padding: "1rem",
        paddingTop: "0",
        paddingBottom: "2.5rem",
      }}
    >
      {[...Array(10)].map((_, index) => {
        return (
          <SwiperSlide key={index}>
            <Stack
              key={index}
              width="10rem"
              height="52%"
              bgcolor="background.paper"
              borderRadius=".3rem"
              boxShadow="5px 5px 8px rgba(0, 0, 10, .2)"
              position="relative"
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
                  fontWeight="500"
                  fontSize="1.1rem"
                >
                  $100
                </Typography>
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: "rgba(0, 0, 100, .1)",
                    padding: ".6rem",
                    ":hover": { bgcolor: "rgba(0, 0, 100, .15)" },
                    transition: "all .3s ease",
                  }}
                  color="primary"
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Stack>
            </Stack>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
