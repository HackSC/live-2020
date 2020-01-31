import { css } from "styled-components";

const Fonts = css`
  @font-face {
    font-family: "AktivGrotesk";
    src: url("/static/fonts/aktiv_lt.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "AktivGrotesk";
    src: url("/static/fonts/aktiv_md.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "AktivGrotesk";
    src: url("/static/fonts/aktiv_bd.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Proggy";
    src: url("/static/fonts/proggy.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
`;

export default Fonts;
