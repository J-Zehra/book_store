import { BookFullDetails, FetchedBookData, FetchedCart } from "@/types";
import { atom } from "recoil";

export const authorBookLocal = atom({
  key: "authorBookLocal",
  default: [] as FetchedBookData[],
});
