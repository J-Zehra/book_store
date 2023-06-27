import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Pagination, Navigation } from "swiper";
import { Box, Button, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function CustomCarousel() {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      navigation
      slidesPerView={4}
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
      {[...Array(6)].map((_, index) => {
        return (
          <SwiperSlide key={index}>
            <Stack
              width="14rem"
              padding=".8rem"
              bgcolor="background.paper"
              borderRadius=".3rem"
              boxShadow="2px 2px 10px rgba(0,0, 0, .2)"
              spacing={1}
            >
              <Box flex={5}>
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
                  }}
                />
              </Box>
              <Stack
                flex={1}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  fontSize="1.3rem"
                  color="primary.500"
                  fontWeight="bold"
                >
                  $120
                </Typography>
                <Button
                  variant="contained"
                  sx={{ padding: ".8rem" }}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to cart
                </Button>
              </Stack>
            </Stack>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
