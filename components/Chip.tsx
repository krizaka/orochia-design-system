"use client";

import React from "react";

import { cn } from "./cx";

/**
 * A toggleable pill (speed, options): pressed state announced, readable in both themes. State: `data-state`.
 * @deprecated Since 3.0 — moves to `Chip` from `@krizaka/ui/chip` (Radix Toggle Group) in the next major.
 */
export function Chip({ active, className, children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & { active: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      data-state={active ? "on" : "off"}
      {...rest}
      className={cn(
        "inline-flex h-9 items-center justify-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40",
        active
          ? "border-accent bg-accent-soft text-fg"
          : "border-border-default text-fg-secondary hover:border-border-strong hover:text-fg",
        className,
      )}
    >
      {children}
    </button>
  );
}

/**
 * One choice among a few, as a segmented control (radio semantics). State: `data-state` on each option.
 * @deprecated Since 3.0 — moves to `Tabs` (`variant="segmented"`) from `@krizaka/ui/tabs` in the next major.
 */
export function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: React.ReactNode; disabled?: boolean }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="grid gap-1 rounded-2xl border border-border-default p-1"
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          data-state={value === o.value ? "on" : "off"}
          disabled={o.disabled}
          onClick={() => onChange(o.value)}
          className={cn(
            "flex min-h-9 items-center justify-center gap-2 rounded-xl px-2 py-2 text-xs font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30",
            value === o.value ? "bg-accent text-on-accent shadow-sm" : "text-fg-secondary hover:bg-surface-2 hover:text-fg",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
