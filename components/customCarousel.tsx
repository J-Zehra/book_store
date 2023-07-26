import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Pagination, Navigation } from "swiper";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { CustomRating } from "@/reusables/styleRating";
import CallMissedOutgoingRoundedIcon from "@mui/icons-material/CallMissedOutgoingRounded";
import { useRouter } from "next/navigation";
import { FetchedBookData } from "@/types";

export default function CustomCarousel({
  books,
}: {
  books?: FetchedBookData[];
}) {
  const navigate = useRouter();
  const handleVisitClick = (id: string) => {
    navigate.push(`books/${id}`);
  };

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
            <Stack
              width="16rem"
              height="24rem"
              bgcolor="background.paper"
              borderRadius=".3rem"
              boxShadow="5px 5px 8px rgba(0, 0, 10, .2)"
              position="relative"
              justifyContent="end"
            >
              <Image
                src={book.cover || "/book-cover.png"}
                width={500}
                height={500}
                alt="Book Cover"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: ".3rem",
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
                    "linear-gradient(to top, black, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0))",
                }}
              />

              <Box p="1rem 1.5rem" zIndex={2}>
                <Stack
                  direction="row"
                  alignItems="end"
                  justifyContent="space-between"
                >
                  <Stack spacing={2}>
                    <CustomRating size="medium" />
                    <Typography
                      fontWeight="700"
                      fontSize="1.5rem"
                      sx={{ color: "#778DFF" }}
                    >
                      ${book.price}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <IconButton
                      size="medium"
                      onClick={() => handleVisitClick(book.id)}
                      sx={{
                        border: "1px dashed #778DFF",
                        padding: ".8rem",
                        color: "#778DFF",
                        ":hover": { bgcolor: "rgba(60, 60, 160, .3)" },
                        transition: "all .3s ease",
                      }}
                    >
                      <CallMissedOutgoingRoundedIcon />
                    </IconButton>
                    <IconButton
                      size="medium"
                      sx={{
                        bgcolor: "rgba(60, 60, 160, .5)",
                        padding: ".8rem",
                        color: "#778DFF",
                        ":hover": { bgcolor: "rgba(60, 60, 160, .8)" },
                        transition: "all .3s ease",
                      }}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
