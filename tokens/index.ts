/**
 * OROCHIA DESIGN SYSTEM — TOKENS
 * Obsidian Velvet Noir & Cyber-Sensual Luxury.
 *
 * `colors`, `gradients`, `shadows`, `radii`, `typography`, `gradientStops` are BRAND values — for illustrations, e-mails,
 * OG images and the native app. A web component never reads them: it reads a role (`bg-accent`, `text-fg-secondary`),
 * which theme.css gives the Orochia values. `nativeTheme` is the same theme, by role, for React Native.
 */
import { type Theme, themes as kzThemes } from "@krizaka/tokens/native";

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
 * The Orochia theme for platforms without CSS (the React Native app): the @krizaka/tokens native themes with the
 * Obsidian Velvet Noir roles overridden — the same values as theme.css (a test keeps them equal). An override, never a
 * copy: every role Orochia does not change follows @krizaka/tokens.
 */
const darkOverrides = {
  surface0: "#060709",
  surface1: "#0c0e14",
  surface2: "#121520",
  surface3: "#1a1e2c",
  borderDefault: "#1f2438",
  accent: "#7c3aed",
  accentHover: "#6d28d9",
  accentSoft: "rgba(139,92,246,0.12)",
  accent2: "#db2777",
  ring: "#a78bfa",
} as const satisfies Partial<Theme>;

const lightOverrides = {
  surface0: "#f8fafc",
  accent: "#7c3aed",
  accentHover: "#6d28d9",
  accentSoft: "rgba(124,58,237,0.08)",
  accent2: "#db2777",
  ring: "#7c3aed",
} as const satisfies Partial<Theme>;

export const nativeTheme: { readonly dark: Theme; readonly light: Theme } = {
  dark: { ...kzThemes.dark, ...darkOverrides },
  light: { ...kzThemes.light, ...lightOverrides },
};

/** The roles of one theme (the @krizaka/tokens native `Theme`). */
export type { Theme };
export type ThemeName = keyof typeof nativeTheme;

/** @deprecated Since 3.0 — the 2.x key names (`background`, `text`…), kept for the apps that still read them. Use
 * `nativeTheme` (the @krizaka/tokens roles: `surface0`, `textPrimary`…). */
export type ThemeColors = {
  background: string;
  surface: string;
  surfaceElevated: string;
  border: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  accent: string;
  accentStrong: string;
  magenta: string;
  success: string;
  warning: string;
  danger: string;
  onAccent: string;
};

const legacy = (t: Theme): ThemeColors => ({
  background: t.surface0,
  surface: t.surface1,
  surfaceElevated: t.surface2,
  border: t.borderDefault,
  text: t.textPrimary,
  textSecondary: t.textSecondary,
  textTertiary: t.textMuted,
  accent: t.accent,
  accentStrong: t.accentHover,
  magenta: t.accent2,
  success: t.success,
  warning: t.warning,
  danger: t.danger,
  onAccent: t.onAccent,
});

/** @deprecated Since 3.0 — derived from `nativeTheme` under the 2.x key names. Use `nativeTheme`. */
export const themes: { readonly dark: ThemeColors; readonly light: ThemeColors } = {
  dark: legacy(nativeTheme.dark),
  light: legacy(nativeTheme.light),
};

/** The signature violet → fuchsia → pink gradient, as stops. */
export const gradientStops = {
  velvet: ["#7c3aed", "#c026d3", "#db2777"],
  success: ["#059669", "#0d9488"],
} as const;
