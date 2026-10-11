import { Badge, type BadgeProps } from "@krizaka/ui/badge";

/** The tones of a status, mapped onto the `Badge` primitive's roles. */
const TONES = {
  active: { tone: "accent", pulse: true },
  upcoming: { tone: "accent", pulse: false },
  success: { tone: "success", pulse: false },
  muted: { tone: "neutral", pulse: false },
} as const satisfies Record<string, Pick<BadgeProps, "tone" | "pulse">>;

export type StatusBadgeTone = keyof typeof TONES;

/** Props of {@link StatusBadge}. */
export interface StatusBadgeProps {
  /** The words of the status, in the app's language: `Open`, `Funded`, `Ends in 2 h`. Never "live" — Orochia has no live streaming. */
  label: string;
  /**
   * `active`: something moving now (an open auction, a challenge taking pledges) — the accent with a pulsing dot (still
   * under `prefers-reduced-motion`); `upcoming`: about to move, the accent without the pulse; `success`: settled well
   * (sold, funded, delivered); `muted`: over.
   */
  tone?: StatusBadgeTone;
  /** Extra classes, merged last (placement on a card: `absolute top-3 left-3`). */
  className?: string;
}

/**
 * The status of an auction, a challenge or a drop, as a pill with a dot, on `Badge` (@krizaka/ui). The words come from
 * the app (`label`). State: `data-tone` (the Badge tone) and `data-status` (this tone).
 */
export function StatusBadge({ label, tone = "active", className }: StatusBadgeProps) {
  const t = TONES[tone];
  return (
    <Badge tone={t.tone} pulse={t.pulse} dot data-status={tone} className={className}>
      {label}
    </Badge>
  );
}

/** @deprecated Since 4.1 — `StatusBadgeTone`; the tone `live` is `active`. Removed in 5.0. */
export type LiveBadgeTone = StatusBadgeTone | "live";

/** @deprecated Since 4.1 — `StatusBadgeProps`. */
export interface LiveBadgeProps extends Omit<StatusBadgeProps, "tone"> {
  /** The tone; `live` (the default) is read as `active`. */
  tone?: LiveBadgeTone;
}

/**
 * @deprecated Since 4.1 — use `StatusBadge`: Orochia never says "live" (it has no live streaming), so the badge and its
 * tone `live` were renamed (`live` → `active`). Same look, same props otherwise. Removed in 5.0.
 */
export function LiveBadge({ label, tone = "live", className }: LiveBadgeProps) {
  return <StatusBadge label={label} tone={tone === "live" ? "active" : tone} className={className} />;
}
