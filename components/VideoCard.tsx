"use client";

import React from "react";
import { Play, Lock, Eye, Clock, ShieldCheck } from "lucide-react";
import { clsx } from "clsx";

export interface VideoCardProps {
  id: string;
  title: string;
  creatorName: string;
  creatorHandle: string;
  creatorAvatar?: string;
  thumbnailUrl: string;
  duration?: string;
  views?: string;
  isLocked?: boolean;
  price?: number;
  is4K?: boolean;
  is2257Verified?: boolean;
  onSelect?: () => void;
  className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  creatorName,
  creatorHandle,
  creatorAvatar,
  thumbnailUrl,
  duration = "14:20",
  views = "12.4K",
  isLocked = false,
  price,
  is4K = true,
  is2257Verified = true,
  onSelect,
  className,
}) => {
  return (
    <div
      onClick={onSelect}
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-950/40 transition-all duration-300 cursor-pointer",
        className
      )}
    >
      {/* Thumbnail Aspect Ratio */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80" />

        {/* Quality & Duration Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          {is4K && (
            <span className="rounded-md bg-black/70 backdrop-blur-md px-1.5 py-0.5 text-[9px] font-black text-violet-300 border border-violet-500/30 font-mono">
              4K UHD
            </span>
          )}
          {isLocked && (
            <span className="flex items-center gap-1 rounded-md bg-amber-500/90 text-black px-1.5 py-0.5 text-[9px] font-extrabold shadow-sm">
              <Lock className="h-2.5 w-2.5" />
              <span>{price ? `$${price}` : "EXCLUSIVE"}</span>
            </span>
          )}
        </div>

        {duration && (
          <div className="absolute bottom-2.5 right-2.5 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-mono font-semibold text-white backdrop-blur-md">
            {duration}
          </div>
        )}

        {/* Hover Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-pink-600 text-white shadow-xl shadow-violet-600/50 transform group-hover:scale-110 transition-transform">
            <Play className="h-5 w-5 fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Meta Content */}
      <div className="flex flex-col flex-1 p-4 space-y-2.5">
        <h3 className="text-xs font-bold text-white line-clamp-2 leading-snug group-hover:text-violet-300 transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px]">
          <div className="flex items-center gap-2">
            {creatorAvatar ? (
              <img
                src={creatorAvatar}
                alt={creatorName}
                className="h-5 w-5 rounded-full object-cover border border-white/10"
              />
            ) : (
              <div className="h-5 w-5 rounded-full bg-violet-600/30 text-violet-300 flex items-center justify-center font-bold text-[9px]">
                {creatorName.charAt(0)}
              </div>
            )}
            <span className="font-semibold text-zinc-300 hover:text-white truncate max-w-[110px]">
              {creatorName}
            </span>
            {is2257Verified && (
              <span title="2257 Verified" className="shrink-0 flex items-center">
                <ShieldCheck className="h-3 w-3 text-emerald-400" />
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px]">
            <span>{views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};
