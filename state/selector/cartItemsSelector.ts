import axios from "axios";
import { selector } from "recoil";
import { userDataState } from "../atom/user";
import { FetchedCart } from "@/types";

export const cartItemsSelector = selector({
  key: "cartItemsSelector",
  get: async ({ get }) => {
    const userData = get(userDataState);
    const userId = userData?.id;

    if (!userId) {
      return [];
    }

    try {
      const response = await axios.get("/api/cart/get", { params: { userId } });
      return response.data.items as FetchedCart[];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
});
