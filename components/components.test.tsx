import { Button as UiButton, buttonVariants as uiButtonVariants } from "@krizaka/ui/button";
import { Countdown as UiCountdown } from "@krizaka/ui/countdown";
import { fireEvent, render, screen } from "@testing-library/react";

import { Button, buttonClass, buttonVariants, Chip, cn, ConfirmIconButton, Countdown, cx, IconButton, LiveBadge, orochiaButton, Segmented, Sheet, splitDuration, Switch } from "./index";

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
    expect(Countdown).toBe(UiCountdown);
    expect(cx).toBe(cn);
  });

  it("keeps buttonClass as a deprecated wrapper over buttonVariants, warning once", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    expect(buttonClass({ variant: "primary" })).toBe(uiButtonVariants({ variant: "primary", size: "md", shape: "pill" }));
    expect(buttonClass({ round: false, size: "sm" })).toBe(uiButtonVariants({ variant: "secondary", size: "sm", shape: "rounded" }));
    expect(warn).toHaveBeenCalledOnce();
    warn.mockRestore();
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

describe("ConfirmIconButton", () => {
  it("needs a second tap", () => {
    const onConfirm = vi.fn();
    render(<ConfirmIconButton label="Delete" confirmLabel="Delete?" onConfirm={onConfirm}>×</ConfirmIconButton>);
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(onConfirm).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Delete?" }));
    expect(onConfirm).toHaveBeenCalledOnce();
  });
});

describe("choices", () => {
  it("announces a pressed chip", () => {
    render(<Chip active>1×</Chip>);
    expect(screen.getByRole("button").getAttribute("aria-pressed")).toBe("true");
  });

  it("exposes a switch", () => {
    const onChange = vi.fn();
    render(<Switch checked={false} onChange={onChange} label="Notifications" />);
    fireEvent.click(screen.getByRole("switch", { name: "Notifications" }));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("is a radio group", () => {
    render(<Segmented label="Quality" value="a" onChange={() => undefined} options={[{ value: "a", label: "A" }, { value: "b", label: "B" }]} />);
    expect(screen.getByRole("radiogroup", { name: "Quality" })).toBeTruthy();
  });
});

describe("Sheet", () => {
  it("is a labelled modal dialog that closes on Escape", () => {
    const onClose = vi.fn();
    render(<Sheet open onClose={onClose} title="Edit video" closeLabel="Fermer">body</Sheet>);
    expect(screen.getByRole("dialog", { name: "Edit video" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Fermer" })).toBeTruthy();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });

  it("renders nothing when closed", () => {
    render(<Sheet open={false} onClose={() => undefined} title="x">body</Sheet>);
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});

describe("time", () => {
  it("splits a duration", () => {
    expect(splitDuration(((2 * 24 + 4) * 3600 + 13 * 60 + 9) * 1000)).toEqual({ d: 2, h: 4, m: 13, s: 9 });
    expect(splitDuration(-5)).toEqual({ d: 0, h: 0, m: 0, s: 0 });
  });

  it("is a named timer showing hours, minutes and seconds under a day", () => {
    render(<Countdown label="Ends in" target={Date.now() + (3600 + 61) * 1000} units={{ d: "d", h: "h", m: "m", s: "s" }} />);
    const timer = screen.getByRole("timer", { name: "Ends in" });
    expect(timer.textContent).toMatch(/^01h01m0[01]s$/);
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
