import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

import App from "./App";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "./assets/styles/theme";
import "./translations/translations";
import { AppContextProvider } from "./context/AppContext";

const queryCache = new QueryCache();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <AppContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </AppContextProvider>
        {process.env.NODE_ENV !== "production" && (
          <ReactQueryDevtools initialIsOpen />
        )}
      </ReactQueryCacheProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
