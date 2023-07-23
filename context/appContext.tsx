"use client";

import { RecoilRoot } from "recoil";

export default function AppContext({ children }: ChildrenProp) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
