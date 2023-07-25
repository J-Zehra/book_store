import { SessionUserData } from "@/types";
import { atom } from "recoil";

export const userDataState = atom({
  key: "userDataState",
  default: {} as SessionUserData,
});
