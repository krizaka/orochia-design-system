<!-- krizaka-header -->
<div align="center">

<img src=".github/assets/orochia-logo.svg" alt="Orochia" width="132">

# Orochia Design System

**Creators get paid. Every cent, exactly once.**

Tokens and React components shared by the Orochia applications (dark-first, WCAG AA), including the animated Orochia mark.

[![CI](https://github.com/krizaka/orochia-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/krizaka/orochia-design-system/actions/workflows/ci.yml)
[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Orochia](https://img.shields.io/badge/part%20of-Orochia-d946ef)](https://www.krizaka.com/en/products/orochia#guarantees)
[![Docs](https://img.shields.io/badge/docs-krizaka.com-6366f1)](https://www.krizaka.com/en/products/orochia)

[Documentation](https://www.krizaka.com/en/products/orochia) · [Website](https://www.krizaka.com) · [Krizaka on GitHub](https://github.com/krizaka)

</div>
<!-- /krizaka-header -->

## Install

```bash
npm install @krizaka/orochia-design-system --registry=https://npm.pkg.github.com
```

```js
// tailwind.config.js
module.exports = {
  presets: [require("@krizaka/orochia-design-system/tailwind-preset")],
  content: ["./app/**/*.{ts,tsx}", "./node_modules/@krizaka/orochia-design-system/dist/**/*.js"],
};
```

```tsx
import { OrochiaLogo, Button, Field, Input, Tabs, Modal } from "@krizaka/orochia-design-system";
import { colors } from "@krizaka/orochia-design-system/tokens";
```

## Components

| Component | Purpose |
| :--- | :--- |
| `OrochiaLogo` | The animated mark (serpent + flame); crops to the serpent below 48 px; `animated={false}` for stills |
| `Button` | primary · secondary · outline · danger · ghost, with a loading state |
| `Badge`, `ComplianceBadge` | status pills, 18 U.S.C. § 2257 states |
| `Field` + `Input` · `Select` · `Textarea` | labelled controls with hint / error wired for assistive technology |
| `Tabs` | WAI-ARIA tablist, arrow-key navigation |
| `Modal` | labelled dialog; Escape and backdrop close it; focus returns |
| `EmptyState`, `Avatar`, `StatCard`, `TokenInput`, `VideoCard`, `AgeGateModal` | the rest of the app vocabulary |

## Develop

```bash
npm install
npm run dev          # showcase on http://localhost:3002
npm test             # render tests
npm run build:lib    # the published package (dist/)
```

Rules for this repository: [AGENTS.md](AGENTS.md).

---


## 🖤 Aesthetic Identity & Foundations

The Orochia visual language balances **Obsidian Velvet Noir** depth with **Cyber-Sensual Luxury** accents:
- **Obsidian Surfaces**: Deep obsidian `#030406` base canvas with layered surfaces (`#0c0e14`, `#121520`) and frosted glass dividers (`rgba(255, 255, 255, 0.08)`).
- **Sensual Velvet Neons**: High-saturation accents in Velvet Violet (`#8b5cf6`), Sensual Magenta (`#ec4899`), Passion Rose (`#f43f5e`), Sanctuary Amber (`#f59e0b`), and Mint Emerald (`#10b981`).
- **Tactile Micro-Interactions**: Spring hover states, glow bloom drop-shadows, and smooth micro-animations.

---

## 📦 Component Library

```tsx
import { 
  Button, 
  Badge, 
  VideoCard, 
  TokenInput, 
  ComplianceBadge, 
  StatCard, 
  AgeGateModal 
} from "@krizaka/orochia-design-system";

// 1. Velvet Glow Call-To-Action
<Button variant="primary" size="lg">Unlock 4K Stream</Button>

// 2. 18 U.S.C. § 2257 Federal Custodian Badge
<ComplianceBadge status="VERIFIED" />

// 3. Tip Token Stepper with 10% auto-split
<TokenInput value={25} onChange={(val) => setTip(val)} />

// 4. 4K UHD Video Stream Card with Paywall
<VideoCard
  id="vid-101"
  title="Midnight Atelier Sessions (Episode 1)"
  creatorName="Elena Vox"
  creatorHandle="elena"
  thumbnailUrl="/thumbnails/elena-ep1.jpg"
  is4K={true}
  isLocked={true}
  price={15}
/>
```

---

## 🚀 Interactive Showcase & Playground

```bash
# Clone repository
git clone https://github.com/krizaka/orochia-design-system.git
cd orochia-design-system

# Install dependencies
npm install

# Launch interactive component playground
npm run dev -- -p 3002
```

Browse the live catalog and token inspector at [http://localhost:3002](http://localhost:3002).
