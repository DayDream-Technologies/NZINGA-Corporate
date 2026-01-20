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
        "background-secondary": "var(--background-secondary)",
        "background-tertiary": "var(--background-tertiary)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
          deep: "var(--accent-deep)",
        },
        "accent-secondary": "var(--accent-secondary)",
        border: "var(--border)",
        "border-light": "var(--border-light)",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "DM Sans", "sans-serif"],
      },
      fontSize: {
        "heading-xl": "clamp(2.5rem, 8vw, 5rem)",
        "heading-lg": "clamp(2rem, 5vw, 3.5rem)",
        "heading-md": "clamp(1.5rem, 3vw, 2rem)",
      },
      animation: {
        "float-slow": "float 25s ease-in-out infinite",
        "float-medium": "float 30s ease-in-out infinite",
        "float-fast": "float 35s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "grid-pulse": "grid-pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(50px, -50px) rotate(5deg)" },
          "50%": { transform: "translate(100px, 0) rotate(0deg)" },
          "75%": { transform: "translate(50px, 50px) rotate(-5deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.08" },
          "50%": { opacity: "0.15" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)",
        "gradient-hero": "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 40%, #a78bfa 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
