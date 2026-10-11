# Orochia Design System — Repository Contract (agent-neutral)

> Scope of [`krizaka/orochia-design-system`](https://github.com/krizaka/orochia-design-system), published on npm as
> **`@krizaka/orochia-design-system`**. Platform rules live in the
> [Orochia contract](https://github.com/krizaka/orochia/blob/main/AGENTS.md). `CLAUDE.md` only imports this file.

## 1. What this repository is

- The **Orochia identity on the Krizaka platform** (level 2 of the platform, study §2.2):
  - `theme.css` — Obsidian Velvet Noir as overrides of the `--kz-*` roles of `@krizaka/tokens` (dark and `html.light`),
    plus the product tokens, prefixed `--orochia-*`;
  - the **composites** that carry Orochia's vocabulary (`orochiaButton`, `StatusBadge`, `SocialIcon`; `LiveBadge` is its
    deprecated 4.0 name, removed in 5.0);
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
- **Never "live"**: Orochia has no live streaming — no component, example, prop or default says "live" (an auction is
  open, a challenge takes pledges). `StatusBadge` replaced `LiveBadge` for that reason; the registry test refuses the
  word in an example.
- Every composite has a showcase entry and a test.

## 3.1 The documentation of a component is written here

krizaka.com/docs/orochia/ui (Overview, Foundations, one page per component) is **generated from this repository** at
every build of the site — the site holds no page, demo or prop table of the kit. A new or changed component comes with:

- a `components/<name>.meta.ts` (typed by `components/meta.ts`): summary, **why it exists above Krizaka UI**, status
  (`deprecated` with `since` / `use` / `removedIn`), category, when to use / not, best practices, accessibility, the
  `@krizaka/ui` primitives it is built on (`builtOn: ["ui/badge"]`), related (`ui/<name>` or a kit component), its imports;
- its named examples, `registry/examples/<name>/<example>.tsx` (≤ 40 lines, a realistic product scenario, importing
  `@krizaka/orochia-design-system` as an app does);
- a JSDoc on every prop (or, for a class function like `orochiaButton`, its variants — read from the code).

The foundations page reads `theme.css` and `@krizaka/tokens` (roles, both modes, contrasts) and `foundations.meta.ts`
(names, uses, the product rules — each quoted from the contract that states it, never invented). `npm run build:lib`
writes `registry/*.json` (git-ignored, published); `scripts/registry.test.ts` fails when an exported component has no
meta, an example is missing, a prop has no description, a reference does not resolve or a contrast falls below AA.
A deprecated component keeps its page, marked "deprecated → use X", until it is removed.

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

`npm run check` passes (lint + ratchet, type-check, tests — the registry's included —, library build and registry, publint, showcase); the showcase shows the new or changed component in its states, in both themes; its `meta.ts` and examples are written (§3.1).
