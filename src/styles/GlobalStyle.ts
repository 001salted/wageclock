import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

  /* Pretendard Variable 프리텐다드 */
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');

  /* Press Start 2P */
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  /* DungGeunMo 둥근모꼴 */
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