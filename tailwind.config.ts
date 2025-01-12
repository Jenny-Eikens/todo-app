import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light-mobile": "url('/images/bg-mobile-light.jpg')",
        "dark-mobile": "url('/images/bg-mobile-dark.jpg')",
        "light-desktop": "url('/images/bg-desktop-light.jpg')",
        "dark-desktop": "url('/images/bg-desktop-dark.jpg')",
        "gradient-with-check":
          "url('/images/icon-check.svg'), linear-gradient(to bottom right, #567de6, #823cd0)",
      },
    },
  },
  plugins: [],
} satisfies Config;

/*
light theme:
- Very Light Gray: hsl(0,0%,98%) -> for page background
- Very Light Grayish Blue: hsl(236,33%,92%) -> for checkbox border and hr border
- Light Grayish Blue: hsl(233,11%,84%) -> for completed todos
- Dark Grayish Blue: hsl(236,9%,61%) -> for footer
- Very Dark Grayish Blue (hover): hsl(235,19%,35%) -> for hovering over filters

dark theme:
- Very Dark Blue: hsl(235,21%,11%) -> for page background
- Very Dark Desaturated Blue: hsl(235,24%,19%) -> for todo list
- Light Grayish Blue: hsl(234,39%,85%) -> for todos
- Light Grayish Blue (hover): hsl(236,33%,92%) -> for hovering over filters
- Dark Grayish Blue: hsl(234,11%,52%) -> for footer and completed todos
- Very Dark Grayish Blue: hsl(233,14%,35%) -> for checkbox border
- Very Dark Grayish Blue: hsl(237,14%,26%) -> for hr border
*/
