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
        // Near-black with a faint green undertone — reads richer than pure #000.
        ink: {
          DEFAULT: "#0B0E0C",
          soft: "#141815",
          muted: "#22261F",
        },
        brand: {
          // Logo green — the single hero accent.
          accent: "#4CAF23",
          "accent-dark": "#3C8E1A",
          "accent-bright": "#63C733",
          "accent-soft": "#EDF8E4",
          // Kept only for tiny "sale" urgency tags.
          red: "#E4002B",
          "red-dark": "#B80022",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,14,12,0.04), 0 8px 24px -12px rgba(11,14,12,0.15)",
        "card-hover":
          "0 1px 2px rgba(11,14,12,0.05), 0 28px 50px -20px rgba(11,14,12,0.28)",
        glow: "0 0 0 4px rgba(76,175,35,0.18)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(11,14,12,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,14,12,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
