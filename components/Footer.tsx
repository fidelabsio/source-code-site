const COLUMNS = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/white-label-showcase", label: "White Label" },
      { href: "/#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { href: "/documentation", label: "Documentation" },
      { href: "/support", label: "Support" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
];

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div style={{ flex: "1 1 118px", minWidth: "112px" }}>
      <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "13px", fontWeight: "700", letterSpacing: "0.4px", color: "rgb(255, 255, 255)", marginBottom: "16px" }}>
        <span className="sc-interp">{title}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
        {links.map((link, i) => (
          <a key={`${link.href}-${i}`} href={link.href} className="fl-ft-scp7" style={{ fontSize: "13.5px", color: "rgb(156, 163, 175)" }}>
            <span className="sc-interp">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "rgb(13, 21, 38)", padding: "64px 32px 32px", color: "rgb(156, 163, 175)" }}>
      <div style={{ maxWidth: "1160px", margin: "0px auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "40px 32px" }}>
        <div style={{ flex: "1 1 230px", minWidth: "200px" }}>
          <div style={{ display: "flex", alignItems: "center", height: "24px", marginBottom: "16px" }}>
            <img src="/assets/404-asset-0.png" alt="FIDELabs" style={{ display: "block", height: "34px", width: "auto", marginLeft: "-2px" }} />
          </div>
          <p style={{ fontSize: "13.5px", lineHeight: "1.7", maxWidth: "300px", margin: "0px" }}>
            Production-ready Shopify app source code with a commercial white-label licence. One codebase, every brand.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "18px" }}>
            <span style={{ flex: "0 0 auto", display: "flex", color: "rgb(156, 163, 175)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </span>
            <a href="mailto:support@fidelabs.io" className="fl-ft-scp6" style={{ fontSize: "14px", color: "inherit", transition: "color 0.18s" }}>
              support@fidelabs.io
            </a>
          </div>
        </div>
        {COLUMNS.map((col) => (
          <FooterColumn key={col.title} title={col.title} links={col.links} />
        ))}
      </div>
      <div style={{ maxWidth: "1160px", margin: "48px auto 0px", paddingTop: "24px", borderTop: "1px solid rgb(31, 41, 55)", display: "flex", justifyContent: "center", textAlign: "center", gap: "24px", flexWrap: "wrap", fontSize: "12.5px" }}>
        <span style={{ whiteSpace: "nowrap" }}>
          © 2026 Fide Labs. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
