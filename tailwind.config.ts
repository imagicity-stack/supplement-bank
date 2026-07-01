import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — bold, premium, gym-focused.
        ink: {
          DEFAULT: "#0B0B0F",
          soft: "#14141A",
          muted: "#1E1E27",
        },
        brand: {
          // Electric lime / yellow accent
          accent: "#D7FF00",
          "accent-dark": "#B4D600",
          // Aggressive red
          red: "#E4002B",
          "red-dark": "#B80022",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(0, 0, 0, 0.25)",
        "card-hover": "0 24px 48px -16px rgba(0, 0, 0, 0.35)",
        glow: "0 0 0 3px rgba(215, 255, 0, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
