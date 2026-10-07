"use client";

import React, { useId, useRef } from "react";
import { clsx } from "clsx";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  count?: number;
}

/**
 * Accessible tabs (WAI-ARIA tablist): arrow keys move between tabs, the selection is controlled by
 * the parent, and each tab names the panel it controls (`${idPrefix}-panel-${id}`).
 */
export function Tabs({ items, value, onChange, idPrefix }: { items: TabItem[]; value: string; onChange: (id: string) => void; idPrefix?: string }) {
  const auto = useId();
  const prefix = idPrefix ?? auto;
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (i + d + items.length) % items.length;
    refs.current[next]?.focus();
    onChange(items[next].id);
  };
  return (
    <div role="tablist" className="flex gap-2 overflow-x-auto border-b border-white/5 pb-3">
      {items.map((t, i) => {
        const selected = t.id === value;
        return (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`${prefix}-tab-${t.id}`}
            aria-selected={selected}
            aria-controls={`${prefix}-panel-${t.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(t.id)}
            onKeyDown={(e) => onKey(e, i)}
            className={clsx(
              "inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-semibold transition-all",
              selected ? "bg-violet-600 text-white shadow-md shadow-violet-600/30" : "text-zinc-400 hover:bg-zinc-900 hover:text-white",
            )}
          >
            {t.label}
            {t.count !== undefined && <span className="font-mono text-[10px] opacity-70">{t.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
