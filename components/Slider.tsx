"use client";

import React from "react";

/**
 * A labelled range with its value shown; the track fills up to the value (or from the centre for a ±range),
 * so the setting reads at a glance. Double-click (or the reset button of the panel) returns to `reset`.
 * @deprecated Since 3.0 — moves to `Slider` from `@krizaka/ui/slider` (Radix) in the next major.
 */
export function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
  reset,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
  reset?: number;
}) {
  const centred = min < 0 && max > 0;
  const pos = ((value - min) / (max - min)) * 100;
  const zero = centred ? ((0 - min) / (max - min)) * 100 : 0;
  const from = Math.min(pos, zero);
  const to = Math.max(pos, zero);
  return (
    <label className="block" onDoubleClick={() => reset !== undefined && onChange(reset)}>
      <span className="mb-2 flex items-baseline justify-between text-xs font-semibold text-fg-secondary">
        {label}
        <span className="font-mono text-[11px] tabular-nums text-fg-secondary">{display}</span>
      </span>
      <span className="relative block h-6">
        <span className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-surface-3" />
        <span className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-linear-to-r from-accent to-accent-2" style={{ left: `${from}%`, width: `${to - from}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          aria-valuetext={display}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 h-6 w-full cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-fg-on-media [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-fg-on-media [&::-webkit-slider-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.45)] focus-visible:outline-hidden [&:focus-visible::-webkit-slider-thumb]:ring-4 [&:focus-visible::-webkit-slider-thumb]:ring-ring/50 [&:focus-visible::-moz-range-thumb]:ring-4 [&:focus-visible::-moz-range-thumb]:ring-ring/50"
        />
      </span>
    </label>
  );
}
