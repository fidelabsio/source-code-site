"use client";

import { useState } from "react";
import { faqCategories, totalFaqCount } from "@/lib/faqData";
import { renderAnswer } from "@/lib/richText";
import { useFaqSearch } from "@/hooks/useFaqSearch";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const HEADER_OFFSET = 69;
const FAQ_SLUGS = faqCategories.map((c) => c.slug);

export default function FaqPage() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());
  const { query, setQuery, normalizedQuery, visibleCategories, matchCount } = useFaqSearch(faqCategories);
  const activeSlug = useScrollSpy(FAQ_SLUGS, HEADER_OFFSET);

  function toggle(id: number) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <main style={{ background: "#fff" }}>
      <section
        style={{
          background: "linear-gradient(180deg, #F9FAFB 0%, #fff 100%)",
          padding: "64px 32px 36px",
          textAlign: "center",
          borderBottom: "1px solid #F3F4F6",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: "#F0F3FF",
              color: "#2F54EB",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 0.8,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                flex: "0 0 auto",
                borderRadius: 999,
                background: "#2F54EB",
                boxShadow: "0 0 0 3px rgba(47,84,235,.133), 0 0 9px rgba(47,84,235,.733)",
              }}
            />
            FAQ
          </span>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: 40,
              letterSpacing: -1.4,
              margin: "0 0 12px",
              color: "#0D1526",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #2F54EB 0%, #03A291 25%, #2F54EB 50%, #03A291 75%, #2F54EB 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Questions
            </span>
          </h1>
          <p style={{ fontSize: 15, color: "#6B7280", margin: "0 auto", maxWidth: 560, lineHeight: 1.6 }}>
            {totalFaqCount} answers covering licensing, deployment, customization, support, and legal terms for the
            FIDE Source Code Product.
          </p>

          <div style={{ marginTop: 28, maxWidth: 460, marginLeft: "auto", marginRight: "auto" }}>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the FAQ…"
              style={{
                width: "100%",
                padding: "13px 18px",
                borderRadius: 999,
                border: "1px solid #D1D5DB",
                background: "#fff",
                fontSize: 14,
                fontFamily: "Geist, sans-serif",
                color: "#0D1526",
                outline: "none",
              }}
            />
          </div>
          {normalizedQuery && (
            <p style={{ marginTop: 12, fontSize: 13, color: "#6B7280" }}>
              {matchCount} result{matchCount === 1 ? "" : "s"} for &ldquo;{query.trim()}&rdquo;
            </p>
          )}
        </div>
      </section>

      <nav
        style={{
          position: "sticky",
          top: HEADER_OFFSET,
          zIndex: 40,
          background: "rgba(255,255,255,.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #F3F4F6",
          padding: "12px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {faqCategories.map((cat) => {
            const active = cat.slug === activeSlug && !normalizedQuery;
            return (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                style={{
                  padding: "7px 14px",
                  borderRadius: 999,
                  fontSize: 12.5,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  background: active ? "#0D1526" : "#F3F4F6",
                  color: active ? "#fff" : "#4B5563",
                  transition: "background .18s, color .18s",
                }}
              >
                {cat.title}
              </a>
            );
          })}
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 32px 96px" }}>
        {visibleCategories.length === 0 && (
          <p style={{ textAlign: "center", color: "#6B7280", padding: "64px 0", fontSize: 14.5 }}>
            No questions match &ldquo;{query.trim()}&rdquo;. Try a different search term.
          </p>
        )}

        {visibleCategories.map((cat) => (
          <section key={cat.slug} id={cat.slug} style={{ marginBottom: 56, scrollMarginTop: HEADER_OFFSET + 70 }}>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: -0.4,
                margin: "0 0 18px",
                color: "#0D1526",
              }}
            >
              {cat.title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {cat.items.map((item) => {
                const open = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    id={`q-${item.id}`}
                    style={{
                      background: "#F9FAFB",
                      borderRadius: 12,
                      border: `1px solid ${open ? "#CEFFFB" : "#E5E7EB"}`,
                      boxShadow: open ? "0 12px 28px -16px rgba(13,148,136,.35)" : "none",
                      transition: "border-color .25s ease, box-shadow .25s ease, background .25s ease",
                      scrollMarginTop: HEADER_OFFSET + 70,
                    }}
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      aria-expanded={open}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "18px 22px",
                        background: "transparent",
                        border: "none",
                        textAlign: "left",
                        cursor: "pointer",
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 15.5,
                        fontWeight: 600,
                        color: "#0D1526",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <span
                          style={{
                            flex: "0 0 auto",
                            minWidth: 26,
                            height: 22,
                            padding: "0 6px",
                            borderRadius: 6,
                            background: "#F3F4F6",
                            color: "#6B7280",
                            fontFamily: "Geist, sans-serif",
                            fontSize: 11.5,
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 1,
                          }}
                        >
                          {item.id}
                        </span>
                        {item.q}
                      </span>
                      <span
                        style={{
                          flex: "0 0 auto",
                          width: 26,
                          height: 26,
                          borderRadius: 999,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 16,
                          fontWeight: 400,
                          transition: "transform .35s cubic-bezier(.34,1.4,.64,1), background .25s ease, color .25s ease",
                          background: open ? "#14B8A6" : "#E0FAF8",
                          color: open ? "#fff" : "#0D9488",
                          transform: `rotate(${open ? 135 : 0}deg)`,
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      style={{
                        display: "grid",
                        transition: "grid-template-rows .38s cubic-bezier(.2,.8,.2,1), opacity .3s ease",
                        gridTemplateRows: open ? "1fr" : "0fr",
                        opacity: open ? 1 : 0,
                      }}
                    >
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ padding: "0 22px 20px 60px" }}>{renderAnswer(item.a)}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <div
          style={{
            marginTop: 40,
            paddingTop: 28,
            borderTop: "1px solid #F3F4F6",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 13, color: "#6B7280", margin: "0 0 14px", lineHeight: 1.6 }}>
            Still have questions? Where anything on this page conflicts with the License Agreement, the agreement
            governs.
          </p>
          <a
            href="mailto:support@fidelabs.io"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #03A291, #2F54EB)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Email support@fidelabs.io →
          </a>
        </div>
      </div>
    </main>
  );
}
