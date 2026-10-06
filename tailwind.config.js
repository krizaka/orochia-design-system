/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./tokens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orochia: {
          obsidian: "#060709",
          surface: "#0c0e14",
          card: "#121520",
          border: "#1f2438",
          primary: "#8b5cf6",
          accent: "#ec4899",
          flame: "#f43f5e",
          gold: "#f59e0b",
          cyan: "#06b6d4",
          success: "#10b981",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["Outfit", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
