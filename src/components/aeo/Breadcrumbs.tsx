import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

type Crumb = { name: string; url: string };

export function Breadcrumbs({
  items,
  tone = "dark",
  className,
}: {
  items: Crumb[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const full = [{ name: "Start", url: "/" }, ...items];
  return (
    <nav aria-label="Brotkrumen" className={cn("text-sm", className)}>
      <JsonLd data={breadcrumbSchema(full)} />
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-2 gap-y-1",
          tone === "light" ? "text-white/60" : "text-muted",
        )}
      >
        {full.map((item, i) => {
          const last = i === full.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              {last ? (
                <span className={cn("font-medium", tone === "light" ? "text-white" : "text-ink")} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.url}
                    className={cn(
                      "transition-colors hover:text-brand",
                      tone === "light" && "hover:text-white",
                    )}
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="opacity-50">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
