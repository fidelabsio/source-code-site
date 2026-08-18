"use client";

import { useMobileMenu } from "@/hooks/useMobileMenu";

const NAV_LINKS = [
  { href: "/#features", label: "Features", hoverClass: "fl-hd-scp0" },
  { href: "/white-label-showcase", label: "White Label", hoverClass: "fl-hd-scp1" },
  { href: "/founders", label: "Source Code", hoverClass: "fl-hd-scp0" },
  { href: "/#pricing", label: "Pricing", hoverClass: "fl-hd-scp0" },
];

const NAV_DROPDOWNS = [
  {
    label: "Documentation",
    groupLabel: "DOCUMENTATION",
    items: [
      { href: "/documentation", label: "Documentation" },
      { href: "/support", label: "Support" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    label: "About",
    groupLabel: "ABOUT",
    items: [
      { href: "/about", label: "About FIDE Labs" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

function NavLink({ href, label, hoverClass }: { href: string; label: string; hoverClass: string }) {
  return (
    <a href={href} className={hoverClass} style={{ fontSize: "14px", fontWeight: "500", color: "rgb(75, 85, 99)", whiteSpace: "nowrap" }}>
      {label}
    </a>
  );
}

function NavDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="fl-hd-navdd" style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <a href={items[0].href} className="fl-hd-scp0" style={{ fontSize: "14px", fontWeight: "500", color: "rgb(75, 85, 99)", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "6px" }}>
        {`${label} `}
        <span className="fl-hd-dd-caret" style={{ fontSize: "9px", transition: "transform 0.2s", transform: "rotate(0deg)" }}>
          ▼
        </span>
      </a>
      <div className="fl-hd-dd-menu" style={{ position: "absolute", top: "100%", left: "-14px", paddingTop: "14px", transition: "opacity 0.22s ease-out, transform 0.22s ease-out, visibility 0.22s", opacity: "0", visibility: "hidden", transform: "translateY(-6px)" }}>
        <div style={{ minWidth: "186px", background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "12px", padding: "8px", boxShadow: "rgba(13, 21, 38, 0.24) 0px 18px 36px -16px", display: "flex", flexDirection: "column", gap: "2px" }}>
          {items.map((item) => (
            <a key={item.href} href={item.href} className="fl-hd-scp2" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "500", color: "rgb(55, 65, 81)", transition: "background 0.16s, color 0.16s" }}>
              <span style={{ width: "6px", height: "6px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)" }} />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const { open, toggle, close } = useMobileMenu();

  return (
    <header style={{ position: "sticky", top: "0px", zIndex: "50", backdropFilter: "blur(18px) saturate(160%)", transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s", background: "rgba(255, 255, 255, 0.62)", borderBottom: "1px solid rgba(229, 231, 235, 0.55)", boxShadow: "rgba(13, 21, 38, 0.2) 0px 2px 12px -10px" }}>
      <div style={{ maxWidth: "1240px", margin: "0px auto", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(12px, 1.6vw, 24px)" }}>
        <a href="/" style={{ flex: "0 0 auto", display: "flex", alignItems: "center", height: "44px", lineHeight: "0" }}>
          <img src="/assets/404-asset-1.png" alt="FIDELabs" style={{ display: "block", height: "47px", width: "auto", margin: "-1.5px 0px" }} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "clamp(13px, 2.1vw, 36px)", minWidth: "0px", flexWrap: "nowrap" }}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          {NAV_DROPDOWNS.map((dd) => (
            <NavDropdown key={dd.label} label={dd.label} items={dd.items} />
          ))}
        </nav>
        <a href="/checkout" className="fl-hd-scp3 fl-hd-scp4" style={{ flex: "0 0 auto", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 22px", borderRadius: "999px", background: "linear-gradient(135deg, rgb(3, 162, 145), rgb(47, 84, 235))", color: "rgb(255, 255, 255)", fontSize: "14px", fontWeight: "600", boxShadow: "rgba(47, 84, 235, 0.24) 0px 4px 14px", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s" }}>
          Buy Source Code
        </a>
      </div>
      <button className="fl-burger" type="button" aria-label="Menu" aria-expanded={open} onClick={toggle}>
        <span />
        <span />
        <span />
      </button>
      <div className="fl-mobile-menu" data-open={open} style={{ top: "69px", maxHeight: "calc(-69px + 100vh)" }}>
        <nav>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          {NAV_DROPDOWNS.map((dd) => (
            <div key={dd.label}>
              <div className="fl-mm-group">{dd.groupLabel}</div>
              {dd.items.map((item) => (
                <a key={item.href} className="fl-mm-sub" href={item.href} onClick={close}>
                  {item.label}
                </a>
              ))}
            </div>
          ))}
          <a className="fl-mm-cta" href="/checkout" onClick={close}>
            Buy Source Code
          </a>
        </nav>
      </div>
    </header>
  );
}
