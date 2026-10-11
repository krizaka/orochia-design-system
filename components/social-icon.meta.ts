import type { ComponentMeta } from "./meta";

export const meta = {
  title: "Social icon",
  summary: "A line glyph for the networks a creator links from their profile: Instagram, X, Facebook, TikTok, YouTube, Telegram, a website.",
  why: "Brand glyphs are not in @krizaka/icons (the Krizaka signature set draws Krizaka's own concepts) and lucide no longer ships them. A creator's profile links to their other networks: this kit draws them once, in the same line weight as the interface, in `currentColor`.",
  status: "stable",
  category: "data-display",
  platforms: "web",
  builtOn: [],
  whenToUse: [
    "On a profile header, the links a creator added to their other networks.",
    "In the profile settings, next to each link field.",
  ],
  whenNotToUse: [
    { when: "For an interface icon (upload, settings, search): use @krizaka/icons." },
    { when: "As a share or sign-in button of the network itself: the network's own button rules apply." },
  ],
  bestPractices: [
    "Always inside a link that names the network (`aria-label`): the glyph is decorative.",
    "Size and colour through `className` (`h-5 w-5 text-fg-secondary`, `hover:text-fg`).",
    "Pass the network as stored: an unknown one draws the website globe instead of nothing.",
  ],
  accessibility: {
    keyboard: [],
    notes: ["`aria-hidden`: the link around it carries the accessible name.", "Strokes `currentColor`: it follows the text role, in both themes."],
  },
  related: ["ui/button"],
  web: {
    imports: ["SocialIcon"],
    examples: [
      { name: "profile-links", title: "A creator's links", description: "The row of networks on a profile header, each one a named link." },
      { name: "fallback", title: "An unknown network", description: "A network without a glyph of its own draws the website globe." },
    ],
  },
} satisfies ComponentMeta;
