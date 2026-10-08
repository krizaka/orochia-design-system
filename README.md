<!-- krizaka-header -->
<div align="center">

<img src=".github/assets/orochia-logo.svg" alt="Orochia" width="132">

# Orochia Design System

**Creators get paid. Every cent, exactly once.**

The components of the Orochia applications — on Tailwind CSS v4, readable in both themes, accessible by default — with the Krizaka marks and motion from [`@krizaka/ui`](https://github.com/krizaka/krizaka-ui).

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
npm install @krizaka/orochia-design-system
```

React 18 or 19, Tailwind CSS v4. In the app's stylesheet:

```css
@import "tailwindcss";
@import "@krizaka/orochia-design-system/theme.css";
```

`theme.css` brings the Krizaka motion signature (`@krizaka/ui/motion.css`), the `dark:` / `light:` variants (a
`.theme-dark` container stays dark in both themes — players, editors), the Orochia tokens, and tells Tailwind to scan
the components shipped in the package. Every transition gets the Krizaka easing.

## Components

```tsx
import { Button, IconButton, ConfirmIconButton, Sheet, Switch, Slider, Chip, Segmented, SocialIcon, buttonClass, cx } from "@krizaka/orochia-design-system";
import { OrochiaLogo, MotionObserver, RotatingWord } from "@krizaka/orochia-design-system"; // from @krizaka/ui
```

| Component | What it is |
| :--- | :--- |
| `Button`, `buttonClass` | The one button: primary · secondary · ghost · danger, sm · md · lg, loading. `buttonClass` styles links |
| `IconButton` | Icon-only, accessible name required (`label`) |
| `ConfirmIconButton` | A destructive action confirmed by a second tap — never `window.confirm` |
| `Sheet` | Every dialog: a bottom sheet on phones, centred above; Escape, backdrop, focus in and back. Pass `closeLabel` translated |
| `Switch`, `Slider`, `Chip`, `Segmented` | Settings and choices, with their ARIA roles |
| `SocialIcon` | Line glyphs for the networks a profile links |
| `OrochiaLogo`, `KrizakaLogo` | The animated marks, re-exported from `@krizaka/ui` |

Components take their words as props: the apps translate them (`t("…")`) and pass them in.

The package entry is client-side (`"use client"`). Server components take the class helpers and tokens from the
plain entries:

```ts
import { buttonClass, cx } from "@krizaka/orochia-design-system/classes";
import { colors } from "@krizaka/orochia-design-system/tokens";
```

## Showcase

```bash
npm install
npm run dev        # every component in its states, both themes — http://localhost:3002
npm run check      # lint, type-check, tests, library build, showcase build
```

## Release

A `v*` tag publishes to npm from CI with provenance. Semantic versioning; the apps
([orochia](https://github.com/krizaka/orochia), [orochia-admin](https://github.com/krizaka/orochia-admin)) depend on
a caret range and never keep a copy of a component.

---

Apache-2.0 · Part of [Krizaka](https://www.krizaka.com) — open source, closed to compromise.
