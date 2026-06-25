import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  center = false,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  tone?: "brand" | "light";
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        center && "eyebrow-center",
        tone === "light" && "text-sky-400",
        className,
      )}
    >
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  titleClassName?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow center={align === "center"} tone={tone === "light" ? "light" : "brand"}>
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        className={cn(
          "text-[clamp(2rem,4.5vw,3.4rem)]",
          tone === "light" ? "text-white" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-[1.05rem] leading-relaxed",
            tone === "light" ? "text-white/70" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
