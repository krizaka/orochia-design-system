<div align="center">

# 🎨 OROCHIA DESIGN SYSTEM
### Obsidian Velvet Noir & Cyber-Sensual Luxury — Krizaka UX Craft

[![CI](https://github.com/krizaka/orochia-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/krizaka/orochia-design-system/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14_App_Router-black?logo=next.js)](https://nextjs.org/)
[![Showcase Port](https://img.shields.io/badge/Showcase_Port-3002-pink)](http://localhost:3002)

The official UI component library, design tokens, and aesthetic foundation for [**Orochia**](https://github.com/krizaka/orochia) and [**Orochia Admin**](https://github.com/krizaka/orochia-admin), engineered by **Krizaka**.

[Consumer App](https://github.com/krizaka/orochia) • [Admin Control Plane](https://github.com/krizaka/orochia-admin) • [Aesthetic Contract](AGENTS.md)

</div>

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
