/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#014e5b",
        secondary: "#0d7c79",
        highlights: "#ef8f5c",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
    //dark mode https://daisyui.com/docs/config/
  },
}
