import { FetchedBookData } from "@/types";
import { atom } from "recoil";

export const bookListState = atom({
  key: "bookListState",
  default: [] as FetchedBookData[],
});
