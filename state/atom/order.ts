import { FetchedCart } from "@/types";
import { atom } from "recoil";

export const selectedCartItems = atom({
  key: "selectedCartItems",
  default: [] as FetchedCart[],
});
