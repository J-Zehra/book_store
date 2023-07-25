"use client";

import useSessionData from "@/hooks/useSessionData";
import { cartItemState } from "@/state/atom/cart";
import { userDataState } from "@/state/atom/user";
import { cartItemsSelector } from "@/state/selector/cartItemsSelector";
import { FetchedCart } from "@/types";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Loadables({ children }: { children: React.ReactNode }) {
  const { userData, status } = useSessionData();
  const [user, setUserData] = useRecoilState(userDataState);

  const cartItems = useRecoilValue(cartItemsSelector) as FetchedCart[];
  const [cartItemLocalState, setCartItemLocalState] =
    useRecoilState(cartItemState);

  useEffect(() => {
    if (cartItems) {
      setCartItemLocalState(cartItems);
    }
  }, [cartItems, setCartItemLocalState]);
  useEffect(() => {
    if (status === "authenticated" && userData) {
      setUserData(userData);
    }
  }, [setUserData, status, userData]);

  return children;
}
