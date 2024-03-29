/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101010",
        primary: "#7CEBFF",
        secondary: "#B5F4FF",
      },
      animation: {
        spin: "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
