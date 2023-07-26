"use client";

import HomeLoading from "@/components/homeLoading";
import { cartItemState } from "@/state/atom/cart";
import { userDataState } from "@/state/atom/user";
import { FetchedCart, SessionUserData } from "@/types";
import { useSession } from "next-auth/react";
import React, { ReactNode, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Loadables({ children }: { children: ReactNode }) {
  const { data, status } = useSession();
  const [cartItem, setCartItem] = useRecoilState(cartItemState);
  const userData: SessionUserData = data?.user as SessionUserData;
  const [user, setUser] = useRecoilState(userDataState);

  if (status === "unauthenticated") {
    return children;
  }

  if (status === "loading") {
    return <HomeLoading />;
  }

  if (status === "authenticated") {
    setUser(userData);
    return children;
  }
}
