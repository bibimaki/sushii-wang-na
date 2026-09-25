import Image from "next/image";

export function Brand({ compact = false }) {
  return (
    <div className={`brand ${compact ? "brand-compact" : ""}`}>
      <div className="brand-logo-shell">
        <Image
          src="/brand/logo.jpg"
          alt="Sushi Wang Na - ซูชิ วังหน้า"
          width={compact ? 58 : 76}
          height={compact ? 68 : 88}
          className="brand-logo"
          priority
        />
      </div>
      <div className="brand-copy">
        <div className="brand-name">SUSHI WANGNA</div>
        <div className="brand-thai">ซูชิ วังหน้า</div>
        {!compact && <div className="brand-subtitle">SUSHI • JAPANESE RESTAURANT</div>}
      </div>
    </div>
  );
}

export function SectionIcon({ type }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "table") {
    return <svg {...common}><rect x="3" y="6" width="18" height="8" rx="2"/><path d="M6 14v5M18 14v5M8 19h8"/><path d="M7 9h10"/></svg>;
  }
  if (type === "kitchen") {
    return <svg {...common}><path d="M6 3v7a3 3 0 0 0 6 0V3M9 13v8"/><path d="M18 3v18M15 7h6"/></svg>;
  }
  if (type === "dashboard") {
    return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 20v-4h7v4"/></svg>;
  }
  if (type === "menu") {
    return <svg {...common}><path d="M4 5h16M4 12h16M4 19h16"/><circle cx="7" cy="5" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="11" cy="19" r="1"/></svg>;
  }
  if (type === "cart") {
    return <svg {...common}><path d="M4 5h2l2 10h9l3-7H7"/><circle cx="10" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg>;
  }
  if (type === "qr") {
    return <svg {...common}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 20h2"/></svg>;
  }
  return <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M8 12h8M12 8v8"/></svg>;
}

export function TitleBlock({ eyebrow, title, description, icon }) {
  return (
    <div className="title-block">
      <div className="title-icon"><SectionIcon type={icon} /></div>
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {description && <p className="muted title-description">{description}</p>}
      </div>
    </div>
  );
}
