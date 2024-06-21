import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [{ pattern: /hljs+/ }],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: {
          bg: "#C7E8C7",
          tx: "#355E39",
        },
        purple: {
          bg: "#D2C5F9",
          tx: "#543976",
        },
      },
    },
  },
  plugins: [require("tailwind-highlightjs")],
};
export default config;
