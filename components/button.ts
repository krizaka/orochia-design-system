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
