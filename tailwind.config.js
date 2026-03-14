/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.15 0.01 200)", // Dark carbon
        surface: "oklch(0.20 0.01 200)",
        "surface-light": "oklch(0.25 0.01 200)",
        accent: "oklch(0.65 0.25 40)", // Bright vermilion/amber
        "accent-dim": "oklch(0.55 0.20 40)",
        "accent-glow": "oklch(0.65 0.25 40 / 0.15)",
        secondary: "oklch(0.70 0.10 80)", // Pale gold/sand accent
        "secondary-dim": "oklch(0.60 0.08 80)",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "system-ui", "sans-serif"],
        display: ["'Cabinet Grotesk'", "'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"], // Removing generic use later
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        "float": "float 6s cubic-bezier(0.25, 1, 0.5, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}
