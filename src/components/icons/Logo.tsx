import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  withSubline?: boolean;
  className?: string;
};

/**
 * Offizielles Datadiorama-Logo (SVG, lokal aus public/).
 * Für dunkle Hintergründe (variant="light") wird das farbige SVG per
 * CSS-Filter in Weiß dargestellt, da keine helle Logo-Variante existiert.
 */
export function Logo({ variant = "dark", withSubline = true, className }: LogoProps) {
  const subColor = variant === "light" ? "rgba(255,255,255,0.62)" : "#5a6178";

  return (
    <span className={cn("inline-flex select-none flex-col", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/datadiorama-logo.svg"
        alt="datadiorama"
        width={206}
        height={36}
        className={cn(
          "h-9 w-auto",
          variant === "light" && "[filter:brightness(0)_invert(1)]",
        )}
      />
      {withSubline && (
        <span
          className="mt-1.5 font-mono text-[0.5rem] uppercase tracking-[0.2em]"
          style={{ color: subColor }}
        >
          systemhaus &amp; softwareentwicklung
        </span>
      )}
    </span>
  );
}
