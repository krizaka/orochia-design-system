# Changelog

All notable changes to `@krizaka/orochia-design-system`. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versions: [Semantic Versioning](https://semver.org/).

## [4.0.0] — 2026-10-09

The kit is the Orochia identity only: `theme.css`, the tokens (`nativeTheme`), `orochiaButton`, `LiveBadge`,
`SocialIcon`. The components deprecated in 3.0 are removed — their `@krizaka/ui` primitives shipped in 2.0.0-beta.2.

### Removed

| Export | Replacement |
| :-- | :-- |
| `Chip` | `Chip` from `@krizaka/ui/chip` (`selected` / `onSelectedChange`; `Chip.Group type="single"` for one choice among pills) |
| `Segmented` | `Tabs` from `@krizaka/ui/tabs` with `variant="segmented"` for a view; `Chip.Group type="single" required` for a filter or a form choice |
| `Switch` | `Switch` from `@krizaka/ui/switch` (`onChange` → `onCheckedChange`) |
| `Slider` | `Slider` from `@krizaka/ui/slider` (`onChange` → `onValueChange`, `display` → `formatValue` + `showLabel`, centred fill → `origin`, `reset` → `onDoubleClick`) |
| `Sheet` | `Sheet` (= `Dialog.Content placement="bottom"`) inside `Dialog.Root` from `@krizaka/ui/dialog` |
| `ConfirmIconButton` | `ConfirmButton` from `@krizaka/ui/confirm-button` (`size="sm"` for the icon size) |
| `Countdown`, `useCountdown`, `splitDuration`, `CountdownProps`, `CountdownUnits` | the same, from `@krizaka/ui/countdown` |
| `buttonClass`, `ButtonVariant`, `ButtonSize` | `buttonVariants({ variant, size, shape })` from `@krizaka/ui/button` (`round` → `shape="pill"`), `orochiaButton({ variant: "sensual" })` for the gradient |
| `cx` | `cn` (from `@krizaka/ui/cn`, still re-exported here) |

### Changed

- Depends on `@krizaka/ui` / `@krizaka/tokens` `^2.0.0-beta.2`; peer `@krizaka/tailwind >= 2.0.0-beta.2`.
- The showcase shows the `@krizaka/ui` choices, sheet and confirm button under the Orochia theme.

## [3.0.0] — 2026-10-09

The kit becomes a theme and a set of composites on the Krizaka platform (`@krizaka/tokens`, `@krizaka/tailwind`,
`@krizaka/ui` 2). No export is removed: every primitive is re-exported or deprecated.

### Changed

- `theme.css` is the Obsidian Velvet Noir identity expressed as `--kz-*` role overrides (dark on `:root, .theme-dark`,
  Luminous Ivory on `html.light`) plus `--orochia-story-ring` (`bg-story-ring`). The app now imports, in order:
  `tailwindcss` → `@krizaka/tailwind` → `@krizaka/ui/tailwind.css` → this `theme.css`.
- Accents chosen for WCAG AA (tested): `--kz-accent` velvet `#7c3aed` (white text 5.7:1) and `--kz-accent-2` magenta
  `#db2777` (4.6:1) in both themes — `#8b5cf6` / `#ec4899` stay brand values in `colors`.
- `Button`, `IconButton` are the `@krizaka/ui/button` primitives: `round` → `shape="pill"`, `icon` → a child,
  `loading` no longer draws a spinner, new `outline` variant and `asChild`. `primary` is the solid accent; the
  gradient is `orochiaButton({ variant: "sensual" })`.
- `Countdown`, `useCountdown`, `splitDuration` are re-exported from `@krizaka/ui/countdown` (same API; urgent uses the
  `danger` role).
- `LiveBadge` is rewritten on `Badge` (`live` = accent tone, dot, pulse; `upcoming` accent; `success`; `muted` neutral).
- `Chip`, `Segmented`, `Switch`, `Slider`, `Sheet`, `ConfirmIconButton` are tokenized: roles only, no raw palette, no
  `light:`, focus ring `ring-ring`; state exposed in `data-*`.
- Peer dependencies: React ≥ 19 (the primitives take `ref` as a prop), `@krizaka/tailwind`, `tailwindcss` ^4.1.
- Lint: `@krizaka/config` (Next + the four UI rules, strict) and `krizaka-ratchet` at zero.

### Added

- `orochiaButton` (`tv({ extend: buttonVariants })` + `variant: "sensual"`), `cn`, `buttonVariants` and the
  primitive types, re-exported from the root and `/classes`.
- `nativeTheme`: the `@krizaka/tokens/native` themes with the Orochia overrides (an override, not a copy).

### Deprecated

- `buttonClass` (warns once in development) → `buttonVariants` from `@krizaka/ui/button`.
- `cx` → `cn` from `@krizaka/ui/cn`.
- `themes`, `ThemeColors` (2.x key names, now derived from `nativeTheme`) → `nativeTheme`.
- `Chip` → `@krizaka/ui/chip`, `Segmented` → `@krizaka/ui/tabs`, `Switch` → `@krizaka/ui/switch`, `Slider` →
  `@krizaka/ui/slider`, `Sheet` → `@krizaka/ui/dialog`, `ConfirmIconButton` → `@krizaka/ui/confirm-button`.

### Removed

- From `theme.css`: the palette utilities (`--color-obsidian*`, `--color-velvet`, `--color-sensual`, `--color-flame`
  → use the roles), the `dark:` / `light:` custom variants (now in `@krizaka/tailwind`) and the import of
  `@krizaka/ui/motion.css` (brought by the preset).
