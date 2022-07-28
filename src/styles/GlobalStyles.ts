import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
 ${normalize}
  * {
    font-family: 'Noto Sans KR', -apple-system, system-ui, BlinkMacSystemFont,
        'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    color: black;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul, ol {
    list-style: none;
  }
  button, input, textarea {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	outline: inherit;
  }
  button{
    cursor: pointer;
  }

`;
