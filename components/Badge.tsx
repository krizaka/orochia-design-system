"use client";

import React, { HTMLAttributes } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "velvet" | "rose" | "emerald" | "amber" | "cyan" | "outline";
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "velvet",
  dot = false,
  children,
  ...props
}) => {
  const variantStyles = {
    velvet: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    rose: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    amber: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    outline: "bg-zinc-900/60 text-zinc-300 border-white/10",
  };

  const dotColors = {
    velvet: "bg-violet-400",
    rose: "bg-rose-400",
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    cyan: "bg-cyan-400",
    outline: "bg-zinc-400",
  };

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase font-mono",
          variantStyles[variant],
          className
        )
      )}
      {...props}
    >
      {dot && <span className={clsx("h-1.5 w-1.5 rounded-full animate-pulse", dotColors[variant])} />}
      {children}
    </span>
  );
};
