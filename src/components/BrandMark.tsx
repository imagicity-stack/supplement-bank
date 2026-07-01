/**
 * A crafted shield mark echoing the Supplement Bank logo (green shield + "SB"
 * monogram + dumbbell). Used as a fallback wherever an uploaded logo isn't
 * suitable (e.g. on dark sections), and next to the wordmark before the client
 * uploads their real logo in Studio.
 */
export function BrandMark({ className }: { className?: string }) {
  const shield =
    "M24 2 L45 9.5 V25.5 C45 38.5 35.7 47.8 24 51 C12.3 47.8 3 38.5 3 25.5 V9.5 Z";
  return (
    <svg
      viewBox="0 0 48 53"
      className={className}
      role="img"
      aria-label="Supplement Bank"
      fill="none"
    >
      <defs>
        <linearGradient id="sbGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#63C733" />
          <stop offset="1" stopColor="#3C8E1A" />
        </linearGradient>
      </defs>
      <path d={shield} fill="url(#sbGrad)" />
      <path d={shield} fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="1" />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontFamily="Archivo, system-ui, sans-serif"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
        fill="#0B0E0C"
      >
        SB
      </text>
      {/* dumbbell */}
      <rect x="17" y="36.5" width="14" height="2.6" rx="1.3" fill="#0B0E0C" opacity="0.9" />
      <rect x="13.5" y="34.5" width="3" height="6.6" rx="1" fill="#0B0E0C" opacity="0.9" />
      <rect x="31.5" y="34.5" width="3" height="6.6" rx="1" fill="#0B0E0C" opacity="0.9" />
    </svg>
  );
}
