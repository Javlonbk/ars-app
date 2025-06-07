/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D9CDB",
        secondary: "#F2F9FF",
        accent: "#27AE60",
        dark: "#1A1A1A",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
