import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "screen-bottom-1": "calc(100vh - 1px)",
        footer: "256px",
      },
      transitionProperty: {
        width: "min-width max-width",
        height: "max-height",
      },
    },
  },
  plugins: [],
};
export default config;
