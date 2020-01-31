import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Animations from "./Animations";
import Fonts from "./Fonts";

const GlobalStyles = createGlobalStyle`
  ${reset}

  ${Animations}
  ${Fonts}

  body {
    font-family: AktivGrotesk, sans-serif;
    color: ${({ theme }) => theme.color.darkText};
  }

  a {
    color: #FF8379;
    text-decoration: none;
  }
`;

export default GlobalStyles;
