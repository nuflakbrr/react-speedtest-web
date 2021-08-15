import React from "react";

export interface siteContextProps {
  siteData: any | null;
  setSiteData: (siteData: null) => void;
}

const inititalSiteContextValue = {
  siteData: null,
  setSiteData: () => {},
};

export const siteContext = React.createContext < siteContextProps > inititalSiteContextValue;

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  const [siteData, setSiteData] = React.useState(null);
  return <siteContext.Provider value={{ siteData, setSiteData }}>{children}</siteContext.Provider>;
};

export default SiteProvider;
