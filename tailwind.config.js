/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: "#0D2C6E", dark: "#091e4a", light: "#142f6e" },
        brand: { DEFAULT: "#1E8FE1", light: "#4AAFF0", pale: "#EBF5FD", border: "#c2e0f7" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.03em",
        tight:    "-0.02em",
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "draw-hb":   "drawHb 2.4s ease forwards 0.3s",
        "fade-up":   "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { opacity: "1",   transform: "scale(1)"   },
          "50%":     { opacity: "0.4", transform: "scale(0.65)" },
        },
        drawHb: {
          to: { strokeDashoffset: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)"    },
        },
      },
    },
  },
  plugins: [],
};
