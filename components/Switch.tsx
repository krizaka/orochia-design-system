"use client";

import React from "react";

import { cn } from "./cx";

/**
 * An on/off switch (role="switch"); `label` is its accessible name when no visible label sits next to it.
 * State: `data-state` (`checked` · `unchecked`).
 * @deprecated Since 3.0 — moves to `Switch` from `@krizaka/ui/switch` (Radix) in the next major.
 */
export function Switch({ checked, onChange, label, disabled = false }: { checked: boolean; onChange: (v: boolean) => void; label: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      data-state={checked ? "checked" : "unchecked"}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-full transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 disabled:opacity-30",
        checked ? "bg-accent" : "bg-fg-muted",
      )}
    >
      <span className={cn("absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-fg-on-media shadow-sm transition-transform", checked && "translate-x-5")} />
    </button>
  );
}
