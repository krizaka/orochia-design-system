import { SocialIcon } from "@krizaka/orochia-design-system";

const LINKS = [
  { network: "instagram", name: "Instagram", href: "https://instagram.com/" },
  { network: "tiktok", name: "TikTok", href: "https://tiktok.com/" },
  { network: "youtube", name: "YouTube", href: "https://youtube.com/" },
  { network: "x", name: "X", href: "https://x.com/" },
];

// A creator's networks on their profile header: each glyph inside a link that names it.
export default function ProfileLinks() {
  return (
    <nav aria-label="Elena's other networks" className="flex gap-1">
      {LINKS.map((link) => (
        <a key={link.network} href={link.href} aria-label={link.name} className="rounded-full p-2 text-fg-secondary hover:bg-surface-2 hover:text-fg">
          <SocialIcon network={link.network} className="h-5 w-5" />
        </a>
      ))}
    </nav>
  );
}
