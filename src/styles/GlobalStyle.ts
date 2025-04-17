import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'DungGeunMo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Pretendard Variable', sans-serif;
    background-color: #F1F5EC;
  }

`

export default GlobalStyle;