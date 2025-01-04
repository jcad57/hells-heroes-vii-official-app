import React, { createContext, useState, ReactNode } from "react";

interface CurrentTabContextType {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const CurrentTabContext = createContext<CurrentTabContextType | undefined>(undefined);

export const CurrentTabProvider = ({ children }: { children: ReactNode }) => {
  const [currentTab, setCurrentTab] = useState<string>("home");

  return <CurrentTabContext.Provider value={{ currentTab, setCurrentTab }}>{children}</CurrentTabContext.Provider>;
};

export default CurrentTabContext;
