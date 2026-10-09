<!-- krizaka-header -->
<div align="center">

<img src=".github/assets/orochia-logo.svg" alt="Orochia" width="132">

# Orochia Design System

**Creators get paid. Every cent, exactly once.**

The Orochia identity on the Krizaka platform — the Obsidian Velvet Noir theme as `--kz-*` token overrides, and the product composites. The primitives come from [`@krizaka/ui`](https://github.com/krizaka/krizaka-ui).

[![npm](https://img.shields.io/npm/v/@krizaka/orochia-design-system?color=d946ef&label=npm)](https://www.npmjs.com/package/@krizaka/orochia-design-system)
[![CI](https://github.com/krizaka/orochia-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/krizaka/orochia-design-system/actions/workflows/ci.yml)
[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Orochia](https://img.shields.io/badge/part%20of-Orochia-d946ef)](https://www.krizaka.com/en/products/orochia#guarantees)
[![Docs](https://img.shields.io/badge/docs-krizaka.com-6366f1)](https://www.krizaka.com/en/products/orochia)

[Documentation](https://www.krizaka.com/en/products/orochia) · [Website](https://www.krizaka.com) · [Krizaka on GitHub](https://github.com/krizaka)

</div>
<!-- /krizaka-header -->

## Install

```bash
npm install @krizaka/orochia-design-system @krizaka/ui && npm install -D tailwindcss @krizaka/tailwind
```

React 19, Tailwind CSS v4. The app's global stylesheet, in this order:

```css
@import "tailwindcss";
@import "@krizaka/tailwind";                         /* tokens, role utilities, variants, motion */
@import "@krizaka/ui/tailwind.css";                  /* the @krizaka/ui primitives */
@import "@krizaka/orochia-design-system/theme.css";  /* the Orochia identity */
```

## What this kit contains — and no longer contains

| | Contents |
| :--- | :--- |
| **Theme** | `theme.css`: the `--kz-*` roles with the Orochia values (obsidian surfaces, velvet accent, magenta `accent-2`, Outfit display face), dark and `html.light` (Luminous Ivory); `--orochia-story-ring` (`bg-story-ring`), `shadow-glow-primary` / `shadow-glow-accent`. |
| **Composites** | `orochiaButton` (`buttonVariants` + `variant: "sensual"`, the gradient call to action) · `LiveBadge` (on `Badge`) · `SocialIcon`. |
| **Tokens** | `colors`, `gradients`, `gradientStops`… — brand values for illustrations, e-mails and native; `nativeTheme` (the @krizaka/tokens native roles with the Orochia overrides). |
| **Re-exported from `@krizaka/ui`** | `Button`, `IconButton`, `buttonVariants`, `Countdown`, `useCountdown`, `splitDuration`, `cn`, the marks and the motion. Import them from `@krizaka/ui` in new code. |
| **Deprecated** | `buttonClass` → `buttonVariants` · `cx` → `cn` · `themes` → `nativeTheme` · `Chip`, `Segmented`, `Switch`, `Slider`, `Sheet`, `ConfirmIconButton` — tokenized, kept until their `@krizaka/ui` primitive ships (`chip`, `tabs`, `switch`, `slider`, `dialog`, `confirm-button`). |
| **No longer here** | No palette (`bg-obsidian`, `text-velvet`… are now `bg-surface-0`, `text-accent`), no `light:` / `dark:` variants (from `@krizaka/tailwind`), no primitive of its own. |

```tsx
import { Button } from "@krizaka/ui/button";
import { orochiaButton, LiveBadge } from "@krizaka/orochia-design-system";

<Button asChild className={orochiaButton({ variant: "sensual", size: "lg", shape: "pill" })}>
  <Link href="/become-creator">{t("home.cta")}</Link>
</Button>
<LiveBadge label={t("auction.ending")} tone="upcoming" />
```

Components take their words as props: the apps translate them and pass them in. The package entry is client-side
(`"use client"`); server components take `buttonVariants`, `orochiaButton` and `cn` from
`@krizaka/orochia-design-system/classes`, the tokens from `/tokens`.

**Native apps** ([orochia-mobile](https://github.com/krizaka/orochia-mobile)) take only the tokens:

```ts
import { nativeTheme, gradientStops } from "@krizaka/orochia-design-system/tokens";
const t = nativeTheme[colorScheme === "light" ? "light" : "dark"]; // t.surface0, t.textPrimary, t.accent…
```

## Showcase

```bash
npm install
npm run dev        # the identity and every component, both themes — http://localhost:3002
npm run check      # lint (+ krizaka-ratchet), type-check, tests, library build, publint, showcase build
```

## Release

A `v*` tag publishes to npm from CI with provenance. Semantic versioning; the apps
([orochia](https://github.com/krizaka/orochia), [orochia-admin](https://github.com/krizaka/orochia-admin), [orochia-mobile](https://github.com/krizaka/orochia-mobile)) depend on
a caret range and never keep a copy of a component.

---

Apache-2.0 · Part of [Krizaka](https://www.krizaka.com) — open source, closed to compromise.
