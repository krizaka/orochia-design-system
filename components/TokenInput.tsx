"use client";

import React, { useState } from "react";
import { Sparkles, DollarSign } from "lucide-react";
import { clsx } from "clsx";

export interface TokenInputProps {
  value: number;
  onChange: (val: number) => void;
  presets?: number[];
  currencySymbol?: string;
  className?: string;
}

export const TokenInput: React.FC<TokenInputProps> = ({
  value,
  onChange,
  presets = [5, 15, 25, 50, 100],
  currencySymbol = "$",
  className,
}) => {
  return (
    <div className={clsx("space-y-3", className)}>
      <div className="relative">
        <span className="absolute left-4 top-3 text-sm font-bold text-violet-400 font-mono">
          {currencySymbol}
        </span>
        <input
          type="number"
          min="1"
          step="1"
          value={value || ""}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          placeholder="Enter custom tip amount"
          className="w-full rounded-2xl border border-white/10 bg-zinc-900/80 pl-9 pr-4 py-2.5 text-sm font-bold text-white placeholder:text-zinc-600 focus:border-violet-500 focus:outline-none font-mono"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => onChange(preset)}
            className={clsx(
              "rounded-xl px-3 py-1.5 text-xs font-bold font-mono transition-all",
              value === preset
                ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-md shadow-violet-600/30"
                : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
            )}
          >
            {currencySymbol}{preset}
          </button>
        ))}
      </div>
    </div>
  );
};
