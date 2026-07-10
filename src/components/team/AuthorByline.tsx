import Image from "next/image";
import type { TeamMember } from "@/lib/types";
import { TeamAvatar } from "@/components/team/TeamAvatar";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: { ring: "h-9 w-9", initials: "text-xs", img: "36px" },
  md: { ring: "h-12 w-12", initials: "text-sm", img: "48px" },
} as const;

/**
 * Autoren-Byline: kleiner runder Avatar (Foto, Comic-Avatar oder Initialen)
 * plus Name und Rolle. `tone` passt die Textfarben an hellen/dunklen Grund an.
 */
export function AuthorByline({
  author,
  tone = "light",
  size = "sm",
  label,
  compact = false,
  className,
}: {
  author: TeamMember;
  tone?: "light" | "dark";
  size?: "sm" | "md";
  /** Optionaler Präfix, z. B. „Von“. */
  label?: string;
  /** Einzeilig ohne Rolle – für kompakte Kontexte wie Beitragskarten. */
  compact?: boolean;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand to-sky",
          s.ring,
        )}
      >
        {author.image ? (
          <Image
            src={author.image}
            alt={`Porträt von ${author.name}`}
            fill
            className="object-cover"
            sizes={s.img}
          />
        ) : author.avatar ? (
          <TeamAvatar spec={author.avatar} className="h-full w-full" />
        ) : (
          <span className={cn("font-display text-white", s.initials)}>{author.initials}</span>
        )}
      </span>
      <span className="leading-tight">
        <span className={cn("block font-medium", tone === "dark" ? "text-white" : "text-ink")}>
          {label ? `${label} ` : ""}
          {author.name}
        </span>
        {!compact && (
          <span className={cn("block text-xs", tone === "dark" ? "text-white/60" : "text-muted")}>
            {author.role}
          </span>
        )}
      </span>
    </span>
  );
}
