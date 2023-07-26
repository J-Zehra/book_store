import { FetchedCart } from "@/types";
import axios from "axios";
import { atom, selector } from "recoil";
import { userDataState } from "./user";

export const cartItemState = atom({
  key: "cartItemState",
  default: [] as FetchedCart[],
});
