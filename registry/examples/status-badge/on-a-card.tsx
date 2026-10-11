import { StatusBadge } from "@krizaka/orochia-design-system";

// In the corner of a cover: the badge keeps its tone on the media, in both themes.
export default function OnACard() {
  return (
    <div className="relative h-40 w-64 overflow-hidden rounded-xl bg-media">
      <StatusBadge label="Ends soon" tone="upcoming" className="absolute top-3 left-3" />
      <p className="absolute right-3 bottom-3 left-3 text-sm font-semibold text-fg-on-media">Golden hour session — signed print</p>
    </div>
  );
}
