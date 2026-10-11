import type { ComponentMeta } from "./meta";

export const meta = {
  title: "Status badge",
  summary: "The state of an auction, a challenge or a drop: a pill with a dot that pulses while something is moving.",
  why: "Orochia's money moves through states — an auction opens and closes, a challenge takes pledges, gets funded, is delivered. `Badge` from @krizaka/ui knows tones, not states: this badge maps each state to one tone and one motion, so the same moment reads the same on every screen. It also carries the product's vocabulary rule: Orochia has no live streaming, so nothing is ever \"live\" — what moves is `active`.",
  status: "stable",
  category: "data-display",
  platforms: "web",
  builtOn: ["ui/badge"],
  whenToUse: [
    "On an auction card or panel: `active` while bids are taken, `muted` once it is over.",
    "On a challenge: `active` while it takes pledges or is in progress, `upcoming` while it closes, `success` once funded or delivered.",
    "On a drop or a scheduled release: `upcoming` until it opens.",
  ],
  whenNotToUse: [
    { when: "For a plain label without a state (a category, a quality, a duration on a media).", use: "ui/badge" },
    { when: "For a filter the user can pick.", use: "ui/chip" },
    { when: "For the time left before the end: show the countdown itself.", use: "ui/countdown" },
  ],
  bestPractices: [
    "Never write \"live\" in the label: Orochia has no live streaming. Say what is happening — `Open`, `Taking pledges`, `Ends soon`.",
    "One state per item: a card carries one status badge, placed in a corner of its media (`className=\"absolute top-3 left-3\"`).",
    "Pulse is for what moves now (`active`) — a page where every badge pulses says nothing.",
    "The words come from the app's messages: the badge takes `label`, it never translates.",
  ],
  accessibility: {
    keyboard: [],
    notes: [
      "A plain `<span>`: its label is read with the content around it; the dot is decorative.",
      "The colour is never the only signal: the label says the state.",
      "The pulse stops under `prefers-reduced-motion`.",
      "`data-status` carries the tone for styles and tests.",
    ],
  },
  related: ["orochia-button", "ui/badge", "ui/countdown"],
  web: {
    imports: ["StatusBadge"],
    examples: [
      { name: "auction-open", title: "An open auction", description: "`active`: bids are being taken — the accent, the dot pulses." },
      { name: "challenge-stages", title: "A challenge, stage by stage", description: "The four tones on the stages of a challenge: taking pledges, closing, funded, ended." },
      { name: "on-a-card", title: "On a media card", description: "Placed in the corner of a cover, over a dark veil — the badge reads on the image in both themes." },
    ],
  },
} satisfies ComponentMeta;
