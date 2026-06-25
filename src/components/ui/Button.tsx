import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "white" | "outline" | "outline-dark" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_12px_30px_-12px_rgba(0,88,226,0.7)] hover:bg-brand-600 hover:shadow-[0_18px_40px_-14px_rgba(0,88,226,0.85)] hover:-translate-y-0.5",
  white:
    "bg-white text-navy shadow-[0_12px_30px_-14px_rgba(5,9,43,0.5)] hover:bg-brand-50 hover:-translate-y-0.5",
  outline:
    "border border-ink/15 text-ink hover:border-brand hover:text-brand hover:bg-brand-50",
  "outline-dark":
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
  ghost: "text-brand hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

function Arrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow && <Arrow />}
    </>
  );

  if ("href" in props && props.href) {
    const external = props.href.startsWith("http") || props.href.startsWith("mailto:") || props.href.startsWith("tel:");
    if (external) {
      return (
        <a href={props.href} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  // Nur gültige Button-HTML-Attribute an das DOM weitergeben.
  const {
    children: _c,
    variant: _v,
    size: _s,
    withArrow: _a,
    className: _cn,
    type = "button",
    ...rest
  } = props as ButtonAsButton;
  void _c;
  void _v;
  void _s;
  void _a;
  void _cn;
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
