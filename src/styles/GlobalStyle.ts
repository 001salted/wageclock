import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'DungGeunMo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    /* font-family: 'Pretendard Variable', sans-serif; */
    margin: 0;
  }

`;

export default GlobalStyle;
