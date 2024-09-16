import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      textColor: {
        primary: "white",
        secondary: "#6ee7b7",
        tercery: "rgb(110 231 183 / 0.2)",
      },
      backgroundColor: {
        primary: "white",
        secondary: "#6ee7b7",
        tercery: "rgb(110 231 183 / 0.2)",
      },
      animation: {
        "ping-large": "ping-large 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "move-left": "move-left 1.5s linear infinite",
        "move-right": "move-right 1.5s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75% , 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
