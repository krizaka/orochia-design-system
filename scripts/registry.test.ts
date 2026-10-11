// @vitest-environment node
// The registry is complete — by the code: every component the kit exports has its `<name>.meta.ts` (summary, why it
// exists above Krizaka UI, when to use and not, accessibility, the primitives it is built on) and its named examples,
// every prop has a JSDoc description, every reference resolves, and the foundations read at WCAG AA. A component
// without its documentation fails here, before it can reach krizaka.com/docs/orochia/ui.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

import * as uiButton from "@krizaka/ui/button";

import * as classes from "../classes";
import type { ComponentMeta } from "../components/meta";
import * as kit from "../index";
import * as tokens from "../tokens";
import { collectFoundations, collectRegistry, componentNames, EXAMPLES, PACKAGE, readMeta, reexportsFromUi } from "./registry.mjs";

const require = createRequire(import.meta.url);
const uiIndex = JSON.parse(readFileSync(join(require.resolve("@krizaka/ui/package.json"), "..", "registry", "index.json"), "utf8"));
const uiNames = new Set<string>(uiIndex.items.map((i: { name: string }) => i.name));
const registry = await collectRegistry({ classes, uiButton });
const names = componentNames();
const metas: Record<string, ComponentMeta> = Object.fromEntries(await Promise.all(names.map(async (n) => [n, await readMeta(n)])));
interface Mode {
  roles: { role: string; value: string }[];
  contrasts: { ratio: number; min: number }[];
}
const foundations = (await collectFoundations()) as unknown as {
  modes: Record<"dark" | "light", Mode>;
  productTokens: { name: string; description: string | null }[];
  rules: { source: { url: string } }[];
};

const sentence = (value: unknown) => typeof value === "string" && value.trim().length >= 8;
const resolves = (ref: string) => (ref.startsWith("ui/") ? uiNames.has(ref.slice(3)) : names.includes(ref));

describe("registry", () => {
  it("documents every component the kit exports (re-exports of @krizaka/ui and tokens aside)", () => {
    const reexported = new Set(reexportsFromUi().map((r) => r.name));
    const documented = new Set(Object.values(metas).flatMap((m) => [...m.web.imports]));
    const exported = [...Object.keys(kit), ...Object.keys(classes)].filter((n) => !reexported.has(n) && !(n in tokens));
    expect([...new Set(exported)].filter((n) => !documented.has(n)), "add a <name>.meta.ts for these exports").toEqual([]);
    for (const name of documented) expect(name in kit || name in classes, `${name} is exported`).toBe(true);
  });

  it.each(names)("%s: its meta.ts is complete", (name) => {
    const meta = metas[name];
    for (const field of ["title", "summary", "why"] as const) expect(sentence(meta[field]), field).toBe(true);
    expect(["stable", "beta", "deprecated"]).toContain(meta.status);
    expect(meta.platforms).toBe("web");
    expect(meta.whenToUse.length).toBeGreaterThan(0);
    expect(meta.whenNotToUse.length).toBeGreaterThan(0);
    expect(meta.bestPractices.length).toBeGreaterThan(0);
    expect(meta.accessibility.notes.length).toBeGreaterThan(0);
    if (meta.status === "deprecated") {
      expect(meta.deprecated, "a deprecated component says what replaces it").toMatchObject({ since: expect.any(String), removedIn: expect.any(String) });
      expect(resolves(meta.deprecated!.use), meta.deprecated!.use).toBe(true);
    } else {
      expect(meta.deprecated).toBeUndefined();
      expect(meta.web.examples.length, "at least one named example").toBeGreaterThan(0);
    }
  });

  it.each(names)("%s: every reference resolves (@krizaka/ui primitives and kit components)", (name) => {
    const meta = metas[name];
    const refs: string[] = [...meta.builtOn, ...meta.related, ...meta.whenNotToUse.flatMap((w) => (w.use ? [w.use] : []))];
    for (const ref of refs) expect(resolves(ref), ref).toBe(true);
    for (const ref of meta.builtOn) expect(ref.startsWith("ui/"), `${ref}: builtOn names @krizaka/ui primitives`).toBe(true);
  });

  it.each(names)("%s: its examples exist, are short and import the kit as a product does", (name) => {
    const item = registry.find((i) => i.name === name)!;
    for (const example of item.web.examples) {
      expect(example.code, example.path).toContain("export default function");
      expect(example.code.split("\n").length, `${example.path}: at most 40 lines`).toBeLessThanOrEqual(41);
      expect(example.code).toContain(`from "${PACKAGE}`);
      expect(example.code).not.toMatch(/from "\.\.?\//);
      expect(example.code.toLowerCase(), `${example.path}: Orochia never says "live"`).not.toMatch(/\blive\b/);
    }
  });

  it("has no example that no component lists", () => {
    const listed = new Set(registry.flatMap((i) => i.web.examples.map((e: { path: string }) => e.path)));
    const files = readdirSync(EXAMPLES, { recursive: true })
      .map(String)
      .filter((f) => f.endsWith(".tsx"))
      .map((f) => `examples/${f.split("\\").join("/")}`);
    expect(files.filter((f) => !listed.has(f))).toEqual([]);
    for (const item of registry) for (const e of item.web.examples) expect(existsSync(join(EXAMPLES, "..", e.path)), e.path).toBe(true);
  });

  it.each(names)("%s: every prop has a description", (name) => {
    const item = registry.find((i) => i.name === name)!;
    expect(item.web.props.length, "its props or its variants").toBeGreaterThan(0);
    const undocumented = item.web.props.flatMap((c: { component: string; props: { name: string; description: string }[] }) =>
      c.props.filter((p) => !p.description.trim()).map((p) => `${c.component}.${p.name}`),
    );
    expect(undocumented, "add a JSDoc comment on these props").toEqual([]);
  });
});

describe("foundations", () => {
  it("describes every product token theme.css declares", () => {
    expect(foundations.productTokens.length).toBeGreaterThan(0);
    for (const token of foundations.productTokens) expect(sentence(token.description), token.name).toBe(true);
  });

  it.each(["dark", "light"] as const)("reads at WCAG AA in %s", (mode) => {
    const { contrasts, roles } = foundations.modes[mode];
    expect(contrasts.length).toBeGreaterThan(10);
    expect(contrasts.filter((c: { ratio: number; min: number }) => c.ratio < c.min)).toEqual([]);
    for (const role of roles) expect(role.value, role.role).toBeTruthy();
  });

  it("quotes every product rule from a contract", () => {
    for (const rule of foundations.rules) expect(rule.source.url).toMatch(/AGENTS\.md$/);
  });
});
