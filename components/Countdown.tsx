"use client";

import React, { useSyncExternalStore } from "react";
import { cx } from "./cx";

// One clock for every countdown on the page: it ticks each second while someone listens.
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | null = null;
function subscribe(listener: () => void) {
  listeners.add(listener);
  timer ??= setInterval(() => listeners.forEach((l) => l()), 1000);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
}
const nowSecond = () => Math.floor(Date.now() / 1000) * 1000;

/** Milliseconds left until `target` (never negative), ticking every second. `skewMs` = server clock − this clock. */
export function useCountdown(target: Date | string | number, skewMs = 0): number {
  const now = useSyncExternalStore(subscribe, nowSecond, nowSecond);
  return Math.max(0, new Date(target).getTime() - (now + skewMs));
}

/** Splits a duration into days, hours, minutes and seconds. */
export function splitDuration(ms: number): { d: number; h: number; m: number; s: number } {
  const total = Math.max(0, Math.floor(ms / 1000));
  return { d: Math.floor(total / 86400), h: Math.floor((total % 86400) / 3600), m: Math.floor((total % 3600) / 60), s: total % 60 };
}

/**
 * Time left until a moment, as segments (2d 04h 13m 09s — days only when there are some) in tabular figures. Under
 * `urgentBelowMs` it turns rose and its seconds pulse (no motion under prefers-reduced-motion). Words come from the
 * app: `units` are the short unit labels. `role="timer"` without live announcements — the app announces what matters.
 */
export function Countdown({
  target,
  skewMs = 0,
  units,
  urgentBelowMs = 60_000,
  size = "md",
  label,
  className,
}: {
  target: Date | string | number;
  skewMs?: number;
  units: { d: string; h: string; m: string; s: string };
  urgentBelowMs?: number;
  size?: "sm" | "md" | "lg";
  /** Accessible name, e.g. "Ends in". */
  label: string;
  className?: string;
}) {
  const ms = useCountdown(target, skewMs);
  const { d, h, m, s } = splitDuration(ms);
  const urgent = ms > 0 && ms < urgentBelowMs;
  const parts: [number, string][] = d > 0 ? [[d, units.d], [h, units.h], [m, units.m]] : [[h, units.h], [m, units.m], [s, units.s]];
  const text = { sm: "text-sm", md: "text-xl", lg: "text-3xl sm:text-4xl" }[size];
  return (
    <span role="timer" aria-label={label} suppressHydrationWarning className={cx("inline-flex items-baseline gap-1.5 font-display font-black tabular-nums tracking-tight", text, urgent ? "text-rose-400 light:text-rose-600" : "text-white light:text-slate-900", className)}>
      {parts.map(([value, unit], i) => (
        <span key={unit} className={cx("inline-flex items-baseline", urgent && i === parts.length - 1 && "motion-safe:animate-pulse")}>
          {String(value).padStart(2, "0")}
          <span className="ml-0.5 text-[0.5em] font-bold uppercase text-zinc-400 light:text-slate-500">{unit}</span>
        </span>
      ))}
    </span>
  );
}
