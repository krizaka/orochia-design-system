// @vitest-environment node
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { themes as kzThemes } from "@krizaka/tokens/native";

import { nativeTheme, themes } from "./index";

const css = readFileSync(fileURLToPath(new URL("../theme.css", import.meta.url)), "utf8");

/** The `--kz-*` declarations of the first block whose selector matches. */
function block(selector: RegExp): Record<string, string> {
  const match = css.match(new RegExp(`${selector.source}\\s*\\{([^}]*)\\}`));
  if (!match) throw new Error(`no block ${selector}`);
  return Object.fromEntries([...match[1].matchAll(/--kz-([\w-]+):\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]));
}

const camel = (name: string) => name.replace(/-(\w)/g, (_, c: string) => c.toUpperCase()).replace(/(\D)(\d)/g, "$1$2");

/** #rrggbb, rgb(r g b / a), rgba(r,g,b,a) → [r, g, b, a]. */
function rgba(value: string): number[] {
  const hex = value.match(/^#([0-9a-f]{6})$/i);
  if (hex) return [0, 2, 4].map((i) => parseInt(hex[1].slice(i, i + 2), 16)).concat(1);
  const fn = value.match(/^rgba?\(([^)]+)\)$/);
  if (!fn) throw new Error(`unparsed colour ${value}`);
  const parts = fn[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  return parts.length === 3 ? [...parts, 1] : parts;
}

function luminance(value: string): number {
  const [r, g, b] = rgba(value).map((v) => v / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const dark = block(/:root,\s*\.theme-dark/);
const light = block(/html\.light/);

describe("theme.css", () => {
  it("is the same theme as nativeTheme, role by role", () => {
    for (const [css, native] of [
      [dark, nativeTheme.dark],
      [light, nativeTheme.light],
    ] as const) {
      for (const [name, value] of Object.entries(css)) {
        if (name.startsWith("font")) continue;
        expect(rgba(value), name).toEqual(rgba(native[camel(name) as keyof typeof native]));
      }
    }
  });

  it("declares no palette and no variant: roles only", () => {
    expect(css).not.toMatch(/--color-(obsidian|velvet|sensual|flame)/);
    expect(css).not.toMatch(/@custom-variant/);
    expect(css).toMatch(/--orochia-story-ring/);
  });
});

describe("nativeTheme", () => {
  it("overrides @krizaka/tokens, never copies it: the roles Orochia does not change follow the platform", () => {
    expect(nativeTheme.dark.success).toBe(kzThemes.dark.success);
    expect(nativeTheme.light.textPrimary).toBe(kzThemes.light.textPrimary);
    expect(nativeTheme.dark.accent).not.toBe(kzThemes.dark.accent);
    expect(Object.keys(nativeTheme.dark).sort()).toEqual(Object.keys(kzThemes.dark).sort());
  });

  it("keeps the 2.x `themes` as a deprecated view of it", () => {
    expect(themes.dark.background).toBe(nativeTheme.dark.surface0);
    expect(themes.light.accent).toBe(nativeTheme.light.accent);
    expect(themes.dark.magenta).toBe(nativeTheme.dark.accent2);
  });

  it.each(["dark", "light"] as const)("reads at WCAG AA in %s", (mode) => {
    const t = nativeTheme[mode];
    for (const surface of [t.surface0, t.surface1, t.surface2, t.surface3]) {
      expect(contrast(t.textPrimary, surface)).toBeGreaterThanOrEqual(4.5);
      expect(contrast(t.textSecondary, surface)).toBeGreaterThanOrEqual(4.5);
      expect(contrast(t.textMuted, surface)).toBeGreaterThanOrEqual(3);
    }
    // White text on the accent and on the gradient's second stop (the sensual button).
    expect(contrast(t.onAccent, t.accent)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(t.onAccent, t.accentHover)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(t.onAccent, t.accent2)).toBeGreaterThanOrEqual(4.5);
    // The focus ring stands out from the page (non-text contrast).
    expect(contrast(t.ring, t.surface0)).toBeGreaterThanOrEqual(3);
  });
});
