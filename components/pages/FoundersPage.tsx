"use client";

import HeroFeature from "./founders/HeroFeature";
import TrustBadge from "./founders/TrustBadge";
import JourneyStep from "./founders/JourneyStep";
import ChooseCard from "./founders/ChooseCard";
import ComparisonRow from "./founders/ComparisonRow";
import PhaseCard from "./founders/PhaseCard";
import LaunchChecklistItem from "./founders/LaunchChecklistItem";
import PrerequisiteCard from "./founders/PrerequisiteCard";
import { useTimelineAnimation } from "@/hooks/useTimelineAnimation";

const heroFeatures = [
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    ),
    fontSize: "13px",
    line1: "Clean & Well",
    line2: "Structured Code",
  },
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.6 2.4a1 1 0 0 1 .8 0l8 4a1 1 0 0 1 .6.9v5.4c0 4.6-3.6 8-8.4 9.3a1 1 0 0 1-.4 0C7.4 20.7 3.8 17.3 3.8 12.7V7.3a1 1 0 0 1 .6-.9Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    fontSize: "14.5px",
    line1: "Secure, Scalable",
    line2: "& Production Ready",
  },
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8Z" />
        <path d="M8 9h.01" />
        <path d="M12 7h.01" />
        <path d="M16 9h.01" />
      </svg>
    ),
    fontSize: "14.5px",
    line1: "Fully White Label",
    line2: "& Configurable",
  },
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M15 2v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </svg>
    ),
    fontSize: "13px",
    line1: "Docs, Guides &",
    line2: "Video Tutorials",
  },
];

const trustBadges = ["Production Ready", "Easy Deployment", "Developer Friendly"];

const journeySteps = [
  { stepNumber: "01", title: "Purchase", description: "Complete your secure checkout and purchase the Commercial License.", timeText: "Same day", showConnector: true },
  { stepNumber: "02", title: "Delivery Email", description: "Receive your license, download link, invoice, and setup instructions.", timeText: "Minutes", showConnector: true },
  { stepNumber: "03", title: "Secure Download", description: "Download the complete source code package and documentation.", timeText: "Same day", showConnector: false },
  { stepNumber: "04", title: "Documentation & Setup", description: "Follow the setup guides to install and configure your application.", timeText: "1–2 days", showConnector: true },
  { stepNumber: "05", title: "Build & Launch", description: "Brand, deploy, validate, and launch your Shopify application.", timeText: "4–7 days", showConnector: false },
];

const chooseCards = [
  {
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.6 2.4a1 1 0 0 1 .8 0l8 4a1 1 0 0 1 .6.9v5.4c0 4.6-3.6 8-8.4 9.3a1 1 0 0 1-.4 0C7.4 20.7 3.8 17.3 3.8 12.7V7.3a1 1 0 0 1 .6-.9Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Proven product",
    description: "Quote requests and hide-price are features merchants already pay for.",
  },
  {
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M2 13h20" />
      </svg>
    ),
    title: "Your brand only",
    description: "No FIDE branding anywhere. The app is fully yours from day one.",
  },
  {
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 6.5c0-2-2.2-3.5-5-3.5s-5 1.3-5 3.3S9 9.5 12 10s5 1.5 5 3.7-2.2 3.3-5 3.3-5-1.5-5-3.5" />
      </svg>
    ),
    title: "Set your own price",
    description: "Keep 100% of revenue. No royalties, no revenue share, ever.",
  },
  {
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 2.9 6.3 6.8.8-5 4.7 1.3 6.9L12 17.4 6 20.7l1.3-6.9-5-4.7 6.8-.8Z" />
      </svg>
    ),
    title: "App Store ready",
    description: "Built against current review requirements and already shipped as a live app.",
  },
  {
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
      </svg>
    ),
    title: "Full documentation",
    description: "Three guides plus video walkthroughs so you never wait on us.",
  },
  {
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
    title: "Updates included",
    description: "Every fix and feature we ship is available to download for your whole term.",
  },
];

const comparisonRows = [
  { milestone: "Time to first launch", buildValue: "6–9 months", fideValue: "4–7 days" },
  { milestone: "Engineering cost", buildValue: "$80k–150k", fideValue: "One licence fee" },
  { milestone: "Shopify API integration", buildValue: "Build from scratch", fideValue: "Included" },
  { milestone: "App Store review readiness", buildValue: "Trial and error", fideValue: "Already passed" },
  { milestone: "Ongoing maintenance", buildValue: "Your team", fideValue: "Shared releases" },
];

const phaseCards = [
  { number: "01", title: "Rebrand & Configure", items: ["Replace branding", "Configure environment variables", "Update app settings"] },
  { number: "02", title: "Testing & QA", items: ["Test storefront", "Verify webhooks", "Validate billing flow"] },
  { number: "03", title: "Prepare App Listing", items: ["App icon", "Screenshots", "Privacy Policy", "Terms & Conditions", "Support page"] },
  { number: "04", title: "Submit to Shopify", items: ["Submit for review", "Address reviewer feedback", "Publish your app"] },
];

const launchChecklistItems = [
  "Branding updated",
  "OAuth configured",
  "Billing tested",
  "Webhooks verified",
  "Privacy Policy ready",
  "Terms & Conditions ready",
  "Support page published",
  "App Store assets prepared",
];

const prerequisiteCards = [
  { title: "Shopify Partner Account", description: "Needed to create the app, issue credentials, and open a development store." },
  { title: "Shopify app development basics", description: "Familiarity with embedded apps, OAuth, and the admin API." },
  { title: "Node.js & npm", description: "Node 20.10 or newer, with npm 10 or pnpm 9." },
  { title: "Git", description: "For version-controlling your own changes to the downloaded source." },
  { title: "PostgreSQL database", description: "Version 14 or newer, locally or hosted." },
  { title: "Hosting provider", description: "Railway, Render, Vercel, Fly.io, a VPS, or similar." },
];

export default function FoundersPage() {
  const { containerRef: journeyRef, getStepState: getJourneyStepState } = useTimelineAnimation<HTMLDivElement>(journeySteps.length);

  return (
    <>
      <section data-hero="1" style={{ position: "relative", background: "url(\"/assets/founders-asset-3.png\") right top / cover no-repeat rgb(251, 252, 255)", padding: "72px 32px 56px", overflow: "hidden" }}>
        <div style={{ position: "relative", maxWidth: "1240px", margin: "0px auto", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
          <div style={{ flex: "1 1 460px", minWidth: "340px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", padding: "11px 20px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.4px", marginBottom: "28px" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.6 2.4a2 2 0 0 0-1.4-.6H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.4 8.4a2 2 0 0 0 2.8 0l7.2-7.2a2 2 0 0 0 0-2.8Z" />
                <path d="M7 7h.01" />
              </svg>
              {"\nSOURCE CODE · SHOPIFY · COMMERCIAL LICENSE\n"}
            </span>
            <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "56px", lineHeight: "1.05", letterSpacing: "-2.2px", margin: "0px 0px 24px", color: "rgb(13, 21, 38)", maxWidth: "620px", textWrap: "balance" }}>
              {"Launch Your Own Branded Quote App "}
              <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
                Without Building From Scratch
              </span>
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "rgb(75, 85, 99)", margin: "0px 0px 36px", maxWidth: "520px" }}>
              Get the complete Shopify Quote Request & Hide Price app source code and make it yours.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "22px 32px", marginBottom: "40px", maxWidth: "620px" }}>
              {heroFeatures.map((feature) => (
                <HeroFeature key={feature.line1} {...feature} />
              ))}
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "36px" }}>
              <a href="/checkout" className="fl-fd-scp5 fl-fd-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 28px", borderRadius: "999px", background: "linear-gradient(135deg, rgb(3, 162, 145), rgb(47, 84, 235))", color: "rgb(255, 255, 255)", fontSize: "16px", fontWeight: "600", boxShadow: "rgba(20, 184, 166, 0.3) 0px 6px 20px", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s, background 0.18s" }}>
                {"Buy Source Code "}
                <span style={{ fontSize: "16px" }}>
                  →
                </span>
              </a>
              <a href="/white-label-showcase" className="fl-fd-scp6 fl-fd-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 28px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(209, 213, 219)", color: "rgb(31, 41, 55)", fontSize: "16px", fontWeight: "600", transition: "0.18s" }}>
                View Rebrand Demo
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "nowrap", gap: "32px", alignItems: "center", justifyContent: "flex-start" }}>
              {trustBadges.map((label) => (
                <TrustBadge key={label} label={label} />
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 480px", minWidth: "320px", display: "flex", justifyContent: "flex-end" }}>
            <img src="/assets/founders-asset-2.png" alt="Branded quote dashboard, config file, and mobile storefront" style={{ display: "block", width: "100%", maxWidth: "660px", height: "auto" }} />
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "88px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "40px", letterSpacing: "-1.3px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              {"From purchase to "}
              <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
                launch in five steps
              </span>
            </h2>
            <p style={{ fontSize: "16px", color: "rgb(107, 114, 128)", margin: "0px" }}>
              No engineering team required for the first three.
            </p>
          </div>
          <div ref={journeyRef} id="fl-journey">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px 60px" }}>
              {journeySteps.slice(0, 3).map((step, i) => (
                <JourneyStep key={step.stepNumber} {...step} state={getJourneyStepState(i)} />
              ))}
            </div>
            <div style={{ position: "relative", height: "54px" }}>
              <div style={{ position: "absolute", right: "calc(16.6667% - 20px)", top: "0px", width: "2px", height: "24px", marginRight: "-1px", borderRadius: "2px", backgroundImage: "linear-gradient(rgb(229, 231, 235) 50%, rgb(13, 148, 136) 50%)", backgroundSize: "100% 200%", transition: "background-position 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)", backgroundPosition: "0px 0px" }} />
              <div style={{ position: "absolute", right: "calc(16.6667% - 20px)", left: "calc(33.3333% - 10px)", top: "23px", height: "2px", borderRadius: "2px", backgroundImage: "linear-gradient(90deg, rgb(229, 231, 235) 50%, rgb(13, 148, 136) 50%)", backgroundSize: "200% 100%", transition: "background-position 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) 0.12s", backgroundPosition: "0px 0px" }} />
              <div style={{ position: "absolute", left: "calc(33.3333% - 10px)", top: "23px", width: "2px", height: "26px", marginLeft: "-1px", borderRadius: "2px", backgroundImage: "linear-gradient(rgb(229, 231, 235) 50%, rgb(13, 148, 136) 50%)", backgroundSize: "100% 200%", transition: "background-position 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s", backgroundPosition: "0px 0px" }}>
                <span style={{ position: "absolute", left: "50%", bottom: "-2px", width: "6px", height: "6px", marginLeft: "-3px", borderBottom: "2px solid rgb(229, 231, 235)", borderRight: "2px solid rgb(229, 231, 235)", transform: "rotate(45deg)", transition: "border-color 0.5s 0.3s", borderTopColor: "rgb(229, 231, 235)", borderLeftColor: "rgb(229, 231, 235)" }} />
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px 60px" }}>
              {journeySteps.slice(3, 5).map((step, i) => (
                <JourneyStep key={step.stepNumber} {...step} state={getJourneyStepState(i + 3)} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(240, 250, 248)", padding: "88px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(206, 255, 251)", color: "rgb(13, 148, 136)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "16px" }}>
              <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
              WHY BUYERS CHOOSE IT
            </span>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "40px", letterSpacing: "-1.3px", margin: "0px", color: "rgb(13, 21, 38)" }}>
              {"Build the business, not the "}
              <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
                boilerplate
              </span>
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {chooseCards.map((card) => (
              <ChooseCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "88px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "38px", letterSpacing: "-1.3px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              {"Build vs "}
              <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
                Buy
              </span>
            </h2>
            <p style={{ fontSize: "16px", color: "rgb(107, 114, 128)", margin: "0px" }}>
              The same launch, two very different timelines.
            </p>
          </div>
          <div style={{ background: "rgb(249, 250, 251)", border: "1px solid rgb(229, 231, 235)", borderRadius: "20px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1.4fr) minmax(0px, 1fr) minmax(0px, 1fr)", gap: "0px", background: "rgb(13, 21, 38)", padding: "16px 24px" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.7px", color: "rgb(255, 255, 255)" }}>
                MILESTONE
              </span>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.7px", color: "rgb(255, 255, 255)", textAlign: "right" }}>
                BUILD IN-HOUSE
              </span>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.7px", textAlign: "right", color: "rgb(255, 255, 255)" }}>
                WITH FIDE
              </span>
            </div>
            {comparisonRows.map((row) => (
              <ComparisonRow key={row.milestone} {...row} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(240, 250, 248)", padding: "88px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 148, 136)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "16px" }}>
              <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.133) 0px 0px 0px 3px, rgba(20, 184, 166, 0.733) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
              LAUNCH READINESS
            </span>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "40px", letterSpacing: "-1.3px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              {"Launch "}
              <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
                Readiness
              </span>
            </h2>
            <p style={{ fontSize: "16px", color: "rgb(107, 114, 128)", margin: "0px" }}>
              Everything you need before publishing your Shopify app.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "20px", marginBottom: "28px" }}>
            {phaseCards.map((phase) => (
              <PhaseCard key={phase.number} {...phase} />
            ))}
          </div>
          <div style={{ background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "32px" }}>
            <h3 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "20px", fontWeight: "700", margin: "0px 0px 20px", color: "rgb(13, 21, 38)" }}>
              Launch Checklist
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "14px 24px" }}>
              {launchChecklistItems.map((text) => (
                <LaunchChecklistItem key={text} text={text} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "88px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(240, 243, 255)", color: "rgb(47, 84, 235)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "16px" }}>
              <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(47, 84, 235)", boxShadow: "rgba(47, 84, 235, 0.133) 0px 0px 0px 3px, rgba(47, 84, 235, 0.733) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
              PREREQUISITES
            </span>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "40px", letterSpacing: "-1.3px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              {"Before you "}
              <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
                begin
              </span>
            </h2>
            <p style={{ fontSize: "16px", color: "rgb(107, 114, 128)", margin: "0px" }}>
              Recommended before purchasing the source code.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {prerequisiteCards.map((card) => (
              <PrerequisiteCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(240, 250, 248)", padding: "88px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 148, 136)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "16px" }}>
              <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.133) 0px 0px 0px 3px, rgba(20, 184, 166, 0.733) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
              PRICING
            </span>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "40px", letterSpacing: "-1.3px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              {"Choose Your "}
              <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
                License
              </span>
            </h2>
            <p style={{ fontSize: "16px", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "560px" }}>
              Flexible licensing options for teams building and launching Shopify apps.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1fr) minmax(0px, 1fr)", gap: "0px", border: "1px solid rgb(229, 231, 235)", borderRadius: "24px", overflow: "hidden", boxShadow: "rgba(13, 21, 38, 0.2) 0px 24px 48px -24px" }}>
            <div style={{ position: "relative", padding: "40px", background: "linear-gradient(160deg, rgb(13, 21, 38), rgb(13, 148, 136))", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-140px", right: "-120px", width: "320px", height: "320px", borderRadius: "999px", background: "radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, rgba(20, 184, 166, 0) 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: "0px", background: "linear-gradient(200deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0) 46%)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <span style={{ display: "inline-block", padding: "5px 12px", borderRadius: "999px", background: "rgba(255, 255, 255, 0.16)", color: "rgb(255, 255, 255)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "22px" }}>
                  COMMERCIAL LICENSE
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "48px", fontWeight: "800", letterSpacing: "-2px", color: "rgb(255, 255, 255)" }}>
                    USD 599
                  </span>
                </div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "8px" }}>
                  One-time Purchase
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: "600", color: "rgb(206, 255, 251)", marginBottom: "24px" }}>
                  Perpetual Commercial License
                </div>
                <a href="/#pricing" className="fl-fd-scp9 fl-fd-scp4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "15px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 21, 38)", fontSize: "15px", fontWeight: "600", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s" }}>
                  {"View Full Pricing "}
                  <span>
                    →
                  </span>
                </a>
              </div>
            </div>
            <div style={{ padding: "40px", background: "rgb(255, 255, 255)" }}>
              <h4 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "15px", fontWeight: "700", margin: "0px 0px 18px", color: "rgb(13, 21, 38)" }}>
                Includes
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13.5px", lineHeight: "1.5", color: "rgb(55, 65, 81)" }}>
                  <span style={{ color: "rgb(20, 184, 166)", fontSize: "11px", marginTop: "2px" }}>
                    ✓
                  </span>
                  Complete production-ready source code
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13.5px", lineHeight: "1.5", color: "rgb(55, 65, 81)" }}>
                  <span style={{ color: "rgb(20, 184, 166)", fontSize: "11px", marginTop: "2px" }}>
                    ✓
                  </span>
                  Secure download link
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13.5px", lineHeight: "1.5", color: "rgb(55, 65, 81)" }}>
                  <span style={{ color: "rgb(20, 184, 166)", fontSize: "11px", marginTop: "2px" }}>
                    ✓
                  </span>
                  Documentation and video tutorials
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13.5px", lineHeight: "1.5", color: "rgb(55, 65, 81)" }}>
                  <span style={{ color: "rgb(20, 184, 166)", fontSize: "11px", marginTop: "2px" }}>
                    ✓
                  </span>
                  12 months product updates
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13.5px", lineHeight: "1.5", color: "rgb(55, 65, 81)" }}>
                  <span style={{ color: "rgb(20, 184, 166)", fontSize: "11px", marginTop: "2px" }}>
                    ✓
                  </span>
                  12 months standard technical support
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13.5px", lineHeight: "1.5", color: "rgb(55, 65, 81)" }}>
                  <span style={{ color: "rgb(20, 184, 166)", fontSize: "11px", marginTop: "2px" }}>
                    ✓
                  </span>
                  Optional annual renewal
                </div>
              </div>
              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgb(243, 244, 246)", fontSize: "12.5px", lineHeight: "1.6", color: "rgb(107, 114, 128)" }}>
                The Commercial License is the licence available today.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(120deg, rgb(3, 162, 145), rgb(47, 84, 235))", padding: "0px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto", padding: "56px 0px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-1.2px", margin: "0px 0px 12px", color: "rgb(255, 255, 255)" }}>
            Your app could be live next week.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.82)", margin: "0px 0px 28px" }}>
            Full source access, your brand, your pricing.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/checkout" className="fl-fd-scp9 fl-fd-scp4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px 32px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 21, 38)", fontSize: "16px", fontWeight: "600", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s" }}>
              {"Buy Source Code "}
              <span>
                →
              </span>
            </a>
            <a href="/contact#contact-form" className="fl-fd-scpa fl-fd-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "transparent", border: "1px solid rgba(255, 255, 255, 0.5)", color: "rgb(255, 255, 255)", fontSize: "14px", fontWeight: "600", transition: "0.18s" }}>
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
