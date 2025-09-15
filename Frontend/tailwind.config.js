/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          50: "#fff1f7",
          100: "#ffe4f0",
          200: "#ffbfe0",
          300: "#ff94cb",
          400: "#ff5ab1",
          500: "#f81fa2",
          600: "#d10b86",
          700: "#a30667",
          800: "#76064a",
          900: "#4e0531",
          DEFAULT: "#f81fa2",
          accent: "#8b5cf6",
          dark: "#111827",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(248, 31, 162, 0.35)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #f81fa2 0%, #8b5cf6 100%)",
      },
    },
  },
  plugins: [],
};
