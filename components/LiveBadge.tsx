import { Badge, type BadgeProps } from "@krizaka/ui/badge";

/** The tones of a status, mapped onto the `Badge` primitive's roles. */
const TONES = {
  live: { tone: "accent", pulse: true },
  upcoming: { tone: "accent", pulse: false },
  success: { tone: "success", pulse: false },
  muted: { tone: "neutral", pulse: false },
} as const satisfies Record<string, Pick<BadgeProps, "tone" | "pulse">>;

export type LiveBadgeTone = keyof typeof TONES;

/**
 * A status pill with a dot, on `Badge` (@krizaka/ui): `live` is the accent with a pulsing dot (still under
 * prefers-reduced-motion); `upcoming` the accent, `success`, `muted`. The words come from the app (`label`).
 * State: `data-tone` (the Badge tone) and `data-status` (this tone).
 */
export function LiveBadge({ label, tone = "live", className }: { label: string; tone?: LiveBadgeTone; className?: string }) {
  const t = TONES[tone];
  return (
    <Badge tone={t.tone} pulse={t.pulse} dot data-status={tone} className={className}>
      {label}
    </Badge>
  );
}
