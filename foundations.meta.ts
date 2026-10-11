// The foundations of the Orochia kit, as krizaka.com/docs/orochia/ui/foundations shows them. The values are not
// here: `scripts/build-registry.mjs` reads them from theme.css and `nativeTheme` (the roles, both modes, their
// contrasts) into `registry/foundations.json`. This file holds what values cannot say — names, uses, and the product
// rules, each one quoted from the contract that states it (never invented here).

const CONTRACT = "https://github.com/krizaka/orochia/blob/main/AGENTS.md";
const KIT = "https://github.com/krizaka/orochia-design-system/blob/main/AGENTS.md";

export const foundations = {
  theme: "Obsidian Velvet Noir",
  summary:
    "Dark-first obsidian surfaces, a velvet violet accent and a sensual magenta second accent, with Outfit for display. The light theme, Luminous Ivory, is first-class. A theme is a set of token values: theme.css overrides the `--kz-*` roles of @krizaka/tokens, so every @krizaka/ui primitive wears Orochia without a class of its own.",
  modes: { dark: "Obsidian Velvet Noir", light: "Luminous Ivory" },
  /** Why a role is overridden (the roles theme.css sets). */
  roles: {
    "surface-0": "Obsidian: the page, near-black with a blue cast.",
    "surface-1": "Panels and cards on the page.",
    "surface-2": "Raised surfaces: inputs, menus, a card's footer.",
    "surface-3": "The highest surface: hovered rows, chips.",
    "border-default": "Card and input edges, tinted towards the obsidian.",
    accent: "Velvet violet: the primary action, the active state, links.",
    "accent-hover": "The accent under the pointer: deeper.",
    "accent-soft": "A violet wash behind an active item.",
    "accent-2": "Sensual magenta: the second stop of the signature gradient (`from-accent to-accent-2`).",
    ring: "The focus ring: a light violet that stands out on obsidian.",
    "font-display": "Outfit, for headings and figures.",
  },
  /** What each product token is for (every `--orochia-*` of theme.css is described here, or the build fails). */
  productTokens: {
    "--orochia-story-ring": "The ring around a creator's avatar when they have a story — `bg-story-ring`.",
    "--orochia-glow-accent": "A violet glow under a featured card — `shadow-glow-primary`.",
    "--orochia-glow-accent-2": "A magenta glow, for the second accent — `shadow-glow-accent`.",
  },
  typography: [
    { role: "Display", family: "Outfit", token: "--kz-font-display", use: "Headings, prices, counters — set by theme.css." },
    { role: "Body", family: "Plus Jakarta Sans", token: "--kz-font-sans", use: "Interface and reading text — loaded by the web app (next/font, in the repository); the platform default is Inter." },
    { role: "Mono", family: "JetBrains Mono", token: "--kz-font-mono", use: "Amounts aligned in tables, codes — the platform's." },
  ],
  icons: [
    { name: "OrochiaLogo", from: "@krizaka/ui", use: "The brand mark — the serpent and the flame, animated; never a placeholder icon. It stops under reduced motion." },
    { name: "@krizaka/icons", from: "@krizaka/icons", use: "Every interface icon (`<Name>Icon`, the Krizaka signature); `lucide-react` is being retired screen by screen." },
    { name: "SocialIcon", from: "@krizaka/orochia-design-system", use: "The networks a creator links from their profile." },
  ],
  rules: [
    {
      title: "Never \"live\"",
      text: "Orochia has no live streaming: no screen, badge or message says \"live\". An auction is open, a challenge takes pledges — `StatusBadge` replaced `LiveBadge` for that reason.",
      source: { label: "orochia-design-system AGENTS.md §3", url: KIT },
    },
    {
      title: "18+, checked by the server",
      text: "The date of birth is checked 18+ by the server at registration; adult ratings are veiled for visitors whose age the server has not checked; only verified creators upload.",
      source: { label: "Orochia AGENTS.md §3 (absolute invariants)", url: CONTRACT },
    },
    {
      title: "The address is the state",
      text: "Every place a person can be is a URL they can copy, share and reload: tabs, settings sections, filters, detail views. Tabs are links — never `useState` alone.",
      source: { label: "Orochia AGENTS.md §6", url: CONTRACT },
    },
    {
      title: "Quick actions where the thing is shown",
      text: "Edit a photo on the photo, a cover on the cover, a title on the title. Settings pages are for preferences.",
      source: { label: "Orochia AGENTS.md §6", url: CONTRACT },
    },
    {
      title: "Words come from the app",
      text: "Components take their words as props; every string lives in the app's messages. Destructive actions confirm with a second tap (`ConfirmButton`), never `window.confirm`.",
      source: { label: "orochia-design-system AGENTS.md §3", url: KIT },
    },
    {
      title: "Roles only, both themes",
      text: "No raw palette colour, no `light:` / `dark:`, no `[var(--…)]`: surfaces, text and accents use the roles, which change with the theme. Every hover and focus reads in both themes.",
      source: { label: "Orochia AGENTS.md §6", url: CONTRACT },
    },
  ],
  native: {
    summary: "The mobile app (Expo) takes the theme, not the components: `nativeTheme` is the @krizaka/tokens native roles with the Orochia overrides — the same values as theme.css (a test keeps them equal).",
    code: `import { nativeTheme, gradientStops } from "@krizaka/orochia-design-system/tokens";

const t = nativeTheme[colorScheme === "light" ? "light" : "dark"];
// t.surface0, t.textPrimary, t.accent, t.accent2…`,
  },
} as const;
