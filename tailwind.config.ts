import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "fade-in-delayed": "fadeIn 1s ease-in-out 1s forwards", // Delay the fade-in by 2 seconds
      },
      fontFamily: {
        marker: ['"Permanent Marker"', "cursive"], // Add a custom font class
      },
    },
  },
  plugins: [],
} satisfies Config;
