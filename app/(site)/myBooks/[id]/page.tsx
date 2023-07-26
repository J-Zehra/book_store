"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { CustomRating } from "@/reusables/styleRating";
import { BookFullDetails } from "@/types";
import {
  Box,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Quantity from "../components/quantity";
import ActionButtons from "../components/actionButtons";
import Description from "../components/description";
import MoreDetails from "../components/moreDetails";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

export default function ManageBook() {
  const { id } = useParams();
  const [bookData, setBookData] = useState<BookFullDetails>();
  useEffect(() => {
    axios
      .get(`/api/books/${id}`)
      .then((res) => {
        console.log(res);
        setBookData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box paddingY="8rem" bgcolor="background.default">
      <Container maxWidth="lg">
        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <Stack flex={1} justifyContent="start" alignItems="center">
            <Image
              src={bookData?.cover || "/book-cover.png"}
              width={500}
              height={500}
              alt="Book Cover"
              style={{
                width: "60%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: ".3rem",
              }}
            />
          </Stack>
          <Stack flex={1} spacing={2}>
            <Typography fontWeight="bold" fontSize="2rem">
              {bookData?.title}
            </Typography>
            <Stack direction="row" alignItems="center" spacing="1rem">
              <Typography color="primary" fontSize=".8rem">
                {bookData?.author.profile.penName}
              </Typography>
              <Divider
                orientation="vertical"
                sx={{ height: "1rem", opacity: ".5" }}
              />
              <Typography fontSize=".8rem">
                {moment(bookData?.createdAt).format("LL")}
              </Typography>
              <Divider
                orientation="vertical"
                sx={{ height: "1rem", opacity: ".5" }}
              />
              <Stack spacing={2.5} direction="row">
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  direction="row"
                  spacing={1}
                >
                  <LoyaltyIcon sx={{ color: "primary.main" }} />
                  <Typography fontSize=".8rem" color="primary">
                    {bookData?.bookSale.length}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <CustomRating rating={bookData?.rating} size="medium" />
            <Divider sx={{ marginBlock: ".6rem", opacity: ".5" }} />
            <Typography fontWeight="bold" color="primary" fontSize="2.8rem">
              ${bookData?.price}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Chip
                label={`${bookData?.stocks} Stocks available`}
                color="primary"
                variant="outlined"
              />
            </Stack>
            <ActionButtons id={id} />
            <Divider sx={{ marginBlock: ".6rem", opacity: ".5" }} />
            <Description description={bookData?.description} />
            <MoreDetails
              language={bookData?.language}
              publisher={bookData?.publisher}
              totalPage={bookData?.pageCount}
              publishDate={bookData?.createdAt}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
