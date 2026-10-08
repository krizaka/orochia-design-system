import { fireEvent, render, screen } from "@testing-library/react";
import { Button, Chip, ConfirmIconButton, Countdown, IconButton, LiveBadge, Segmented, Sheet, Switch, buttonClass, splitDuration } from "./index";

describe("Button", () => {
  it("is busy and disabled while loading", () => {
    render(<Button loading>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveProperty("disabled", true);
    expect(button.getAttribute("aria-busy")).toBe("true");
  });

  it("styles links through buttonClass", () => {
    expect(buttonClass({ variant: "primary" })).toContain("bg-");
  });

  it("names an icon-only button", () => {
    render(<IconButton label="Add">+</IconButton>);
    expect(screen.getByRole("button", { name: "Add" })).toBeTruthy();
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

  it("labels a status", () => {
    render(<LiveBadge label="Live" />);
    expect(screen.getByText("Live")).toBeTruthy();
  });
});
