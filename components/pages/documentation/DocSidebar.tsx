"use client";

import DocSidebarCategory from "./DocSidebarCategory";
import { DOC_SIDEBAR_CATEGORIES } from "./sidebarConfig";

export default function DocSidebar() {
  return (
    <aside style={{ flex: "0 1 248px", minWidth: "220px", position: "sticky", top: "96px", alignSelf: "flex-start", maxHeight: "calc(-120px + 100vh)", overflowY: "auto", padding: "28px 0px 20px" }}>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgb(156, 163, 175)", pointerEvents: "none", display: "flex" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input type="text" placeholder="Search documentation" className="fl-dc-scp5" defaultValue="" style={{ width: "100%", padding: "10px 12px 10px 34px", borderRadius: "10px", border: "1px solid rgb(229, 231, 235)", background: "rgb(249, 250, 251)", fontFamily: "Geist, system-ui, sans-serif", fontSize: "13px", color: "rgb(13, 21, 38)", outline: "none", transition: "border-color 0.18s, box-shadow 0.18s, background 0.18s" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {DOC_SIDEBAR_CATEGORIES.map((category) => (
          <DocSidebarCategory key={category.title} title={category.title} links={category.links} />
        ))}
      </div>
    </aside>
  );
}
