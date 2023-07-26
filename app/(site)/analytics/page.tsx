"use client";

import ObserverWrapper from "@/reusables/observerWrapper";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BarChart } from "./components/barChart";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userDataState } from "@/state/atom/user";

export default function AnalyticsPage() {
  const user = useRecoilValue(userDataState);
  const [totalEarnings, setTotalEarnings] = useState<number>(0);
  const [totalBooksSold, setTotalBooksSold] = useState<number>(0);
  const [totalActiveBooks, setTotalActiveBooks] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`/api/author/${user.id}/total-earnings`)
      .then((res) => {
        setTotalEarnings(res.data.totalEarnings);
        console.log(res.data.totalEarnings);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/api/author/${user.id}/total-books-sold`)
      .then((res) => {
        setTotalBooksSold(res.data.totalBooksSold);
        console.log(res.data.totalBooksSold);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/api/author/${user.id}/total-active-books`)
      .then((res) => {
        setTotalActiveBooks(res.data.totalActiveBooks);
        console.log(res.data.totalActiveBooks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  return (
    <ObserverWrapper name="Analytics">
      <Box bgcolor="background.default" paddingY="8rem">
        <Container maxWidth="lg">
          <Typography
            fontSize="1.6rem"
            fontWeight="bold"
            mb={3}
            color="primary.dark"
          >
            Overview
          </Typography>
          <Stack
            height="7rem"
            padding="1rem"
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            bgcolor="background.paper"
            borderRadius=".5rem"
          >
            <Stack alignItems="center" spacing={1}>
              <Typography>Total Earnings</Typography>
              <Typography fontSize="1.8rem" color="primary" fontWeight="bold">
                ${totalEarnings}
              </Typography>
            </Stack>
            <Divider orientation="vertical" sx={{ height: "6rem" }} />
            <Stack alignItems="center" spacing={1}>
              <Typography>Average Selling Price</Typography>
              <Typography fontSize="1.8rem" fontWeight="bold">
                $100
              </Typography>
            </Stack>
            <Divider orientation="vertical" sx={{ height: "6rem" }} />
            <Stack alignItems="center" spacing={1}>
              <Typography>Total Books Sold</Typography>
              <Typography fontSize="1.8rem" fontWeight="bold">
                {totalBooksSold || 0}
              </Typography>
            </Stack>
            <Divider orientation="vertical" sx={{ height: "6rem" }} />
            <Stack alignItems="center" spacing={1}>
              <Typography>Active Books</Typography>
              <Typography fontSize="1.8rem" fontWeight="bold">
                {totalActiveBooks}
              </Typography>
            </Stack>
          </Stack>
          <Stack mt={8}>
            <Typography
              fontWeight="medium"
              mt={2}
              fontSize="1.1rem"
              color="primary.dark"
            >
              Book Performance
            </Typography>
            <BarChart />
          </Stack>
        </Container>
      </Box>
    </ObserverWrapper>
  );
}
