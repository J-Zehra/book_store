"use client";

import { ApplicationContext } from "@/context/appContext";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

function useObserver(pageName: string) {
  const context = useContext(ApplicationContext);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      context?.setActiveNav(pageName);
    }
  }, [ref, isInView, context, pageName]);

  return { ref };
}

export default useObserver;
