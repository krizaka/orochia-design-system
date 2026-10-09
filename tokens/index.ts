/**
 * OROCHIA DESIGN SYSTEM — TOKENS
 * Obsidian Velvet Noir & Cyber-Sensual Luxury
 * Crafted by Krizaka Architecture
 */

export const colors = {
  obsidian: {
    DEFAULT: "#060709",
    deep: "#030406",
    surface: "#0c0e14",
    elevated: "#121520",
    border: "#1f2438",
    borderSubtle: "rgba(255, 255, 255, 0.08)",
  },
  velvet: {
    primary: "#8b5cf6",
    hover: "#7c3aed",
    active: "#6d28d9",
    light: "#c4b5fd",
    glow: "rgba(139, 92, 246, 0.35)",
  },
  sensual: {
    magenta: "#ec4899",
    rose: "#f43f5e",
    amber: "#f59e0b",
    cyan: "#06b6d4",
    emerald: "#10b981",
  },
  text: {
    primary: "#ffffff",
    secondary: "#a1a1aa",
    tertiary: "#71717a",
    disabled: "#52525b",
  },
} as const;

export const gradients = {
  velvetNoir: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f43f5e 100%)",
  sensualGlow: "linear-gradient(180deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 7, 9, 0) 100%)",
  goldTier: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
  cyberGlass: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
  obsidianCard: "linear-gradient(180deg, #0e111a 0%, #07080d 100%)",
} as const;

export const shadows = {
  glowPrimary: "0 0 25px -5px rgba(139, 92, 246, 0.4)",
  glowAccent: "0 0 25px -5px rgba(236, 72, 153, 0.4)",
  glowEmerald: "0 0 20px -5px rgba(16, 185, 129, 0.4)",
  cardElevated: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
} as const;

export const radii = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
} as const;

export const typography = {
  fontSans: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  fontDisplay: "Outfit, Inter, sans-serif",
  fontMono: "JetBrains Mono, monospace",
} as const;

/**
 * Semantic themes for platforms without Tailwind (the React Native app): the same palette the web kit's `dark` and
 * `light:` classes use, by role. Gradients are colour stops, ready for a native linear gradient.
 */
export const themes = {
  dark: {
    background: "#09090b",
    surface: "#18181b",
    surfaceElevated: "#27272a",
    border: "rgba(255, 255, 255, 0.10)",
    text: "#ffffff",
    textSecondary: "#a1a1aa",
    textTertiary: "#71717a",
    accent: "#a78bfa",
    accentStrong: "#8b5cf6",
    magenta: "#e879f9",
    success: "#34d399",
    warning: "#fbbf24",
    danger: "#fb7185",
    onAccent: "#ffffff",
  },
  light: {
    background: "#ffffff",
    surface: "#f8fafc",
    surfaceElevated: "#f1f5f9",
    border: "rgba(0, 0, 0, 0.08)",
    text: "#0f172a",
    textSecondary: "#475569",
    textTertiary: "#64748b",
    accent: "#6d28d9",
    accentStrong: "#7c3aed",
    magenta: "#c026d3",
    success: "#047857",
    warning: "#b45309",
    danger: "#be123c",
    onAccent: "#ffffff",
  },
} as const;

export type ThemeName = keyof typeof themes;
export type ThemeColors = { [K in keyof (typeof themes)["dark"]]: string };

/** The signature violet → fuchsia → pink gradient, as stops. */
export const gradientStops = {
  velvet: ["#7c3aed", "#c026d3", "#db2777"],
  success: ["#059669", "#0d9488"],
} as const;
