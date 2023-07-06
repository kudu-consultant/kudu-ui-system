/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  theme: require("./theme.js"),
  daisyui: {
    themes: [require("./daisyui/kududesign.js")],
    styled: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
};
