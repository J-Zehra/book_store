"use client";

import useObserver from "@/hooks/useObserver";
import React from "react";

export default function ObserverWrapper({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { ref } = useObserver(name);

  return <div ref={ref}>{children}</div>;
}
