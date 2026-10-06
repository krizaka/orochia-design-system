"use client";

import React, { ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: ReactNode;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendUp,
  className,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          "rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/90 p-5 space-y-2 backdrop-blur-xl shadow-xl hover:border-violet-500/30 transition-all",
          className
        )
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-zinc-400">{title}</span>
        {icon && (
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
            {icon}
          </div>
        )}
      </div>

      <div className="text-2xl font-black text-white font-display tracking-tight">{value}</div>

      {(subtitle || trend) && (
        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px]">
          {subtitle && <span className="text-zinc-500">{subtitle}</span>}
          {trend && (
            <span
              className={clsx(
                "font-mono font-bold",
                trendUp ? "text-emerald-400" : "text-rose-400"
              )}
            >
              {trend}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
