/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand' : '#FFAA88',
        'cream': '#EEE',
        'cream-content': '#002938',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('@tailwindcss/forms'), require("daisyui")],
  daisyui: {
    themes: ["fantasy", "dark"],
    logs: false,
    darkTheme: "dark",
  },
};
