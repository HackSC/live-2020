import { css } from "styled-components";

const Animations = css`
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideFromLeft {
    from {
      left: -200%;
      opacity: 0;
    }
    to {
      left: -65%;
      opacity: 1;
    }
  }

  @keyframes slideFromLeftTablet {
    from {
      left: -200%;
      opacity: 0;
    }
    to {
      left: -78%;
      opacity: 1;
    }
  }
`;

export default Animations;
