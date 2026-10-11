import type { ComponentMeta } from "./meta";

export const meta = {
  title: "Sensual button",
  summary: "Orochia's signature call to action: the velvet → magenta gradient with the sheen, as a variant of the Krizaka button.",
  why: "The @krizaka/ui `Button` has the platform's variants (primary, secondary, outline, ghost, danger). Orochia's money moments — a tip, a subscription, a bid — wear the brand gradient. `orochiaButton` extends `buttonVariants` with one variant, `sensual`, and keeps every other variant, size and shape of the primitive: extended, never copied.",
  status: "stable",
  category: "actions",
  platforms: "web",
  builtOn: ["ui/button"],
  whenToUse: [
    "The one action of a screen that pays a creator: send a tip, subscribe, place a bid, back a challenge.",
    "The main call to action of a marketing block (become a creator).",
    "On a link styled as a button: `buttonVariants`-style classes on `Button asChild`.",
  ],
  whenNotToUse: [
    { when: "For a second action next to it (cancel, details): one sensual button per view.", use: "ui/button" },
    { when: "For a destructive action (delete, withdraw).", use: "ui/confirm-button" },
    { when: "For an icon-only action.", use: "ui/button" },
  ],
  bestPractices: [
    "One per view: the gradient says \"this is the money moment\" — two of them say nothing.",
    "Say the amount in the label when there is one: `Tip $5`, `Bid $120`.",
    "`shape: \"pill\"` and `size: \"lg\"` for a primary call to action; the default shape on a dense card.",
    "Server components take `orochiaButton` from `@krizaka/orochia-design-system/classes` (no client code).",
  ],
  accessibility: {
    keyboard: [],
    notes: [
      "The primitive's: a native `<button>` (or the child with `asChild`), its focus ring, `loading` sets `aria-busy`.",
      "White text on the gradient reads at WCAG AA in both themes (4.6:1 on the magenta stop, tested).",
      "The sheen stops under `prefers-reduced-motion`.",
    ],
  },
  related: ["status-badge", "ui/button", "ui/confirm-button"],
  web: {
    imports: ["orochiaButton"],
    entry: "classes",
    variants: "orochiaButton",
    examples: [
      { name: "tip", title: "Send a tip", description: "The money moment of a video page: the amount in the label, a pill." },
      { name: "subscribe", title: "Subscribe to a creator", description: "Large, on a profile header, next to a quiet secondary action." },
      { name: "place-bid", title: "Place a bid", description: "In an auction panel, with its pending state while the bid is escrowed." },
    ],
  },
} satisfies ComponentMeta;
