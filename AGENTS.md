# 🎨 OROCHIA DESIGN SYSTEM — UX Craft & Governance

> Design contract and component library governance for **`orochia-design-system`**, the official Obsidian Velvet Noir & Cyber-Sensual Luxury design system of the Orochia and Krizaka creator ecosystem.

---

## 1. Aesthetic Identity & Krizaka Craft

- **Theme Identity**: *Obsidian Velvet Noir & Cyber-Sensual Luxury*.
- **Foundations**:
  - Obsidian surfaces (`#030406` deep canvas, `#060709` base, `#0c0e14` elevated surface, `#121520` cards).
  - Velvet & sensual neons (`#8b5cf6` velvet primary, `#ec4899` sensual magenta, `#f43f5e` DMCA/passion rose, `#f59e0b` sanctuary amber, `#10b981` mint emerald).
  - Micro-interactions, spring transitions, soft neon drop shadows (`shadow-violet-600/30`), subtle glassmorphism borders (`rgba(255, 255, 255, 0.08)`).
- **Core Package**: `@krizaka/orochia-design-system`

---

## 2. Directory Structure

```
products/orochia-design-system/
├── tokens/
│   └── index.ts          # Color scales, gradients, shadows, radii, typography
├── components/
│   ├── Button.tsx        # High-conversion interactive CTA with loading & neon glow
│   ├── Badge.tsx         # Semantic pill tags with pulsing dot status indicators
│   ├── StatCard.tsx      # Executive metric card with gradient badge & trend indicators
│   ├── ComplianceBadge.tsx # 18 U.S.C. § 2257 federal audit indicators
│   ├── TokenInput.tsx    # Tip amount input with 1-click preset chips & rake splits
│   ├── VideoCard.tsx     # 4K UHD stream card with duration, creator KYC & paywalls
│   ├── AgeGateModal.tsx  # 18+ adult consent verification gate
│   └── index.ts          # Consolidated component export
├── app/                  # Interactive documentation & live playground (Port 3002)
└── package.json
```

---

## 3. Local Development

```bash
# Install dependencies
npm install

# Run the interactive showcase on port 3002
npm run dev -- -p 3002
```
