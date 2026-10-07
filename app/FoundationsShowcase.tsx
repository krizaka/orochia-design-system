"use client";

import React, { useState } from "react";
import { Inbox } from "lucide-react";
import { Avatar, Button, EmptyState, Field, Input, Modal, OrochiaLogo, Select, Tabs, Textarea } from "../components";

/** Showcase of the foundations added for the apps: brand mark, forms, tabs, dialog, empty states, avatars. */
export function FoundationsShowcase() {
  const [tab, setTab] = useState("library");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <section className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-violet-400">Foundations</span>
        <h2 className="text-2xl font-bold font-display mt-1">Brand mark, forms, tabs, dialogs & empty states</h2>
        <p className="mt-1 text-sm text-zinc-400">The building blocks the Orochia web app and the admin console share.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
          <p className="mb-4 text-xs font-mono uppercase tracking-wider text-zinc-500">OrochiaLogo · 128 / 64 / 32 / still</p>
          <div className="flex items-center gap-6">
            <OrochiaLogo size={128} />
            <OrochiaLogo size={64} />
            <OrochiaLogo size={32} />
            <OrochiaLogo size={64} animated={false} />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 space-y-4">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Field · Input · Select · Textarea</p>
          <Field label="Video title" hint="3 to 255 characters" error={title && title.length < 3 ? "At least 3 characters" : undefined}>
            {(p) => <Input {...p} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tokyo Neon Horizons" />}
          </Field>
          <Field label="Visibility">
            {(p) => (
              <Select {...p} defaultValue="PUBLIC">
                <option value="PUBLIC">Public</option>
                <option value="APPROVED_FOLLOWERS_ONLY">Approved followers</option>
                <option value="TIPPED_UNLOCKED">Paid unlock</option>
              </Select>
            )}
          </Field>
          <Field label="Description">{(p) => <Textarea {...p} placeholder="Credits, context…" />}</Field>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 space-y-4">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Tabs (arrow keys) · Modal</p>
          <Tabs
            idPrefix="demo"
            value={tab}
            onChange={setTab}
            items={[
              { id: "library", label: "Library", count: 12 },
              { id: "network", label: "Network", count: 3 },
              { id: "playlists", label: "Playlists" },
            ]}
          />
          <div role="tabpanel" id={`demo-panel-${tab}`} aria-labelledby={`demo-tab-${tab}`} className="text-sm text-zinc-400">
            Panel: <strong className="text-white">{tab}</strong>
          </div>
          <Button variant="secondary" onClick={() => setOpen(true)}>Open the dialog</Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Delete this video?"
            footer={
              <>
                <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
              </>
            }
          >
            It disappears from the platform; the earnings history is kept.
          </Modal>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 space-y-4">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Avatar · EmptyState</p>
          <div className="flex items-center gap-3">
            <Avatar name="Elena Vox" size="lg" verified />
            <Avatar name="Mia Sterling" />
            <Avatar name="Alex Vance" size="sm" />
          </div>
          <EmptyState icon={<Inbox className="h-5 w-5" />} title="No playlist yet" action={<Button size="sm">Create one</Button>}>
            Use “Save” on any video to start a playlist.
          </EmptyState>
        </div>
      </div>
    </section>
  );
}
