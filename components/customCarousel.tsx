import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
            <Box
              width="16rem"
              height="22rem"
              bgcolor="background.paper"
              borderRadius=".3rem"
              boxShadow="2px 2px 10px rgba(0,0, 0, .2)"
            ></Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
