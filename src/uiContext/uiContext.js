import { createContext, useState } from "react";

export const uiContext = createContext();

export const UiProvider = ({ children }) => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <uiContext.Provider value={{ openSearch, setOpenSearch }}>
      {children}
    </uiContext.Provider>
  );
};
