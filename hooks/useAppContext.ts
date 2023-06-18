"use client";

import { ApplicationContext } from "@/context/appContext";
import { useContext } from "react";

function useApp() {
  return useContext(ApplicationContext);
}

export default useApp;
