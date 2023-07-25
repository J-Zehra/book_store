import axios from "axios";
import { atom, selector } from "recoil";
import { userDataState } from "../atom/user";
import { FetchedBookData } from "@/types";

export const authorBookListSelector = selector({
  key: "authorBookListSelector",
  get: async ({ get }) => {
    const userData = get(userDataState);
    const userId = userData?.id;

    if (!userId) {
      return [];
    }

    try {
      const response = await axios.get(`/api/books/author/${userId}`);
      return response.data as FetchedBookData[];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
});
