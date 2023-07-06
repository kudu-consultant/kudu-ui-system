const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  screens: {
    xs: { min: "475px" },
    ...defaultTheme.screens,
    "max-md": { max: "768px" },
    "max-xs": { max: "475px" },
  },
  fontFamily: {
    HindSiliguri: ["Hind Siliguri", ...fontFamily.sans],
  },
  extend: {
    containers: {
      "2xs": "16rem",
    },
  },
  colors: {
    black: "#000000",
    white: "#ffffff",
  },
  aspectRatio: {
    "1/1": "1 / 1",
  },
};
