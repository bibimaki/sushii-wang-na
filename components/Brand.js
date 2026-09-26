"use client";

export function Brand({ compact = false }) {
  return (
    <div className={compact ? "brand brand-compact" : "brand"}>
      <img
        src="/brand/logo.png"
        alt="Sushi Wang Na"
        className={compact ? "brand-logo brand-logo-small" : "brand-logo"}
      />

      <div className="brand-text">
        <div className="brand-name">SUSHI WANGNA</div>
        <div className="brand-thai">ซูชิ วังหน้า</div>

        {!compact && (
          <div className="brand-subtitle">
            SUSHI • JAPANESE RESTAURANT
          </div>
        )}
      </div>
    </div>
  );
}

export function SectionIcon({ type }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "menu") {
    return (
      <svg {...common}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h10" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    );
  }

  if (type === "qr") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="6" height="6" />
        <rect x="14" y="4" width="6" height="6" />
        <rect x="4" y="14" width="6" height="6" />
        <path d="M14 14h3v3h-3z" />
        <path d="M20 17v3h-3" />
        <path d="M14 20h2" />
      </svg>
    );
  }

  if (type === "table") {
    return (
      <svg {...common}>
        <rect x="4" y="7" width="16" height="8" rx="2" />
        <path d="M7 15v4" />
        <path d="M17 15v4" />
      </svg>
    );
  }

  if (type === "kitchen") {
    return (
      <svg {...common}>
        <path d="M8 3v8" />
        <path d="M5 3v5a3 3 0 0 0 6 0V3" />
        <path d="M8 11v10" />
        <path d="M17 3v18" />
      </svg>
    );
  }

  if (type === "dashboard") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}
