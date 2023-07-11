import { tailwindPreset } from "./src/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./test-suite/**/*.{html,js,svelte,ts}"],
  presets: [tailwindPreset],
};
