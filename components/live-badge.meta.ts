import type { ComponentMeta } from "./meta";

export const meta = {
  title: "Live badge",
  summary: "The 4.0 name of the status badge — same look, the tone `live` read as `active`.",
  why: "Kept so that apps written against 4.0 keep building. Orochia has no live streaming and never says \"live\": the component and its tone were renamed.",
  status: "deprecated",
  deprecated: { since: "4.1.0", use: "status-badge", removedIn: "5.0.0" },
  category: "data-display",
  platforms: "web",
  builtOn: ["ui/badge"],
  whenToUse: ["Never in new code: write `StatusBadge` (`tone=\"live\"` becomes `tone=\"active\"`; the other tones are the same)."],
  whenNotToUse: [{ when: "Anywhere: it is deprecated.", use: "status-badge" }],
  bestPractices: ["Migrate with a search: `LiveBadge` → `StatusBadge`, `tone=\"live\"` → `tone=\"active\"` (or drop it: `active` is the default)."],
  accessibility: { keyboard: [], notes: ["The same as `StatusBadge`: it renders one."] },
  related: ["status-badge"],
  web: { imports: ["LiveBadge"], examples: [] },
} satisfies ComponentMeta;
