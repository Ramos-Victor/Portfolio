/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
        },
      },
      boxShadow: {
        premium: "0 12px 40px -20px rgba(139, 92, 246, 0.45)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(139, 92, 246, 0.22), transparent 40%), radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.18), transparent 45%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
