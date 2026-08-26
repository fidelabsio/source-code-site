"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarLink } from "./sidebarConfig";

export default function DocSidebarCategory({
  title,
  links,
}: {
  title: string;
  links: SidebarLink[];
}) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div>
      <button
        className="fl-dc-scp1"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          padding: "8px 10px",
          borderRadius: "8px",
          background: "transparent",
          borderWidth: "medium",
          borderStyle: "none",
          borderColor: "currentcolor",
          borderImage: "none",
          cursor: "pointer",
          fontFamily: "\"Bricolage Grotesque\", sans-serif",
          fontSize: "12px",
          fontWeight: "700",
          letterSpacing: "0.6px",
          color: "rgb(107, 114, 128)",
          transition: "background 0.18s, color 0.18s",
        }}
      >
        <span className="sc-interp">{title}</span>
        {"\n"}
        <span style={{ fontSize: "8px", transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)", transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}>
          ▼
        </span>
      </button>
      <div style={{ display: "grid", transition: "grid-template-rows 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.24s", gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? "1" : "0" }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", padding: "4px 0px 8px 10px", marginLeft: "9px", borderLeft: "1px solid rgb(229, 231, 235)" }}>
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "fl-dc-scp1" : "fl-dc-scp6"}
                  style={{
                    display: "block",
                    position: "relative",
                    textAlign: "left",
                    padding: "7px 11px",
                    borderRadius: "7px",
                    textDecoration: "none",
                    fontFamily: "Geist, system-ui, sans-serif",
                    fontSize: "12.5px",
                    lineHeight: "1.45",
                    transition: "background 0.18s, color 0.18s",
                    background: active ? "rgb(240, 253, 250)" : "transparent",
                    color: active ? "rgb(13, 148, 136)" : "rgb(107, 114, 128)",
                    fontWeight: active ? "600" : "500",
                  }}
                >
                  <span className="sc-interp">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
