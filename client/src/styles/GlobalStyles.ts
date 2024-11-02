// client/src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
  }

  button {
    font-family: inherit;
  }

  input {
    font-family: inherit;
  }
`;

export default GlobalStyle;
