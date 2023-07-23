"use client";

import { activeNavState } from "@/state/atom/navState";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

function useObserver(pageName: string) {
  const [, setActiveNav] = useRecoilState(activeNavState);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setActiveNav(pageName);
    }
  }, [ref, isInView, pageName, setActiveNav]);

  return { ref };
}

export default useObserver;
