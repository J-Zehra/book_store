import { FetchedCart } from "@/types";
import { atom } from "recoil";

export const cartItemState = atom({
  key: "cartItemState",
  default: [] as FetchedCart[],
});
