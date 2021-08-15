import React from "react";

export const siteContext = React.createContext();

const SiteProvider = ({ children }) => {
  const [siteData, setSiteData] = React.useState(null);
  return <siteContext.Provider value={{ siteData, setSiteData }}>{children}</siteContext.Provider>;
};

export default SiteProvider;
