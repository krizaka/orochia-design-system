"use client";

import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none";

    const sizeStyles = {
      sm: "px-3 py-1.5 text-xs gap-1.5",
      md: "px-4 py-2.5 text-xs gap-2",
      lg: "px-6 py-3.5 text-sm gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white shadow-lg shadow-violet-600/30 hover:brightness-110 hover:shadow-violet-600/50",
      secondary:
        "bg-white/10 hover:bg-white/15 text-white border border-white/10 backdrop-blur-md",
      outline:
        "border border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-500/60",
      danger:
        "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30",
      ghost:
        "text-zinc-400 hover:text-white hover:bg-white/5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}
        {...props}
      >
        {isLoading && (
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
