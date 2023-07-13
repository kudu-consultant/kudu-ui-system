const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  screens: {
    "3xs": { min: "320px" },
    "2xs": { min: "380px" },
    xs: { min: "475px" },
    ...defaultTheme.screens,
    "max-xl": { max: "1279px" },
    "max-lg": { max: "1023px" },
    "max-md": { max: "767px" },
    "max-xs": { max: "474px" },
    "max-2xs": { max: "378px" },
    "max-3xs": { max: "318px" },
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
