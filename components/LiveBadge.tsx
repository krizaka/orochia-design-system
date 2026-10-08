import React from "react";
import { cx } from "./cx";

const TONES = {
  live: { dot: "bg-rose-500", ring: "bg-rose-500/60", pill: "border-rose-500/40 bg-rose-500/15 text-rose-200 light:text-rose-700" },
  upcoming: { dot: "bg-violet-400", ring: "bg-violet-400/60", pill: "border-violet-500/40 bg-violet-500/15 text-violet-100 light:text-violet-800" },
  success: { dot: "bg-emerald-400", ring: "", pill: "border-emerald-500/40 bg-emerald-500/15 text-emerald-200 light:text-emerald-700" },
  muted: { dot: "bg-zinc-400", ring: "", pill: "border-white/15 bg-white/5 text-zinc-300 light:border-black/10 light:bg-black/5 light:text-slate-600" },
} as const;

/**
 * A status pill with a dot — "Live" pulses (the ring stops under prefers-reduced-motion). Readable on pictures:
 * the pill is opaque enough for a thumbnail behind it.
 */
export function LiveBadge({ label, tone = "live", className }: { label: string; tone?: keyof typeof TONES; className?: string }) {
  const t = TONES[tone];
  return (
    <span className={cx("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md", t.pill, className)}>
      <span className="relative flex h-1.5 w-1.5">
        {t.ring && <span className={cx("absolute inline-flex h-full w-full rounded-full motion-safe:animate-ping", t.ring)} />}
        <span className={cx("relative inline-flex h-1.5 w-1.5 rounded-full", t.dot)} />
      </span>
      {label}
    </span>
  );
}
