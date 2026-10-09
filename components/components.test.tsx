import { Button as UiButton, buttonVariants as uiButtonVariants } from "@krizaka/ui/button";
import { cn as uiCn } from "@krizaka/ui/cn";
import { render, screen } from "@testing-library/react";

import * as classes from "../classes";
import * as kit from "./index";
import { Button, buttonVariants, cn, IconButton, LiveBadge, orochiaButton } from "./index";

describe("Button", () => {
  it("is busy and disabled while loading", () => {
    render(<Button loading>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveProperty("disabled", true);
    expect(button.getAttribute("aria-busy")).toBe("true");
  });

  it("re-exports the @krizaka/ui primitive", () => {
    expect(Button).toBe(UiButton);
    expect(buttonVariants).toBe(uiButtonVariants);
    expect(cn).toBe(uiCn);
  });

  it("names an icon-only button", () => {
    render(<IconButton label="Add">+</IconButton>);
    expect(screen.getByRole("button", { name: "Add" })).toBeTruthy();
  });
});

describe("orochiaButton", () => {
  it("adds the sensual variant on top of buttonVariants", () => {
    const classes = orochiaButton({ variant: "sensual" }).split(" ");
    expect(classes).toEqual(expect.arrayContaining(["kz-sheen", "from-accent", "to-accent-2", "text-on-accent"]));
    expect(classes).not.toContain("bg-surface-2");
  });

  it("merges sensual with the size and the shape of the primitive", () => {
    const classes = orochiaButton({ variant: "sensual", size: "lg", shape: "pill" }).split(" ");
    expect(classes).toEqual(expect.arrayContaining(["h-12", "px-6", "rounded-full", "from-accent"]));
    expect(classes).not.toContain("rounded-lg");
  });

  it("keeps every variant of the primitive, and the product's className wins", () => {
    expect(orochiaButton({ variant: "danger" })).toBe(uiButtonVariants({ variant: "danger" }));
    const classes = orochiaButton({ variant: "sensual", size: "sm", className: "h-14" }).split(" ");
    expect(classes).toContain("h-14");
    expect(classes).not.toContain("h-8");
  });

  it("styles the primitive Button", () => {
    render(<Button className={orochiaButton({ variant: "sensual" })}>Join</Button>);
    expect(screen.getByRole("button", { name: "Join" }).className).toContain("to-accent-2");
  });
});

describe("4.0 — no primitive of its own", () => {
  it("no longer exports the components and helpers deprecated in 3.0", () => {
    const removed = ["Chip", "Segmented", "Switch", "Slider", "Sheet", "ConfirmIconButton", "buttonClass", "cx", "Countdown", "useCountdown", "splitDuration"];
    for (const name of removed) {
      expect(name in kit, `${name} (root)`).toBe(false);
      expect(name in classes, `${name} (/classes)`).toBe(false);
    }
  });
});

describe("LiveBadge", () => {
  it("is an accent Badge with a pulsing dot when live", () => {
    render(<LiveBadge label="Live" />);
    const badge = screen.getByText("Live");
    expect(badge.dataset.tone).toBe("accent");
    expect(badge.dataset.status).toBe("live");
    expect(badge.querySelector("[data-dot]")).not.toBeNull();
    expect(badge.className).toContain("motion-safe:animate-pulse");
  });

  it("maps its tones onto the Badge roles, pulsing only when live", () => {
    const tones = { upcoming: "accent", success: "success", muted: "neutral" } as const;
    for (const [tone, role] of Object.entries(tones)) {
      render(<LiveBadge label={tone} tone={tone as keyof typeof tones} className="absolute" />);
      const badge = screen.getByText(tone);
      expect(badge.dataset.tone).toBe(role);
      expect(badge.className).not.toContain("animate-pulse");
      expect(badge.className).toContain("absolute");
    }
  });
});
