import { krizakaUi } from "@krizaka/config/eslint/krizaka-ui";
import { krizakaNext } from "@krizaka/config/eslint/next";

// The four UI rules, strict: no raw palette colour, no `light:`, no arbitrary [var(--…)], no template className.
const config = [
  ...krizakaNext,
  ...krizakaUi({ files: ["components/**/*.{ts,tsx}", "app/**/*.{ts,tsx}"] }),
  { rules: { "@next/next/no-img-element": "off" } },
];

export default config;
