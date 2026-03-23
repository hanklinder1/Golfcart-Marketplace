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
        sage: {
          50: "#f6f7f5",
          100: "#e8ebe5",
          200: "#d2d8cc",
          300: "#b3bda8",
          400: "#95a385",
          500: "#788a6a",
          600: "#5e6e53",
          700: "#4b5843",
          800: "#3e4838",
          900: "#343d30",
        },
        sand: {
          50: "#faf8f5",
          100: "#f3efe8",
          200: "#e8e0d2",
          300: "#d6c9b3",
          400: "#c2ad91",
          500: "#b09777",
          600: "#a3865e",
          700: "#886f4f",
          800: "#6f5b44",
          900: "#5b4b3a",
        },
        sky: {
          50: "#f0f7fa",
          100: "#dceef5",
          200: "#bddee9",
          300: "#8ec6d8",
          400: "#58a7c0",
          500: "#3d8da6",
          600: "#35738c",
          700: "#305e72",
          800: "#2d4f5f",
          900: "#294351",
        },
      },
    },
  },
  plugins: [],
};
export default config;
