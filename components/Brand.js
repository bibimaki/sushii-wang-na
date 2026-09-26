"use client";

import { useState } from "react";

const LOGO = "/brand/logo.png";

export function Brand({ compact = false }) {
  const [logoSrc, setLogoSrc] = useState(LOGO);

  return (
    <div
      className={compact ? "brand brand-compact" : "brand"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: compact ? "flex-start" : "center",
        gap: compact ? "12px" : "0",
        flexDirection: compact ? "row" : "column",
        width: "100%",
      }}
    >
      <img
        src={logoSrc}
        alt={
          compact
            ? "Sushi Wang Na"
            : "Sushi Wang Na - ซูชิ วังหน้า"
        }
        width={compact ? 64 : 420}
        height={compact ? 64 : 420}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        onError={() => {
          if (logoSrc !== "/brand/logo.png.png") {
            setLogoSrc("/brand/logo.png.png");
          }
        }}
        style={{
          display: "block",
          width: compact ? "64px" : "420px",
          height: compact ? "64px" : "420px",
          maxWidth: "100%",
          objectFit: "contain",
          objectPosition: "center",
          imageRendering: "auto",
          filter: "none",
          opacity: 1,
          flexShrink: 0,
        }}
      />

      <div
        className="brand-text"
        style={{
          textAlign: compact ? "left" : "center",
          marginTop: compact ? "0" : "8px",
          lineHeight: 1.1,
        }}
      >
        <div
          className="brand-name"
          style={{
            fontWeight: 800,
            letterSpacing: "1.5px",
            fontSize: compact ? "16px" : "18px",
            lineHeight: 1.2,
          }}
        >
          SUSHI WANGNA
        </div>

        <div
          className="brand-thai"
          style={{
            marginTop: "4px",
            fontSize: compact ? "14px" : "15px",
            lineHeight: 1.2,
          }}
        >
          ซูชิ วังหน้า
        </div>

        {!compact && (
          <div
            style={{
              marginTop: "7px",
              fontSize: "8px",
              letterSpacing: "2px",
              fontWeight: 700,
              opacity: 0.65,
            }}
          >
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
    "aria-hidden": true,
  };

  switch (type) {
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h10" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      );

    case "qr":
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

    case "table":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="8" rx="2" />
          <path d="M7 15v4" />
          <path d="M17 15v4" />
          <path d="M6 10h12" />
        </svg>
      );

    case "kitchen":
      return (
        <svg {...common}>
          <path d="M8 3v8" />
          <path d="M5 3v5a3 3 0 0 0 6 0V3" />
          <path d="M8 11v10" />
          <path d="M17 3v18" />
          <path d="M17 3c2 2 2 5 0 7" />
        </svg>
      );

    case "dashboard":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
