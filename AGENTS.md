# Orochia Design System — Repository Contract (agent-neutral)

> Scope of [`krizaka/orochia-design-system`](https://github.com/krizaka/orochia-design-system), published on npm as
> **`@krizaka/orochia-design-system`**. Platform rules live in the
> [Orochia contract](https://github.com/krizaka/orochia/blob/main/AGENTS.md). `CLAUDE.md` only imports this file.

## 1. What this repository is

- The **components of the Orochia applications** (`components/`): `Button` / `buttonClass`, `IconButton`,
  `ConfirmIconButton`, `Sheet`, `Switch`, `Slider`, `Chip`, `Segmented`, `SocialIcon`, `cx` — the kit the web app and
  the admin console import from npm. **Tokens** (`tokens/index.ts`) and the **Tailwind CSS v4 theme** (`theme.css`:
  variants, tokens, `@source` of the package).
- The **brand marks and the motion signature come from [`@krizaka/ui`](https://github.com/krizaka/krizaka-ui)**
  (re-exported, never copied).
- A **showcase** (`app/`, Next.js, port 3002) that renders every component in its states, in both themes.

## 2. Aesthetic — Obsidian Velvet Noir

- Dark-first surfaces, velvet violet → fuchsia → pink accents, glass borders; the light theme is first-class
  (every surface and text colour has its `light:` counterpart).
- WCAG AA contrast; visible focus rings; every motion stops under `prefers-reduced-motion`.

## 3. Rules

- **No app dependency**: components receive data **and words** through props (labels are translated by the apps);
  no fetching, no routing, no business rules, no i18n library.
- **Accessible by construction**: ARIA roles (switch, radiogroup, dialog), accessible names required on icon-only
  buttons, Escape / backdrop / focus return on `Sheet`.
- Destructive actions confirm with a second tap (`ConfirmIconButton`), never `window.confirm`.
- New shared UI is built here first, with a showcase entry and a test, then released and adopted by the apps.

## 4. Build & release

```bash
npm install
npm run dev          # showcase on :3002
npm run check        # lint, type-check, tests, library build, showcase build
```

A consuming app installs `@krizaka/orochia-design-system` from npm and adds
`@import "@krizaka/orochia-design-system/theme.css";` after `@import "tailwindcss";`.
A `v*` tag publishes to npm from CI with provenance.

## 5. Definition of done

`npm run check` passes; the showcase shows the new or changed component in its states, in both themes.
