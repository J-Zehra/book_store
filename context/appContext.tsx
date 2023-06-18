"use client";

import React, { createContext, useMemo, useState } from "react";

export const ApplicationContext = createContext<AppContextValues | null>(null);

export default function AppContext({ children }: ChildrenProp) {
  const [activeNav, setActiveNav] = useState<string>("Home");

  const values = useMemo(() => {
    const items: AppContextValues = {
      activeNav,
      setActiveNav,
    };
    return items;
  }, [activeNav]);

  return (
    <ApplicationContext.Provider value={values}>{children}</ApplicationContext.Provider>
  );
}
