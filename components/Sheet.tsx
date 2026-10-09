"use client";

import { IconButton } from "@krizaka/ui/button";
import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";

import { cn } from "./cx";

/**
 * A modal sheet: slides up from the bottom on phones, centred on larger screens. Escape and a click outside close
 * it, the page behind does not scroll, focus moves inside and returns where it was.
 * @deprecated Since 3.0 — moves to `Dialog.Content placement="bottom"` (the `Sheet` of `@krizaka/ui/dialog`, Radix)
 * in the next major.
 */
export function Sheet({
  open,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeLabel = "Close",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: "md" | "lg";
  /** Accessible name of the close button — pass it translated. */
  closeLabel?: string;
}) {
  const panel = useRef<HTMLDivElement>(null);
  // The latest onClose, so an inline handler does not re-run the focus and scroll management on every render.
  const close = useRef(onClose);
  useEffect(() => {
    close.current = onClose;
  }, [onClose]);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("input, select, textarea, button:not([data-close])")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close.current();
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-70 flex items-end justify-center bg-overlay backdrop-blur-xs kz-overlay sm:items-center sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "kz-dialog flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[1.75rem] border border-border-default bg-surface-1 text-fg shadow-lg sm:rounded-[1.75rem]",
          size === "lg" ? "sm:max-w-2xl" : "sm:max-w-md",
        )}
      >
        <div className="flex items-center justify-between gap-3 px-5 pb-2 pt-4">
          <h2 className="font-display text-base font-bold text-fg">{title}</h2>
          <IconButton label={closeLabel} variant="ghost" shape="pill" data-close onClick={onClose} className="-mr-2 h-9 w-9">
            <X className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-5">{children}</div>
        {footer && <div className="border-t border-border-default px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">{footer}</div>}
      </div>
    </div>
  );
}
