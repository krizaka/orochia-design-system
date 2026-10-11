import { SocialIcon } from "@krizaka/orochia-design-system";

// A network without a glyph of its own: the website globe, never an empty space.
export default function Fallback() {
  return (
    <a href="https://elena.studio/" className="inline-flex items-center gap-2 text-sm text-fg-secondary hover:text-fg">
      <SocialIcon network="mastodon" />
      elena.studio
    </a>
  );
}
