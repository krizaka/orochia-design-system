# Orochia Design System — Repository Contract (agent-neutral)

> Scope of [`krizaka/orochia-design-system`](https://github.com/krizaka/orochia-design-system), published on npm as
> **`@krizaka/orochia-design-system`**. Platform rules live in the
> [Orochia contract](https://github.com/krizaka/orochia/blob/main/AGENTS.md). `CLAUDE.md` only imports this file.

## 1. What this repository is

- The **Orochia identity on the Krizaka platform** (level 2 of the platform, study §2.2):
  - `theme.css` — Obsidian Velvet Noir as overrides of the `--kz-*` roles of `@krizaka/tokens` (dark and `html.light`),
    plus the product tokens, prefixed `--orochia-*`;
  - the **composites** that carry Orochia's vocabulary (`orochiaButton`, `LiveBadge`, `SocialIcon`);
  - `tokens/` — brand values (illustrations, native) and `nativeTheme` (the same theme by role, for React Native).
- The **primitives come from [`@krizaka/ui`](https://github.com/krizaka/krizaka-ui)**: only `Button`, `IconButton`,
  `buttonVariants`, `cn`, the marks and the motion are still re-exported. Since 4.0 the kit holds no primitive of its
  own (`Chip`, `Segmented`, `Switch`, `Slider`, `Sheet`, `ConfirmIconButton`, `Countdown`, `buttonClass`, `cx` were
  removed: the CHANGELOG gives each replacement).
- A **showcase** (`app/`, Next.js, port 3002): the identity block and every component, in both themes.

## 2. Aesthetic — Obsidian Velvet Noir

- Dark-first obsidian surfaces, velvet accent, sensual magenta second accent, Outfit display face; the light theme
  (Luminous Ivory) is first-class. A theme is a set of token **values**, never a set of classes.
- WCAG AA contrast, tested in `tokens/theme.test.ts`; visible focus rings (`ring-ring`); every motion stops under
  `prefers-reduced-motion`.

## 3. Rules

- **No primitive here.** A missing or insufficient primitive is a pull request in `krizaka-ui` (change, changeset,
  release), then adopted here — never a local copy or fork. In order: a token (`theme.css`), a variant (`tv({ extend })`)
  or a `className`, a composite that **composes** primitives.
- **Roles only**: no raw palette colour, no `light:` / `dark:`, no `[var(--…)]`, no template string in `className`
  (`@krizaka/config` lint, `lint-ratchet.json` at zero). `theme.css` and `nativeTheme` hold the same values (tested).
- **No app dependency**: components receive data **and words** through props; no fetching, no routing, no i18n.
- Destructive actions confirm with a second tap, never `window.confirm`.
- Every composite has a showcase entry and a test.

## 4. Build & release

```bash
npm install
npm run dev          # showcase on :3002
npm run check        # lint, type-check, tests, library build, showcase build
```

A consuming app imports `tailwindcss`, `@krizaka/tailwind`, `@krizaka/ui/tailwind.css`, then
`@krizaka/orochia-design-system/theme.css` (see the head of `theme.css`).
A `v*` tag publishes to npm from CI with provenance.

## 5. Definition of done

`npm run check` passes (lint + ratchet, type-check, tests, library build, publint, showcase); the showcase shows the new or changed component in its states, in both themes.
