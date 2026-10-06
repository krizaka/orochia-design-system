"use client";

import React from "react";
import { ShieldCheck, ShieldAlert, Clock } from "lucide-react";
import { clsx } from "clsx";

export interface ComplianceBadgeProps {
  status: "VERIFIED" | "PENDING" | "UNVERIFIED";
  showLabel?: boolean;
  className?: string;
}

export const ComplianceBadge: React.FC<ComplianceBadgeProps> = ({
  status,
  showLabel = true,
  className,
}) => {
  if (status === "VERIFIED") {
    return (
      <span
        title="18 U.S.C. § 2257 Government ID Verified & Primary Producer Certified"
        className={clsx(
          "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 font-mono",
          className
        )}
      >
        <ShieldCheck className="h-3 w-3 text-emerald-400" />
        {showLabel && <span>2257 Verified</span>}
      </span>
    );
  }

  if (status === "PENDING") {
    return (
      <span
        title="2257 Custodian Verification In Progress"
        className={clsx(
          "inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 font-mono",
          className
        )}
      >
        <Clock className="h-3 w-3 text-amber-400" />
        {showLabel && <span>2257 Pending</span>}
      </span>
    );
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/80 px-2.5 py-0.5 text-[10px] font-bold text-zinc-400 font-mono",
        className
      )}
    >
      <ShieldAlert className="h-3 w-3 text-zinc-400" />
      {showLabel && <span>2257 Unverified</span>}
    </span>
  );
};
