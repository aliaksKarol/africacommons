import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        footer: "#3c3b33",
        subscribeBtn: "#b69c86",
        customGray: "#212529",
      },
      maxWidth: {
        "1140": "1140px",
      },
      screens: {
        lg: "992px",
        "xs-max": { max: "479px" },
        "sm-max": { max: "639px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "991px" },
        "xl-max": { max: "1139px" },
      },
      spacing: {
        "12": "3rem",
      },
      fontFamily: {
        custom: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
