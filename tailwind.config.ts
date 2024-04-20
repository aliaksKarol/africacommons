import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1140": "1140px",
      },
      screens: {
        lg: "992px",
        "sm-max": { max: "639px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "991px" },
        "xl-max": { max: "1139px" },
      },
    },
  },
  plugins: [],
};
export default config;
