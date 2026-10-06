"use client";

import React, { useState } from "react";
import {
  Flame,
  Sparkles,
  Layers,
  Palette,
  ShieldCheck,
  Eye,
  Wallet,
  Code2,
  Copy,
  Check,
  ExternalLink,
  Laptop
} from "lucide-react";
import {
  Button,
  Badge,
  StatCard,
  ComplianceBadge,
  TokenInput,
  VideoCard,
  AgeGateModal
} from "../components";
import { colors, gradients, shadows } from "../tokens";

export default function DesignSystemShowcase() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [tipValue, setTipValue] = useState(25);
  const [isAgeGateOpen, setIsAgeGateOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#060709] text-white">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-pink-500 text-white shadow-lg shadow-violet-500/30">
              <Flame className="h-5 w-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-sm tracking-wider font-display">
                  OROCHIA<span className="text-violet-400">.</span>DESIGN
                </span>
                <span className="rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 px-2 py-0.2 text-[9px] font-mono font-bold">
                  v1.0.0
                </span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono">
                Krizaka UX Design System & Tokens
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <span>Consumer App (3000)</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="http://localhost:3001"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <span>Admin Control (3001)</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://github.com/krizaka/orochia-design-system"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-semibold hover:bg-zinc-800 transition-colors"
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Showcase */}
      <section className="relative overflow-hidden border-b border-white/5 py-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(139,92,246,0.25),rgba(255,255,255,0))]" />
        <div className="max-w-5xl mx-auto text-center space-y-5 relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-mono font-bold text-violet-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Obsidian Velvet Noir & Cyber-Sensual Luxury</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight">
            The Design System for the{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Orochia Sanctuary
            </span>
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Engineered by Krizaka to unify the adult creator economy, compliance vaults,
            high-converting tip interfaces, and Bunny.net 4K video streaming experiences into a shared, state-of-the-art UI specification.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleCopy("npm install @krizaka/orochia-design-system", "hero-install")}
            >
              {copiedSection === "hero-install" ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Command Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>npm install @krizaka/orochia-design-system</span>
                </>
              )}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setIsAgeGateOpen(true)}
            >
              <span>Test Age Gate Modal</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* SECTION 1: Design Tokens & Palette */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Palette className="h-4 w-4" />
                <span>01. Design Tokens</span>
              </div>
              <h2 className="text-2xl font-bold font-display mt-1">Color Palette & Surface Tiers</h2>
            </div>
          </div>

          {/* Obsidian Surfaces */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">
              Obsidian Velvet Noir Surfaces
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { name: "Obsidian Deep", hex: "#030406", desc: "Absolute Canvas" },
                { name: "Obsidian Base", hex: "#060709", desc: "Standard Background" },
                { name: "Surface Layer", hex: "#0c0e14", desc: "Panels & Drawers" },
                { name: "Card Elevated", hex: "#121520", desc: "Interactive Cards" },
                { name: "Border Strong", hex: "#1f2438", desc: "Dividers & Borders" },
                { name: "Subtle Glass", hex: "rgba(255,255,255,0.08)", desc: "Backdrop Overlay" },
              ].map((c) => (
                <div key={c.name} className="rounded-2xl border border-white/10 bg-zinc-950 p-3 space-y-2">
                  <div
                    className="h-14 rounded-xl border border-white/10"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">{c.name}</span>
                    <span className="text-[10px] text-zinc-500 font-mono block">{c.hex}</span>
                    <span className="text-[10px] text-zinc-400 mt-0.5 block">{c.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accent & Sensual Scales */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">
              Cyber-Sensual Luxury Accents
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { name: "Velvet Violet", hex: "#8b5cf6", role: "Primary Interactive" },
                { name: "Sensual Magenta", hex: "#ec4899", role: "Hero & Exclusive" },
                { name: "Passion Rose", hex: "#f43f5e", role: "DMCA & Alert Triage" },
                { name: "Sanctuary Amber", hex: "#f59e0b", role: "2257 Pending & Paywall" },
                { name: "Mint Emerald", hex: "#10b981", role: "2257 Verified & Treasury" },
              ].map((a) => (
                <div key={a.name} className="rounded-2xl border border-white/10 bg-zinc-950 p-3 space-y-2">
                  <div
                    className="h-14 rounded-xl shadow-lg"
                    style={{ backgroundColor: a.hex }}
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">{a.name}</span>
                    <span className="text-[10px] text-zinc-500 font-mono block">{a.hex}</span>
                    <span className="text-[10px] text-zinc-400 mt-0.5 block">{a.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Buttons & Interactive Controls */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Layers className="h-4 w-4" />
                <span>02. Components</span>
              </div>
              <h2 className="text-2xl font-bold font-display mt-1">Buttons & Micro-Interactions</h2>
            </div>
            <button
              onClick={() => setButtonLoading(!buttonLoading)}
              className="text-xs font-mono text-zinc-400 hover:text-white"
            >
              Toggle Loading: {buttonLoading ? "ON" : "OFF"}
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-400 uppercase">Variants</span>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" isLoading={buttonLoading}>Primary Velvet Glow</Button>
                <Button variant="secondary" isLoading={buttonLoading}>Secondary Glass</Button>
                <Button variant="outline" isLoading={buttonLoading}>Outline Subtle</Button>
                <Button variant="danger" isLoading={buttonLoading}>Emergency Purge</Button>
                <Button variant="ghost" isLoading={buttonLoading}>Ghost Action</Button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-400 uppercase">Scale Sizes</span>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small (Compact)</Button>
                <Button size="md">Medium (Default)</Button>
                <Button size="lg">Large (Hero CTA)</Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Badges & Compliance Indicators */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              <span>03. Compliance & Status</span>
            </div>
            <h2 className="text-2xl font-bold font-display mt-1">18 U.S.C. § 2257 Badges & Pill Tags</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 space-y-4">
              <h3 className="text-sm font-bold text-white font-display">Federal 2257 Badges</h3>
              <div className="flex flex-wrap gap-3 items-center">
                <ComplianceBadge status="VERIFIED" />
                <ComplianceBadge status="PENDING" />
                <ComplianceBadge status="UNVERIFIED" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 space-y-4">
              <h3 className="text-sm font-bold text-white font-display">Semantic Status Badges</h3>
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="velvet" dot>4K UHD Stream</Badge>
                <Badge variant="emerald" dot>Instant Payout Active</Badge>
                <Badge variant="rose" dot>DMCA In Review</Badge>
                <Badge variant="amber" dot>Paywall Series</Badge>
                <Badge variant="cyan">Bunny Anycast Edge</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: High-Conversion Monetization Inputs & Stat Cards */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Wallet className="h-4 w-4" />
              <span>04. Creator Monetization</span>
            </div>
            <h2 className="text-2xl font-bold font-display mt-1">Tip Presets, Token Steppers & Stat Cards</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 rounded-3xl border border-white/10 bg-zinc-900/40 p-6 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white font-display">Interactive Tip Component</h3>
                <p className="text-xs text-zinc-400 mt-0.5">Quick presets + manual stepper with 10% auto-split</p>
              </div>
              <TokenInput value={tipValue} onChange={setTipValue} />
              <div className="rounded-2xl bg-zinc-950 p-3 text-xs space-y-1 font-mono border border-white/5">
                <div className="flex justify-between text-zinc-400">
                  <span>Creator Receives (90%):</span>
                  <span className="text-emerald-400 font-bold">${(tipValue * 0.9).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Platform Rake (10%):</span>
                  <span className="text-violet-400">${(tipValue * 0.1).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard
                title="Gross Platform Volume (GMV)"
                value="$43,280.00"
                subtitle="Aggregated across 4K streams"
                trend="+24.8% this week"
                trendUp={true}
                icon={<Wallet className="h-4 w-4" />}
              />
              <StatCard
                title="Platform Rake (Cold Treasury)"
                value="$4,328.00"
                subtitle="10% uncompromised protocol cut"
                trend="+12.4% vs last period"
                trendUp={true}
                icon={<Sparkles className="h-4 w-4" />}
              />
              <StatCard
                title="2257 Verified Performers"
                value="24 Primary Records"
                subtitle="Stored in encrypted audit vault"
                trend="100% Federal Compliance"
                trendUp={true}
                icon={<ShieldCheck className="h-4 w-4" />}
              />
              <StatCard
                title="Bunny.net CDN Edge Hits"
                value="98.6% Cache Hit"
                subtitle="114 Global Anycast Edge PoPs"
                trend="24ms TTFB global"
                trendUp={true}
                icon={<Layers className="h-4 w-4" />}
              />
            </div>
          </div>
        </section>

        {/* SECTION 5: Video Card Component */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Eye className="h-4 w-4" />
              <span>05. Media & Streaming</span>
            </div>
            <h2 className="text-2xl font-bold font-display mt-1">4K UHD Video Stream Cards</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoCard
              id="vid-1"
              title="Midnight Atelier: The Visual Sanctuary Masterclass (Episode 1)"
              creatorName="Elena Vox"
              creatorHandle="elena"
              creatorAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
              thumbnailUrl="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"
              duration="18:42"
              views="18.2K"
              is4K={true}
              is2257Verified={true}
              onSelect={() => alert("Selected Episode 1")}
            />
            <VideoCard
              id="vid-2"
              title="Velvet Noir: Acoustic Session with VIP Access Tier"
              creatorName="Mia Sterling"
              creatorHandle="mia"
              creatorAvatar="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
              thumbnailUrl="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
              duration="24:10"
              views="8.9K"
              isLocked={true}
              price={15}
              is4K={true}
              is2257Verified={true}
              onSelect={() => alert("Unlock VIP Session: $15")}
            />
            <VideoCard
              id="vid-3"
              title="Behind The Lens: Underground Electronic Nights"
              creatorName="Kaelen Drake"
              creatorHandle="kaelen"
              creatorAvatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              thumbnailUrl="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
              duration="31:05"
              views="32.4K"
              is4K={true}
              is2257Verified={true}
              onSelect={() => alert("Selected Underground Electronic Nights")}
            />
          </div>
        </section>
      </main>

      {/* Age Gate Modal Test */}
      <AgeGateModal
        isOpen={isAgeGateOpen}
        onConfirm={() => {
          setIsAgeGateOpen(false);
          alert("Age Gate Passed: Adult session certified under 18 U.S.C. § 2257.");
        }}
        onExit={() => setIsAgeGateOpen(false)}
      />
    </div>
  );
}
