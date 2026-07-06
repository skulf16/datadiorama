import type { IconKey } from "@/lib/types";

type IconProps = {
  name: IconKey;
  className?: string;
};

/**
 * Outline-Icon-Set im Stil der bestehenden Datadiorama-Seite.
 * Strichbasiert, 24×24, nutzt currentColor – passt sich der Textfarbe an.
 */
const paths: Record<IconKey, React.ReactNode> = {
  support: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <circle cx="12" cy="10.5" r="2.2" />
      <path d="M12 6.4v1.1M12 13.5v1.1M8.4 10.5h1.1M14.5 10.5h1.1M9.5 8l.8.8M13.7 12.2l.8.8M9.5 13l.8-.8M13.7 8.8l.8-.8" />
    </>
  ),
  phone: (
    <>
      <path d="M5.5 3.5h3l1.3 4-1.9 1.4a12 12 0 0 0 5.3 5.3l1.4-1.9 4 1.3v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 3.9 5.2 1.6 1.6 0 0 1 5.5 3.5Z" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="4.5" r="1.9" />
      <circle cx="4.8" cy="17" r="1.9" />
      <circle cx="19.2" cy="17" r="1.9" />
      <circle cx="12" cy="13" r="1.9" />
      <path d="M12 6.4v4.7M10.6 14.4 6.3 16M13.4 14.4 17.7 16M10.4 4.9 6 15.2M13.6 4.9 18 15.2" />
    </>
  ),
  code: (
    <>
      <path d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13.5 5l-3 14" />
    </>
  ),
  workspace: (
    <>
      <rect x="3" y="4.5" width="18" height="14" rx="2" />
      <path d="M3 9h18M6.5 6.6h.01M9 6.6h.01" />
      <path d="M8 18.5v2.5h8v-2.5" />
      <rect x="9.2" y="11.2" width="5.6" height="4.4" rx="1" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  microsoft: (
    <>
      <rect x="3.5" y="3.5" width="7.2" height="7.2" rx="0.6" />
      <rect x="13.3" y="3.5" width="7.2" height="7.2" rx="0.6" />
      <rect x="3.5" y="13.3" width="7.2" height="7.2" rx="0.6" />
      <rect x="13.3" y="13.3" width="7.2" height="7.2" rx="0.6" />
    </>
  ),
  teams: (
    <>
      <path d="M7 9.5a3 3 0 1 1 0-.001ZM4 13.5c0-1.7 1.4-2.8 3-2.8s3 1.1 3 2.8V19H4Z" />
      <circle cx="16" cy="7.5" r="2.4" />
      <path d="M12.5 12.5h7.5c.8 0 1.5.7 1.5 1.5v3a3.5 3.5 0 0 1-3.5 3.5h-2A3.5 3.5 0 0 1 12.5 17Z" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 8.5a14 14 0 0 1 19 0M5.5 11.7a9.5 9.5 0 0 1 13 0M8.6 15a5 5 0 0 1 6.8 0" />
      <circle cx="12" cy="18.6" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  server: (
    <>
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.6" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.6" />
      <path d="M7 7.2h.01M7 16.7h.01M10 7.2h.01M10 16.7h.01" />
      <path d="M17.5 7.2h-1M17.5 16.7h-1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6v5.5c0 4.3 3 7.4 7 9 4-1.6 7-4.7 7-9V6Z" />
      <path d="m9 12 2 2 4-4.2" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.5a4 4 0 0 1-.5-7.97A5 5 0 0 1 16.3 9.3 3.6 3.6 0 0 1 17 18.5Z" />
    </>
  ),
  rocket: (
    <>
      <path d="M5.5 14.5c-1.5.7-2 4-2 4s3.3-.5 4-2" />
      <path d="M9 15s-3-1-3-4 2-6 9-7c-1 7-4 9-7 9 0 0-1 0-1 0Z" />
      <circle cx="14.5" cy="9" r="1.4" />
    </>
  ),
  dots: (
    <>
      <path d="M12 4.5c-4.9 0-8.5 3.1-8.5 7.1 0 2.3 1.2 4.3 3.1 5.6L6 20.5l3.6-1.6c.8.2 1.6.3 2.4.3 4.9 0 8.5-3.1 8.5-7.1S16.9 4.5 12 4.5Z" />
      <path d="M8.5 11.6h.01M12 11.6h.01M15.5 11.6h.01" />
    </>
  ),
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
