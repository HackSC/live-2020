const theme = {
  fontSize: {
    small: "14px",
    default: "20px",
    medium: "20px",
    large: "36px"
  },
  fontWeight: {
    light: "300",
    default: "400"
  },
  color: {
    dark: "#4A4A4A",
    orange: "#FBA43A",
    white: "#FFFFFF",
    darkText: "#1C1C1C"
  },
  media: {
    desktop: style => `
      @media screen and (max-width: 960px) {
        ${style}
      }
    `,
    handOverlap: style => `
      @media screen and (max-width: 860px) {
        ${style}
      }
    `,
    tablet: style => `
      @media screen and (max-width: 768px) {
        ${style}
      }
    `,
    mobile: style => `
      @media screen and (max-width: 425px) {
        ${style}
      }
    `
  }
};

export default theme;
