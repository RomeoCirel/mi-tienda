/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [sectionName, setSectionName] = useState("seccioncontext");
  return (
    <RouteContext.Provider value={[sectionName, setSectionName]}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
