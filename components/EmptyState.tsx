import React from "react";

/** What an empty list says: what is missing and, when possible, the action that fills it. */
export function EmptyState({ icon, title, children, action }: { icon?: React.ReactNode; title: string; children?: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-10 text-center">
      {icon && <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">{icon}</div>}
      <p className="text-sm font-bold text-white">{title}</p>
      {children && <p className="mx-auto mt-1 max-w-md text-xs text-zinc-400">{children}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
