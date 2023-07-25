import axios from "axios";
import { atom } from "recoil";

export const bookListState = atom({
  key: "bookListState",
  default: axios
    .get("/api/books")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    }),
});
