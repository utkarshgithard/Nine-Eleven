import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: "#E8930A",
          light: "#F5A82B",
          dark: "#C47A08",
        },
        mahogany: {
          DEFAULT: "#2E1503",
          light: "#4A2308",
        },
        cream: {
          DEFAULT: "#FDF6EC",
          dark: "#F5E8D0",
        },
        forest: {
          DEFAULT: "#2D6A4F",
          light: "#3D8B6A",
          dark: "#1E4D38",
        },
        warmgray: {
          DEFAULT: "#7A6652",
          light: "#A08B73",
          dark: "#5C4D3C",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        nunito: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulse_glow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(232,147,10,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(232,147,10,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        steam1: {
          "0%": { opacity: "0", transform: "translateY(0) scaleX(1)" },
          "40%": { opacity: "0.7" },
          "80%": { opacity: "0" },
          "100%": { opacity: "0", transform: "translateY(-30px) scaleX(1.5)" },
        },
        steam2: {
          "0%": { opacity: "0", transform: "translateY(0) scaleX(1)" },
          "40%": { opacity: "0.5" },
          "80%": { opacity: "0" },
          "100%": { opacity: "0", transform: "translateY(-25px) scaleX(1.3)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulse_glow: "pulse_glow 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        steam1: "steam1 2s ease-in-out infinite",
        steam2: "steam2 2.5s ease-in-out infinite 0.5s",
      },
    },
  },
  plugins: [forms],
};

export default config;
