"use client";

import type { ReactNode } from "react";
import TocLink from "./TocLink";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const HEADER_OFFSET = 54;

export interface DocTocLink {
  href: string;
  label: string;
}

export default function DocPageShell({
  breadcrumbCategory,
  title,
  subtitle,
  readTime,
  tocLinks,
  children,
  footer,
}: {
  breadcrumbCategory: string;
  title: string;
  subtitle: string;
  readTime: string;
  tocLinks: DocTocLink[];
  children: ReactNode;
  footer?: ReactNode;
}) {
  const tocIds = tocLinks.map((link) => link.href.slice(1));
  const activeId = useScrollSpy(tocIds, HEADER_OFFSET);

  return (
    <>
      <div style={{ flex: "1 1 520px", minWidth: "0px", padding: "36px 0px 0px" }}>
        <div style={{ transition: "opacity 0.2s, transform 0.2s", opacity: "1", transform: "translateY(0px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.4px", color: "rgb(156, 163, 175)", marginBottom: "14px" }}>
            {"Documentation "}
            <span style={{ color: "rgb(209, 213, 219)" }}>/</span>
            {" "}
            <span style={{ color: "rgb(13, 148, 136)" }}>
              <span className="sc-interp">{breadcrumbCategory}</span>
            </span>
          </div>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "36px", lineHeight: "1.12", letterSpacing: "-1.4px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
            <span className="sc-interp">{title}</span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "rgb(107, 114, 128)", margin: "0px 0px 8px", maxWidth: "720px" }}>
            <span className="sc-interp">{subtitle}</span>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "12.5px", color: "rgb(156, 163, 175)", paddingBottom: "24px", borderBottom: "1px solid rgb(243, 244, 246)", marginBottom: "8px" }}>
            <span className="sc-interp">{readTime}</span>
          </div>
          {children}
          {footer}
        </div>
      </div>
      <aside style={{ flex: "0 1 196px", minWidth: "170px", position: "sticky", top: "96px", alignSelf: "flex-start", padding: "36px 0px 20px" }}>
        <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.8px", color: "rgb(156, 163, 175)", marginBottom: "14px" }}>
          ON THIS PAGE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", borderLeft: "1px solid rgb(229, 231, 235)" }}>
          {tocLinks.map((link) => (
            <TocLink key={link.href} href={link.href} label={link.label} active={link.href.slice(1) === activeId} />
          ))}
        </div>
      </aside>
    </>
  );
}
