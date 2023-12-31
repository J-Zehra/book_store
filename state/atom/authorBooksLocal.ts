import { FetchedBookData } from "@/types";
import { atom } from "recoil";

export const authorBookLocal = atom({
  key: "authorBookLocal",
  default: [] as FetchedBookData[],
});
