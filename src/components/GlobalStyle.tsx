import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* --- リセットCSS --- */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body, h1, h2, h3, p, ul, ol, li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  /* --- Global Design --- */
  body {
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #fafafa;
    color: #333;
  }

  #root {
    width: 960px;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 32px;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      filter: brightness(70%);
    }
  }
`;
