import React, { createContext, ReactNode, useState } from "react";

const noOperation = (value: string) => {};
const defaultState = {
  apiKey: "",
  addKey: noOperation,
};

export const AppContext = createContext(defaultState);

type ProviderProps = {
  children: ReactNode;
};
export const AppContextProvider = ({ children }: ProviderProps) => {
  const [apiKey, setApiKey] = useState("");

  const addKey = (key: string) => {
    setApiKey(key);
  };

  const value = {
    apiKey,
    addKey,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
