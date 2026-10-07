import React from "react";
import { clsx } from "clsx";

const SIZES = { sm: "h-8 w-8 text-[11px]", md: "h-11 w-11 text-xs", lg: "h-20 w-20 text-lg" } as const;

/** A person's picture, or their initials on the velvet gradient; `verified` adds the 2257 ring. */
export function Avatar({ src, name, size = "md", verified = false }: { src?: string | null; name: string; size?: keyof typeof SIZES; verified?: boolean }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
  return (
    <span
      className={clsx(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-600 to-pink-600 font-bold text-white",
        SIZES[size],
        verified && "ring-2 ring-violet-400 ring-offset-2 ring-offset-zinc-950",
      )}
      aria-label={name}
      role="img"
    >
      {src ? <img src={src} alt="" className="h-full w-full object-cover" /> : initials}
    </span>
  );
}
