/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}", "./index3.html"],
  theme: {
    extend: {
      colors: {
        pearl: {
          50: "rgb(var(--pearl-50-rgb) / <alpha-value>)",
          100: "rgb(var(--pearl-100-rgb) / <alpha-value>)",
          200: "rgb(var(--pearl-200-rgb) / <alpha-value>)",
          300: "rgb(var(--pearl-300-rgb) / <alpha-value>)",
          400: "rgb(var(--pearl-400-rgb) / <alpha-value>)",
          500: "rgb(var(--pearl-500-rgb) / <alpha-value>)",
          600: "rgb(var(--pearl-600-rgb) / <alpha-value>)"
        },
        royal: {
          950: "rgb(var(--royal-950-rgb) / <alpha-value>)",
          900: "rgb(var(--royal-900-rgb) / <alpha-value>)",
          850: "rgb(var(--royal-850-rgb) / <alpha-value>)",
          800: "rgb(var(--royal-800-rgb) / <alpha-value>)",
          700: "rgb(var(--royal-700-rgb) / <alpha-value>)",
          600: "rgb(var(--royal-600-rgb) / <alpha-value>)",
          500: "rgb(var(--royal-500-rgb) / <alpha-value>)",
          100: "rgb(var(--royal-100-rgb) / <alpha-value>)",
          50: "rgb(var(--royal-50-rgb) / <alpha-value>)"
        },
        gold: {
          50: "rgb(var(--gold-50-rgb) / <alpha-value>)",
          100: "rgb(var(--gold-100-rgb) / <alpha-value>)",
          200: "rgb(var(--gold-200-rgb) / <alpha-value>)",
          300: "rgb(var(--gold-300-rgb) / <alpha-value>)",
          400: "rgb(var(--gold-400-rgb) / <alpha-value>)",
          500: "rgb(var(--gold-500-rgb) / <alpha-value>)",
          600: "rgb(var(--gold-600-rgb) / <alpha-value>)",
          700: "rgb(var(--gold-700-rgb) / <alpha-value>)"
        },
        ink: {
          900: "rgb(var(--ink-900-rgb) / <alpha-value>)",
          800: "rgb(var(--ink-800-rgb) / <alpha-value>)",
          700: "rgb(var(--ink-700-rgb) / <alpha-value>)",
          500: "rgb(var(--ink-500-rgb) / <alpha-value>)"
        },
        bg: {
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          soft: "var(--bg-soft)"
        },
        text: {
          primary: "var(--text-primary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)"
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)"
        },
        border: "var(--border-color)"
      },
      fontFamily: {
        cinzel: "var(--font-heading)",
        cormorant: "var(--font-serif)",
        primary: "var(--font-primary)",
        heading: "var(--font-heading)",
        serif: "var(--font-serif)",
        sans: "var(--font-primary)"
      },
      keyframes: {
        "float-subtle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "spin-celestial": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        },
        "shimmer-light": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        float: "float-subtle 6s ease-in-out infinite",
        "spin-slow": "spin-celestial 55s linear infinite",
        "spin-reverse": "spin-celestial 40s linear infinite reverse",
        shimmer: "shimmer-light 4s linear infinite"
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)"
      },
      maxWidth: {
        site: "var(--max-width)"
      },
      spacing: {
        section: "var(--section-padding)"
      },
      boxShadow: {
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)"
      }
    }
  },
  plugins: []
};
