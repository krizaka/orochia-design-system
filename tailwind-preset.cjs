/**
 * Tailwind preset of the Orochia design system. In a consuming app:
 *   presets: [require("@krizaka/orochia-design-system/tailwind-preset")],
 *   content: [..., "./node_modules/@krizaka/orochia-design-system/dist/**\/*.js"],
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
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
      boxShadow: {
        "glow-primary": "0 0 25px -5px rgba(139, 92, 246, 0.4)",
        "glow-accent": "0 0 25px -5px rgba(236, 72, 153, 0.4)",
      },
    },
  },
};
