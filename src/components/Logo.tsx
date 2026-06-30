/**
 * Pixel Walk logo, recreated as a transparent SVG so it looks crisp on the
 * dark theme (the original raster had a white background).
 * Elements mirror the brand mark: scattered pixels + an open gear with a
 * workflow node-tree inside. Two-tone wordmark: "Pixel" light, "Walk" blue.
 */
export function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-[30px] w-auto shrink-0" />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-white">Pixel</span>{" "}
          <span className="text-sky-400">Walk</span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 32"
      fill="none"
      role="img"
      aria-label="Pixel Walk"
      className={className}
    >
      <defs>
        <linearGradient id="pw-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2f6bff" />
        </linearGradient>
      </defs>

      {/* Disintegrating pixels */}
      <g fill="url(#pw-grad)">
        <rect x="2" y="7" width="4" height="4" rx="1" opacity="0.85" />
        <rect x="8" y="3" width="5" height="5" rx="1.2" />
        <rect x="1" y="15" width="3" height="3" rx="0.8" opacity="0.6" />
        <rect x="6" y="12" width="6" height="6" rx="1.4" />
        <rect x="3" y="21" width="4" height="4" rx="1" opacity="0.85" />
        <rect x="11" y="20" width="5" height="5" rx="1.2" opacity="0.6" />
      </g>

      {/* Gear */}
      <g transform="translate(21,3) scale(1.08)">
        <path
          fill="url(#pw-grad)"
          d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z"
        />
      </g>

      {/* Hollow center */}
      <circle cx="34" cy="16" r="6.6" fill="#0a0f1a" />

      {/* Workflow node-tree */}
      <path
        d="M30.5 16 H33.5 M33.5 12.5 V19.5 M33.5 12.5 H35.5 M33.5 19.5 H35.5"
        stroke="#7dd3fc"
        strokeWidth="0.9"
        fill="none"
        strokeLinecap="round"
      />
      <g fill="#7dd3fc">
        <rect x="27.5" y="14.5" width="3" height="3" rx="0.6" />
        <rect x="35.5" y="11" width="3" height="3" rx="0.6" />
        <rect x="35.5" y="18" width="3" height="3" rx="0.6" />
      </g>
    </svg>
  );
}
