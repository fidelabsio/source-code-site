"use client";

import DocPageShell from "./DocPageShell";
import Callout from "./Callout";
import DocTable from "./DocTable";
import DocChecklist from "./DocChecklist";

const TOC_LINKS = [
  { href: "#commercial-license", label: "Commercial License" },
  { href: "#permitted", label: "Permitted" },
  { href: "#restricted", label: "Restricted" },
];

const PERMITTED = [
  "Deploy the application under your own brand for your own business.",
  "Rebrand the application — name, logo, favicon, colours, typography, and email templates.",
  "Modify and extend the source code, including business logic and workflows.",
  "Add custom functionality and integrate third-party services and APIs.",
  "Grant access to authorised employees and contractors bound by confidentiality.",
  "Create branded variations for development and testing.",
  "Deploy according to the Commercial License terms.",
];

const RESTRICTED = [
  "No redistribution of the source code, in whole or substantial part.",
  "No resale of the source code as another product or boilerplate.",
  "No public repository publishing or open-source platform release.",
  "No unauthorised sharing outside your authorised team.",
  "No marketplace distribution as a competing source-code listing.",
  "No deployment on behalf of client stores without an Agency License.",
  "No transfer of the licence to another organisation without written consent.",
];

export default function DocLicensePage() {
  return (
    <DocPageShell
      breadcrumbCategory="Technical Reference"
      title="License"
      subtitle="Understand what your Commercial License includes, where you can deploy the source code, and the permissions, restrictions, updates, and support associated with your purchase."
      readTime="4 min read"
      tocLinks={TOC_LINKS}
    >
      <h2 id="commercial-license" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Commercial License
      </h2>
      <DocTable
        headers={["Item", "Detail"]}
        rows={[
          ["License type", "Commercial"],
          ["Term", "Perpetual — the licence itself never expires"],
          ["Production deployment", "1 Shopify Store"],
          ["Non-production environments", "Up to 3 (development, staging, testing)"],
          ["Client stores", "Not included"],
          ["Marketplace distribution", "Not permitted"],
          ["Commercial use", "Your own business only"],
          ["Source code access", "Complete, delivered by secure download"],
          ["Updates", "12 months included"],
          ["Support", "12 months standard technical support"],
          ["Renewal", "Optional — extends updates and support only"],
        ]}
      />

      <h2 id="permitted" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Permitted
      </h2>
      <DocChecklist items={PERMITTED} />

      <h2 id="restricted" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Restricted
      </h2>
      <ul style={{ margin: "4px 0px 18px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {RESTRICTED.map((item) => (
          <li key={item} style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
            {item}
          </li>
        ))}
      </ul>

      <Callout
        borderColor="rgb(199, 210, 254)"
        background="rgb(240, 243, 255)"
        accentColor="rgb(47, 84, 235)"
        label="NOTE"
        icon={(
          <>
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
          </>
        )}
      >
        This page is a summary of the Commercial License for quick reference. The complete Commercial License Agreement provided with your purchase is the governing legal document — where the two differ, the Agreement prevails.
      </Callout>
    </DocPageShell>
  );
}
