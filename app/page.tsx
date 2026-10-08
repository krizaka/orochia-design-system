"use client";

import React, { useState } from "react";
import { Moon, Plus, Sun, Trash2, Upload } from "lucide-react";
import { Button, Chip, ConfirmIconButton, IconButton, KrizakaLogo, OrochiaLogo, RotatingWord, Segmented, Sheet, Slider, SocialIcon, Switch } from "../index";

/** The showcase: every component in its states. The toggle switches the whole page between the two themes. */
export default function Showcase() {
  const [light, setLight] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [on, setOn] = useState(true);
  const [speed, setSpeed] = useState("1");
  const [quality, setQuality] = useState<"auto" | "1080" | "4k">("auto");
  const [volume, setVolume] = useState(70);
  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    document.documentElement.classList.toggle("dark", !next);
  };

  return (
    <main className="mx-auto max-w-5xl space-y-10 px-5 py-12">
      <header className="flex flex-wrap items-center justify-between gap-4" data-reveal>
        <div className="flex items-center gap-4">
          <OrochiaLogo size={56} title="Orochia" />
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              Orochia Design System <span className="text-violet-400 light:text-violet-700">v2</span>
            </h1>
            <p className="text-sm text-zinc-400 light:text-slate-500">
              Tailwind CSS v4 · marks and motion from <code>@krizaka/ui</code> · <RotatingWord words={["accessible", "both themes", "reduced-motion safe"]} />
            </p>
          </div>
        </div>
        <Button variant="secondary" icon={light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />} onClick={toggleTheme}>
          {light ? "Dark theme" : "Light theme"}
        </Button>
      </header>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" className="kz-sheen" icon={<Upload className="h-4 w-4" />}>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" loading>Saving</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <IconButton label="Add"><Plus className="h-4 w-4" /></IconButton>
          <ConfirmIconButton label="Delete the draft" confirmLabel="Delete?" onConfirm={() => undefined}>
            <Trash2 className="h-3.5 w-3.5" />
          </ConfirmIconButton>
          <span className="text-xs text-zinc-500 light:text-slate-500">Tap the bin twice: destructive actions never use window.confirm.</span>
        </div>
      </Section>

      <Section title="Choices">
        <div className="flex flex-wrap gap-2">
          {["0.5", "1", "1.5", "2"].map((s) => (
            <Chip key={s} active={speed === s} onClick={() => setSpeed(s)}>{s}×</Chip>
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

      <Section title="Sheet">
        <Button variant="primary" onClick={() => setSheet(true)}>Open a sheet</Button>
        <p className="mt-2 text-xs text-zinc-500 light:text-slate-500">A bottom sheet on phones, a centred dialog above. Escape and the backdrop close it; focus goes in and comes back.</p>
        <Sheet
          open={sheet}
          onClose={() => setSheet(false)}
          title="Edit video"
          closeLabel="Close"
          footer={
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setSheet(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setSheet(false)}>Save</Button>
            </div>
          }
        >
          <label className="block text-xs font-semibold text-zinc-400 light:text-slate-500">
            Title
            <input defaultValue="Tokyo Neon Horizons" className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-900 px-3 py-2.5 text-sm text-white focus:border-violet-500 focus:outline-hidden light:border-black/10 light:bg-slate-50 light:text-slate-900" />
          </label>
        </Sheet>
      </Section>

      <Section title="Brand and glyphs">
        <div className="flex flex-wrap items-center gap-6">
          <OrochiaLogo size={96} />
          <OrochiaLogo size={32} />
          <KrizakaLogo size={64} />
          <div className="flex gap-3 text-zinc-300 light:text-slate-600">
            {["instagram", "x", "facebook", "tiktok", "youtube"].map((n) => (
              <SocialIcon key={n} network={n} className="h-5 w-5" />
            ))}
          </div>
        </div>
      </Section>

      <Section title="Motion">
        <div className="grid gap-4 sm:grid-cols-3">
          {["kz-spotlight", "kz-lift", "kz-pop"].map((c, i) => (
            <div key={c} data-reveal style={{ "--kz-delay": `${i * 80}ms` } as React.CSSProperties} className={`${c} rounded-2xl border border-white/10 bg-zinc-900/60 p-5 light:border-black/10 light:bg-white`}>
              <code className="text-xs text-violet-300 light:text-violet-700">.{c}</code>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section data-reveal className="rounded-3xl border border-white/10 bg-zinc-950/60 p-6 light:border-black/10 light:bg-white">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400 light:text-slate-500">{title}</h2>
      {children}
    </section>
  );
}
