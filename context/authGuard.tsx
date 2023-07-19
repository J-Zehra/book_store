"use client";

import HomeLoading from "@/components/homeLoading";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const [showLoader, setsShowLoader] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setsShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  });

  if (showLoader) {
    return <HomeLoading />;
  }

  if (status !== "loading") {
    return (
      <Box
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {children}
      </Box>
    );
  }
}
