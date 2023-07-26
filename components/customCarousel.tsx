import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FetchedBookData } from "@/types";
import CustomCarouselItem from "./customCarouselItem";

export default function CustomCarousel({
  books,
}: {
  books?: FetchedBookData[];
}) {
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
      {books?.map((book) => {
        return (
          <SwiperSlide key={book.id}>
            <CustomCarouselItem book={book} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
