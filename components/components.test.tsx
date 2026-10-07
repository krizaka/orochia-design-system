import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { Avatar, Badge, Button, EmptyState, Field, Input, Modal, OrochiaLogo, Tabs } from "./index";

const html = (node: React.ReactElement) => renderToStaticMarkup(node);

describe("components", () => {
  it("a loading button is disabled and shows its spinner", () => {
    const out = html(<Button isLoading>Pay</Button>);
    expect(out).toContain("disabled");
    expect(out).toContain("animate-spin");
  });

  it("badges carry their status dot", () => {
    expect(html(<Badge dot variant="emerald">Live</Badge>)).toContain("bg-emerald-400");
  });

  it("a field wires label, control and error for assistive technology", () => {
    const out = html(<Field label="E-mail" error="Required">{(p) => <Input {...p} />}</Field>);
    const id = /for="([^"]+)"/.exec(out)?.[1];
    expect(id).toBeTruthy();
    expect(out).toContain(`id="${id}"`);
    expect(out).toContain('aria-invalid="true"');
    expect(out).toContain(`aria-describedby="${id}-error"`);
  });

  it("tabs expose one selected, focusable tab bound to its panel", () => {
    const out = html(<Tabs idPrefix="t" value="b" onChange={() => {}} items={[{ id: "a", label: "A" }, { id: "b", label: "B", count: 3 }]} />);
    expect(out).toContain('role="tablist"');
    expect(out.match(/aria-selected="true"/g)).toHaveLength(1);
    expect(out).toContain('aria-controls="t-panel-b"');
  });

  it("a closed modal renders nothing, an open one is a labelled dialog", () => {
    expect(html(<Modal open={false} onClose={() => {}} title="x">body</Modal>)).toBe("");
    const out = html(<Modal open onClose={() => {}} title="Edit">body</Modal>);
    expect(out).toContain('role="dialog"');
    expect(out).toContain('aria-modal="true"');
  });

  it("an avatar without picture shows initials", () => {
    expect(html(<Avatar name="Elena Vox" />)).toContain(">EV<");
  });

  it("the empty state names what is missing", () => {
    expect(html(<EmptyState title="No video yet">Upload one.</EmptyState>)).toContain("No video yet");
  });

  it("the Orochia mark animates unless told not to", () => {
    expect(html(<OrochiaLogo size={64} />)).toContain("oro-slither");
    expect(html(<OrochiaLogo size={64} animated={false} />)).not.toContain('class="oro-slither"');
  });
});
