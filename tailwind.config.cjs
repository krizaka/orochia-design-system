/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  presets: [require("./tailwind-preset.cjs")],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./tokens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
