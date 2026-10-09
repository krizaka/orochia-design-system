"use client";

import { ThemeToggle } from "@krizaka/ui/theme";
import { Plus, Trash2, Upload } from "lucide-react";
import React, { useState, useSyncExternalStore } from "react";

import {
  Button,
  Chip,
  cn,
  ConfirmIconButton,
  Countdown,
  IconButton,
  KrizakaLogo,
  LiveBadge,
  orochiaButton,
  OrochiaLogo,
  RotatingWord,
  Segmented,
  Sheet,
  Slider,
  SocialIcon,
  Switch,
} from "../index";

/** The roles theme.css overrides, and the product tokens — shown with their live value in the current theme. */
const IDENTITY = [
  "surface-0",
  "surface-1",
  "surface-2",
  "surface-3",
  "border-default",
  "accent",
  "accent-hover",
  "accent-soft",
  "accent-2",
  "ring",
  "on-accent",
] as const;

const UNITS = { d: "d", h: "h", m: "m", s: "s" };

// The computed values follow the `light` class on <html>: an external store fed by a MutationObserver.
function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
function readIdentity() {
  const style = getComputedStyle(document.documentElement);
  return [...IDENTITY.map((n) => `--kz-${n}`), "--kz-font-display"].map((n) => style.getPropertyValue(n).trim()).join("|");
}

/** The showcase: every component in its states. The toggle cycles dark → light → system on the whole page. */
export default function Showcase() {
  const [sheet, setSheet] = useState(false);
  const [on, setOn] = useState(true);
  const [speed, setSpeed] = useState("1");
  const [quality, setQuality] = useState<"auto" | "1080" | "4k">("auto");
  const [volume, setVolume] = useState(70);
  const [opened] = useState(() => Date.now());
  const identity = useSyncExternalStore(subscribeTheme, readIdentity, () => "").split("|");

  return (
    <main className="mx-auto max-w-5xl space-y-10 px-5 py-12">
      <header className="flex flex-wrap items-center justify-between gap-4" data-reveal>
        <div className="flex items-center gap-4">
          <OrochiaLogo size={56} title="Orochia" />
          <div>
            <h1 className="font-display text-2xl font-black tracking-tight">
              Orochia Design System <span className="text-accent">v3</span>
            </h1>
            <p className="text-sm text-fg-secondary">
              Obsidian Velvet Noir on <code>@krizaka/ui</code> · <RotatingWord words={["tokens, not palettes", "both themes", "reduced-motion safe"]} />
            </p>
          </div>
        </div>
        <ThemeToggle label={(mode) => `Theme: ${mode} (change)`} shape="pill" />
      </header>

      <Section title="Identity — the --kz-* roles theme.css overrides">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {IDENTITY.map((name, i) => (
            <div key={name} className="overflow-hidden rounded-xl border border-border-default">
              <div className="h-12" style={{ background: `var(--kz-${name})` }} />
              <div className="px-3 py-2">
                <code className="text-xs text-fg">--kz-{name}</code>
                <div className="font-mono text-[11px] text-fg-secondary" suppressHydrationWarning>
                  {identity[i] || "…"}
                </div>
              </div>
            </div>
          ))}
          <div className="overflow-hidden rounded-xl border border-border-default">
            <div className="h-12 bg-story-ring" />
            <div className="px-3 py-2">
              <code className="text-xs text-fg">--orochia-story-ring</code>
              <div className="font-mono text-[11px] text-fg-secondary">bg-story-ring</div>
            </div>
          </div>
        </div>
        <p className="mt-4 font-display text-xl font-bold">
          Outfit is the display face <span className="font-mono text-xs font-normal text-fg-secondary" suppressHydrationWarning>{identity[IDENTITY.length]}</span>
        </p>
      </Section>

      <Section title="Buttons — @krizaka/ui, plus orochiaButton">
        <div className="flex flex-wrap items-center gap-3">
          <Button className={orochiaButton({ variant: "sensual", shape: "pill" })}>
            <Upload className="h-4 w-4" />
            Sensual
          </Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" loading>
            Saving…
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button className={orochiaButton({ variant: "sensual", size: "sm", shape: "pill" })}>Small</Button>
          <Button className={orochiaButton({ variant: "sensual", size: "lg", shape: "pill" })}>Large</Button>
          <Button asChild variant="outline" shape="pill">
            <a href="#identity">A link, as a button</a>
          </Button>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <IconButton label="Add" variant="ghost" shape="pill">
            <Plus className="h-4 w-4" />
          </IconButton>
          <ConfirmIconButton label="Delete the draft" confirmLabel="Delete?" onConfirm={() => undefined}>
            <Trash2 className="h-3.5 w-3.5" />
          </ConfirmIconButton>
          <span className="text-xs text-fg-secondary">Tap the bin twice: destructive actions never use window.confirm.</span>
        </div>
      </Section>

      <Section title="Choices (deprecated, until their @krizaka/ui primitive)">
        <div className="flex flex-wrap gap-2">
          {["0.5", "1", "1.5", "2"].map((s) => (
            <Chip key={s} active={speed === s} onClick={() => setSpeed(s)}>
              {s}×
            </Chip>
          ))}
        </div>
        <div className="mt-4 max-w-sm">
          <Segmented label="Quality" value={quality} onChange={setQuality} options={[{ value: "auto", label: "Auto" }, { value: "1080", label: "1080p" }, { value: "4k", label: "4K" }]} />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch checked={on} onChange={setOn} label="E-mail notifications" />
          <span className="text-sm">E-mail notifications {on ? "on" : "off"}</span>
        </div>
        <div className="mt-4 max-w-sm">
          <Slider label="Volume" value={volume} min={0} max={100} step={1} display={`${volume}%`} onChange={setVolume} reset={70} />
        </div>
      </Section>

      <Section title="Sheet (deprecated, until @krizaka/ui/dialog)">
        <Button variant="primary" onClick={() => setSheet(true)}>
          Open a sheet
        </Button>
        <p className="mt-2 text-xs text-fg-secondary">A bottom sheet on phones, a centred dialog above. Escape and the backdrop close it; focus goes in and comes back.</p>
        <Sheet
          open={sheet}
          onClose={() => setSheet(false)}
          title="Edit video"
          closeLabel="Close"
          footer={
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setSheet(false)}>
                Cancel
              </Button>
              <Button className={orochiaButton({ variant: "sensual" })} onClick={() => setSheet(false)}>
                Save
              </Button>
            </div>
          }
        >
          <label className="block text-xs font-semibold text-fg-secondary">
            Title
            <input defaultValue="Tokyo Neon Horizons" className="mt-1 w-full rounded-xl border border-border-default bg-surface-2 px-3 py-2.5 text-sm text-fg focus:border-accent focus:outline-hidden" />
          </label>
        </Sheet>
      </Section>

      <Section title="Brand and glyphs">
        <div className="flex flex-wrap items-center gap-6">
          <OrochiaLogo size={96} />
          <OrochiaLogo size={32} />
          <KrizakaLogo size={64} />
          <div className="flex gap-3 text-fg-secondary">
            {["instagram", "x", "facebook", "tiktok", "youtube"].map((n) => (
              <SocialIcon key={n} network={n} className="h-5 w-5" />
            ))}
          </div>
          <span className="h-14 w-14 rounded-full bg-story-ring p-0.5">
            <span className="block h-full w-full rounded-full bg-surface-2" />
          </span>
        </div>
      </Section>

      <Section title="Time and status">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-wrap gap-2">
            <LiveBadge label="Live" />
            <LiveBadge label="Starts soon" tone="upcoming" />
            <LiveBadge label="Sold" tone="success" />
            <LiveBadge label="Ended" tone="muted" />
          </div>
          <Countdown label="Ends in" target={opened + 2 * 86400_000 + 4 * 3600_000} units={UNITS} size="lg" />
          <Countdown label="Ends in" target={opened + 45_000} units={UNITS} />
        </div>
      </Section>

      <Section title="A .theme-dark island (a player) — dark in both themes">
        <div className="theme-dark flex flex-wrap items-center gap-3 rounded-2xl bg-surface-0 p-5 text-fg">
          <LiveBadge label="Live" />
          <Button className={orochiaButton({ variant: "sensual", shape: "pill" })}>Tip</Button>
          <Button variant="ghost">Ghost</Button>
          <Countdown label="Ends in" target={opened + 3600_000} units={UNITS} size="sm" />
        </div>
      </Section>

      <Section title="Motion">
        <div className="grid gap-4 sm:grid-cols-3">
          {["kz-spotlight", "kz-lift", "kz-pop"].map((c, i) => (
            <div key={c} data-reveal style={{ "--kz-delay": `${i * 80}ms` } as React.CSSProperties} className={cn(c, "rounded-2xl border border-border-default bg-surface-1 p-5")}>
              <code className="text-xs text-accent">.{c}</code>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const id = title.split(" ")[0].toLowerCase();
  return (
    <section id={id} data-reveal className="rounded-3xl border border-border-default bg-surface-1 p-6">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-fg-secondary">{title}</h2>
      {children}
    </section>
  );
}
