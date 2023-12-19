/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Computer Modern Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Computer Modern Serif", ...defaultTheme.fontFamily.serif],
        mono: ["Computer Modern Typewriter", ...defaultTheme.fontFamily.mono],
        bright: ["Computer Modern Bright", ...defaultTheme.fontFamily.sans],
        concrete: [
          "Computer Modern Concrete",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
