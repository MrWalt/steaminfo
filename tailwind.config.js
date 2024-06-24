/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e7eaed",
          100: "#a0aab5",
          200: "#586a7e",
          300: "#293f59",
          400: "#112a46",
          500: "#0f263f",
          600: "#0e2238",
          700: "#0a192a",
          800: "#091523",
          900: "#07111c",
        },
        accent: {
          50: "#d3e8fa",
          100: "#a7d1f5",
          200: "#7ab9f0",
          300: "#4ea2eb",
          400: "#3897e9",
          500: "#228be6",
          600: "#1f7dcf",
          700: "#1b6fb8",
          800: "#1861a1",
          900: "#14538a",
          950: "#114673",
        },
      },
      boxShadow: {
        inner: "inset 0 0 0 3px #3897e9",
      },
    },
  },
  plugins: [],
};
