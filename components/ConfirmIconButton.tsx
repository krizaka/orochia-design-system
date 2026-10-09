"use client";

import React, { useEffect, useState } from "react";

import { cn } from "./cx";

/**
 * A destructive icon action confirmed by a second tap (never `window.confirm`): the first tap arms it and spells out
 * what will happen, the second runs it; it disarms by itself after a few seconds or when focus leaves.
 * State: `data-armed`. The danger is carried by the border and the tint; the label stays a text role (contrast).
 * @deprecated Since 3.0 — moves to `ConfirmButton` from `@krizaka/ui/confirm-button` in the next major.
 */
export function ConfirmIconButton({
  label,
  confirmLabel,
  onConfirm,
  disabled,
  className,
  children,
}: {
  label: string;
  confirmLabel: string;
  onConfirm: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (!armed) return;
    const timer = window.setTimeout(() => setArmed(false), 4000);
    return () => window.clearTimeout(timer);
  }, [armed]);
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={armed ? confirmLabel : label}
      title={armed ? confirmLabel : label}
      data-armed={armed ? "" : undefined}
      onBlur={() => setArmed(false)}
      onClick={() => {
        if (!armed) return setArmed(true);
        setArmed(false);
        onConfirm();
      }}
      className={cn(
        "inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-lg border px-2 text-[11px] font-bold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40",
        armed
          ? "border-danger bg-danger/20 text-fg hover:bg-danger/30"
          : "border-transparent text-fg-secondary hover:border-danger/50 hover:bg-danger/10 hover:text-fg",
        className,
      )}
    >
      {children}
      {armed && <span>{confirmLabel}</span>}
    </button>
  );
}
