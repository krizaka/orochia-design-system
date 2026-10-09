// Server-safe (no hook): the button classes style a <Link> or a Server Component without the component.
import { buttonVariants } from "@krizaka/ui/button";
import { tv, type VariantProps } from "tailwind-variants";

export { Button, type ButtonProps, type ButtonVariants, buttonVariants, IconButton, type IconButtonProps } from "@krizaka/ui/button";

/**
 * The Orochia button: everything of `buttonVariants` (@krizaka/ui), plus the `sensual` variant — the velvet → magenta
 * gradient with the sheen, the signature call to action. Extended, never copied.
 *
 *   <Button asChild className={orochiaButton({ variant: "sensual", size: "lg", shape: "pill" })}><Link …/></Button>
 */
export const orochiaButton = tv({
  extend: buttonVariants,
  variants: {
    variant: {
      sensual:
        "kz-sheen bg-linear-to-r from-accent via-accent-2 to-accent-2 text-on-accent shadow-lg shadow-accent/20 hover:brightness-110 active:brightness-95",
    },
  },
});

export type OrochiaButtonVariants = VariantProps<typeof orochiaButton>;

/** @deprecated Since 3.0 — the `variant` of `buttonVariants` (@krizaka/ui/button). */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
/** @deprecated Since 3.0 — the `size` of `buttonVariants` (@krizaka/ui/button). */
export type ButtonSize = "sm" | "md" | "lg";

let warned = false;

/**
 * The 2.x class helper, now a thin wrapper over `buttonVariants`: `round` (default true) maps to `shape="pill"`.
 * @deprecated Since 3.0 — use `buttonVariants({ variant, size, shape })` from `@krizaka/ui/button`, or
 * `orochiaButton({ variant: "sensual" })` for the gradient call to action.
 */
export function buttonClass({
  variant = "secondary",
  size = "md",
  round = true,
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; round?: boolean; className?: string } = {}): string {
  if (!warned && typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
    warned = true;
    console.warn("@krizaka/orochia-design-system: buttonClass() is deprecated — use buttonVariants() from @krizaka/ui/button.");
  }
  return buttonVariants({ variant, size, shape: round ? "pill" : "rounded", className });
}
