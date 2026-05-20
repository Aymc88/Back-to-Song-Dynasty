import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#f5ecd9",
        parchmentDark: "#e9dcbb",
        ink: "#1a1410",
        inkSoft: "#3a2d22",
        cinnabar: "#9b2c2c",
        gold: "#b8893a",
        jade: "#5a7a5a",
        muted: "#7a6a52",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"EB Garamond"', "Georgia", "serif"],
        display: ['"Playfair Display"', '"Cormorant Garamond"', "Georgia", "serif"],
        hand: ['"Ma Shan Zheng"', '"Cormorant Garamond"', "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
