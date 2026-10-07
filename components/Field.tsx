"use client";

import React, { forwardRef, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, useId } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const control =
  "w-full rounded-xl border border-white/10 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 disabled:opacity-50 aria-[invalid=true]:border-rose-500";

/** A labelled form control with optional hint and error, wired for assistive technology. */
export function Field({
  label,
  hint,
  error,
  children,
  className,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: (props: { id: string; "aria-invalid"?: boolean; "aria-describedby"?: string }) => React.ReactNode;
  className?: string;
}) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <div className={twMerge(clsx("space-y-1.5", className))}>
      <label htmlFor={id} className="block text-xs font-semibold text-zinc-300">
        {label}
      </label>
      {children({ id, "aria-invalid": error ? true : undefined, "aria-describedby": describedBy })}
      {error ? (
        <p id={`${id}-error`} className="text-[11px] text-rose-400">{error}</p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-[11px] text-zinc-500">{hint}</p>
      ) : null}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} className={twMerge(clsx(control, className))} {...props} />
));
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={twMerge(clsx(control, "min-h-[96px] resize-y", className))} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={twMerge(clsx(control, "appearance-none pr-8", className))} {...props}>
    {children}
  </select>
));
Select.displayName = "Select";
