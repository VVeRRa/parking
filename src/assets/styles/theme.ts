import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: Arial, open-sans,serif;
  }
`;

export const theme = {
  buttons: {
    primary: {
      color: "red",
      outline: "none",
    },
  },
  colors: {
    main: "#024889",
    secondary: "#346ca0",
    white: "#fff",
    dark: "rgba(0,0,0,0.7)",
    black: "#000",
  },
  header: {
    height: "2.5rem",
  },
  width: {
    mobileBig: "540px",
    tablet: "768px",
    desktop: "1200px",
  },
};
