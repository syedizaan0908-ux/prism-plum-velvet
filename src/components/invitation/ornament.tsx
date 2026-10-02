import { cn } from "@/lib/cn";

export function IslamicDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 32"
      className={cn("h-7 w-56 text-gold sm:w-64", className)}
      fill="none"
      aria-hidden="true"
    >
      <path d="M8 16 H108" stroke="currentColor" strokeWidth="0.7" />
      <path d="M172 16 H272" stroke="currentColor" strokeWidth="0.7" />
      <path
        d="M118 16 H128"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeDasharray="2 3"
      />
      <path
        d="M152 16 H162"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeDasharray="2 3"
      />
      <rect
        x="128"
        y="4"
        width="24"
        height="24"
        transform="rotate(45 140 16)"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="color-mix(in oklab, currentColor 12%, transparent)"
      />
      <rect
        x="134"
        y="10"
        width="12"
        height="12"
        transform="rotate(45 140 16)"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <circle cx="140" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function Khatam({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-8 text-gold", className)}
      aria-hidden="true"
    >
      <g
        fill="color-mix(in oklab, currentColor 16%, transparent)"
        stroke="currentColor"
        strokeWidth="1.1"
      >
        <rect x="12" y="12" width="24" height="24" />
        <rect x="12" y="12" width="24" height="24" transform="rotate(45 24 24)" />
      </g>
    </svg>
  );
}

export function PatternBg() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full text-dusty opacity-[0.16]"
      aria-hidden="true"
    >
      <defs>
        <pattern id="khatam-tile" width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.55">
            <rect x="24" y="24" width="24" height="24" />
            <rect
              x="24"
              y="24"
              width="24"
              height="24"
              transform="rotate(45 36 36)"
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#khatam-tile)" />
    </svg>
  );
}

export function CornerMarks({ className }: { className?: string }) {
  return (
    <span className={cn("pointer-events-none absolute inset-3", className)} aria-hidden="true">
      <span className="absolute top-0 left-0 size-4 border-t border-l border-gold/70" />
      <span className="absolute top-0 right-0 size-4 border-t border-r border-gold/70" />
      <span className="absolute bottom-0 left-0 size-4 border-b border-l border-gold/70" />
      <span className="absolute bottom-0 right-0 size-4 border-b border-r border-gold/70" />
    </span>
  );
}
