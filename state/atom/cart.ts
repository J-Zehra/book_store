import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { FetchedCart } from "@/types";
import { getServerSession } from "next-auth";
import { atom } from "recoil";

export const cartItemState = atom({
  key: "cartItemState",
  default: [] as FetchedCart[],
});
