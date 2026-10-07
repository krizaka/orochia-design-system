# Orochia Design System — Repository Contract (agent-neutral)

> Scope of [`krizaka/orochia-design-system`](https://github.com/krizaka/orochia-design-system), published as
> **`@krizaka/orochia-design-system`** on GitHub Packages. Platform rules live in the
> [Orochia contract](https://github.com/krizaka/orochia/blob/main/AGENTS.md). `CLAUDE.md` only imports this file.

## 1. What this repository is

- **Tokens** (`tokens/index.ts`) and **React components** (`components/`) shared by the Orochia applications,
  plus a **Tailwind preset** (`tailwind-preset.cjs`) carrying the palette, fonts and glows.
- A **showcase** (`app/`, Next.js, port 3002) that renders every component in its states.
- Components: `OrochiaLogo` (animated mark), `Button`, `Badge`, `StatCard`, `ComplianceBadge`, `TokenInput`,
  `VideoCard`, `AgeGateModal`, `Field` + `Input` / `Select` / `Textarea`, `Tabs`, `Modal`, `EmptyState`, `Avatar`.

## 2. Aesthetic — Obsidian Velvet Noir

- Dark-first surfaces (`#060709` → `#121520`), velvet violet → fuchsia → pink accents, glass borders
  (`rgba(255,255,255,.08)`), Outfit for display, Inter / Plus Jakarta Sans for text, JetBrains Mono for figures.
- WCAG AA contrast; visible focus rings; every motion (logo orbit, scales, pulses, spinners) stops under
  `prefers-reduced-motion`.

## 3. Rules

- **No app dependency**: components receive data through props; no fetching, no routing, no business rules.
- **Accessible by construction**: `Field` wires label / hint / error (`aria-describedby`, `aria-invalid`), `Tabs`
  follow the WAI-ARIA tablist pattern (arrow keys), `Modal` is a labelled dialog that moves focus in and back.
- The `OrochiaLogo` here is the reference: the copies in the apps must stay identical.
- New shared UI is built here first, with a showcase entry and a test, then adopted by the apps.

## 4. Build & publish

```bash
npm install
npm run dev          # showcase on :3002
npm test             # render tests (Vitest)
npm run build:lib    # dist/: ESM + CJS + types, every module marked "use client"
```

A consuming app installs `@krizaka/orochia-design-system` from GitHub Packages and adds
`presets: [require("@krizaka/orochia-design-system/tailwind-preset")]` plus
`./node_modules/@krizaka/orochia-design-system/dist/**/*.js` to its Tailwind `content`.
Publishing happens in CI on a `v*` tag (`npm version` from the tag, `npm publish`).

## 5. Definition of done

`npm run lint`, `npm run typecheck`, `npm test`, `npm run build` and `npm run build:lib` pass; the showcase shows
the new or changed component in its states.
