"use client";

import React, { useState } from "react";
import { ShieldAlert, Check, X, ShieldCheck } from "lucide-react";
import { Button } from "./Button";

export interface AgeGateModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onExit: () => void;
}

export const AgeGateModal: React.FC<AgeGateModalProps> = ({
  isOpen,
  onConfirm,
  onExit,
}) => {
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreed2257, setAgreed2257] = useState(false);

  if (!isOpen) return null;

  const canProceed = agreedTerms && agreed2257;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
      <div className="w-full max-w-md rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 space-y-5 shadow-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-lg shadow-rose-500/20">
          <ShieldAlert className="h-7 w-7" />
        </div>

        <div className="space-y-1.5">
          <h2 className="text-xl font-black text-white font-display">Age Verification & Sanctuary Gate</h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Orochia hosts artistic, sensual, and adult creator expressions. You must be at least 18 years of age (or age of legal majority) to enter.
          </p>
        </div>

        <div className="space-y-2.5 text-left rounded-2xl border border-white/5 bg-zinc-900/60 p-3.5 text-xs">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              className="mt-0.5 rounded border-white/20 bg-zinc-800 accent-violet-600"
            />
            <span className="text-zinc-300 text-[11px] leading-snug">
              I certify under penalty of perjury that I am 18 years of age or older and consent to viewing sexually explicit content.
            </span>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed2257}
              onChange={(e) => setAgreed2257(e.target.checked)}
              className="mt-0.5 rounded border-white/20 bg-zinc-800 accent-violet-600"
            />
            <span className="text-zinc-300 text-[11px] leading-snug">
              I acknowledge all performers depicted are verified under 18 U.S.C. § 2257 record-keeping requirements.
            </span>
          </label>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button variant="secondary" className="w-1/2" onClick={onExit}>
            Exit Platform
          </Button>
          <Button
            variant="primary"
            className="w-1/2"
            disabled={!canProceed}
            onClick={onConfirm}
          >
            I Am 18+ Enter
          </Button>
        </div>
      </div>
    </div>
  );
};
