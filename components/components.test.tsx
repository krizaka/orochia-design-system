import { fireEvent, render, screen } from "@testing-library/react";
import { Button, Chip, ConfirmIconButton, IconButton, Segmented, Sheet, Switch, buttonClass } from "./index";

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
