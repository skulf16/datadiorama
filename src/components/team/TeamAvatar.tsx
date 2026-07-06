import type { AvatarSpec } from "@/lib/types";

const INK = "#1f2437";

/**
 * Gezeichneter Comic-Avatar (flacher Illustrationsstil) – deterministisch
 * aus dem AvatarSpec eines Teammitglieds gerendert, solange keine echten
 * Fotos vorliegen. Wird auf dem Farbverlauf der Teamkarte platziert.
 */
export function TeamAvatar({ spec, className }: { spec: AvatarSpec; className?: string }) {
  const { skin, hair, hairColor, shirt, glasses, beard } = spec;

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {/* Lange Frisuren liegen hinter Kopf & Schultern */}
      {hair === "long" && (
        <path
          d="M32 96 32 46 C32 21 45 14 60 14 C75 14 88 21 88 46 L88 96 C79 103 41 103 32 96 Z"
          fill={hairColor}
        />
      )}
      {hair === "bob" && (
        <path
          d="M33 74 C31 30 89 30 87 74 C87 82 79 84 76 78 L76 54 C70 46 50 46 44 54 L44 78 C41 84 33 82 33 74 Z"
          fill={hairColor}
        />
      )}

      {/* Schultern / Shirt */}
      <path d="M18 120 C18 97 37 87 60 87 C83 87 102 97 102 120 Z" fill={shirt} />

      {/* Hals mit weichem Schatten */}
      <path d="M52 66 h16 v16 a8 8 0 0 1 -16 0 Z" fill={skin} />
      <path d="M52 66 h16 v7 c-4 3 -12 3 -16 0 Z" fill="rgba(0,0,0,0.08)" />

      {/* Ohren & Kopf */}
      <circle cx="36.5" cy="53" r="5" fill={skin} />
      <circle cx="83.5" cy="53" r="5" fill={skin} />
      <ellipse cx="60" cy="50" rx="23" ry="25" fill={skin} />

      {/* Bart vor dem Kopf, hinter dem Mund */}
      {beard && (
        <path
          d="M39 52 C39 72 47 80 60 80 C73 80 81 72 81 52 C81 63 73 68 60 68 C47 68 39 63 39 52 Z"
          fill={hairColor}
        />
      )}

      {/* Frisuren (vorderer Teil) */}
      {hair === "short" && (
        <path
          d="M37 48 C37 25 47 19 60 19 C73 19 83 25 83 48 C79 38 71 33 60 33 C49 33 41 38 37 48 Z"
          fill={hairColor}
        />
      )}
      {hair === "buzz" && (
        <path
          d="M37 46 C37 25 47 20 60 20 C73 20 83 25 83 46 C80 35 71 30 60 30 C49 30 40 35 37 46 Z"
          fill={hairColor}
        />
      )}
      {hair === "side" && (
        <path
          d="M37 48 C36 24 48 17 62 19 C75 21 84 27 83 48 C82 36 74 31 64 31 C57 31 46 35 42 42 C39 45 38 46 37 48 Z"
          fill={hairColor}
        />
      )}
      {hair === "curly" && (
        <g fill={hairColor}>
          <path d="M37 46 C37 26 47 20 60 20 C73 20 83 26 83 46 C79 37 71 33 60 33 C49 33 41 37 37 46 Z" />
          <circle cx="42" cy="34" r="7.5" />
          <circle cx="52" cy="27" r="8" />
          <circle cx="62" cy="25" r="8" />
          <circle cx="72" cy="28" r="7.5" />
          <circle cx="80" cy="36" r="7" />
        </g>
      )}
      {hair === "bald" && (
        <g fill={hairColor}>
          <ellipse cx="39" cy="55" rx="3.5" ry="8" />
          <ellipse cx="81" cy="55" rx="3.5" ry="8" />
        </g>
      )}
      {hair === "long" && (
        <path
          d="M36 46 C36 24 48 18 60 18 C72 18 84 24 84 46 C80 34 72 30 66 30 C62 30 61 32 60 34 C59 32 58 30 54 30 C48 30 40 34 36 46 Z"
          fill={hairColor}
        />
      )}
      {hair === "bob" && (
        <path
          d="M37 48 C37 25 47 19 60 19 C73 19 83 25 83 48 C79 37 70 33 60 33 C50 33 41 37 37 48 Z"
          fill={hairColor}
        />
      )}
      {hair === "bun" && (
        <g fill={hairColor}>
          <circle cx="60" cy="15" r="8" />
          <path d="M37 48 C37 24 47 18 60 18 C73 18 83 24 83 48 C80 36 70 32 60 32 C50 32 40 36 37 48 Z" />
        </g>
      )}
      {hair === "fringe" && (
        <path
          d="M37 48 C37 24 47 18 60 18 C73 18 83 24 83 48 L77 39 L72 44 L66 38 L60 44 L54 38 L48 44 L43 39 Z"
          fill={hairColor}
        />
      )}

      {/* Brauen, Augen, Nase, Mund, Wangen */}
      <g stroke={hairColor} strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path d="M45 43.5 Q51 40 56 43" />
        <path d="M64 43 Q69 40 75 43.5" />
      </g>
      <circle cx="51" cy="51" r="2.7" fill={INK} />
      <circle cx="69" cy="51" r="2.7" fill={INK} />
      {glasses && (
        <g stroke={INK} strokeWidth="2" fill="none" opacity="0.85">
          <circle cx="51" cy="51" r="7.5" />
          <circle cx="69" cy="51" r="7.5" />
          <path d="M58.5 51 h3 M43.5 50 l-6 -2 M76.5 50 l6 -2" />
        </g>
      )}
      <path d="M60 51 q2.5 5 -0.5 8" stroke="rgba(0,0,0,0.18)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M52 63.5 Q60 70 68 63.5" stroke={beard ? "#7c3f31" : "#a2543f"} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {!beard && (
        <g fill="#e8837a" opacity="0.28">
          <circle cx="42.5" cy="58" r="3.4" />
          <circle cx="77.5" cy="58" r="3.4" />
        </g>
      )}
    </svg>
  );
}
