"use client";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import GradientHeading from "@/components/ui/GradientHeading";
import DeliveryStep from "./DeliveryStep";
import { useTimelineAnimation } from "@/hooks/useTimelineAnimation";

const STEPS: {
  title: string;
  description: string;
  badgePosition: "left" | "right";
  showConnector: boolean;
  icon: React.ReactNode;
}[] = [
  {
    title: "Purchase",
    description: "Complete your secure checkout and purchase the Commercial License.",
    badgePosition: "left",
    showConnector: true,
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: "Delivery Email",
    description: "Receive an automated email containing your License ID, invoice, download link, support information, and quick-start instructions.",
    badgePosition: "left",
    showConnector: true,
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 7 13.03 12.7a2 2 0 0 1-2.06 0L2 7" />
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
      </svg>
    ),
  },
  {
    title: "Secure Download",
    description: "Download your purchased source code package together with all documentation, guides, tutorial videos, and commercial license files.",
    badgePosition: "left",
    showConnector: false,
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
    ),
  },
  {
    title: "Documentation & Setup",
    description: "Use the Installation Guide, Shopify Partner Setup Guide, Configuration Guide, API Documentation, Buyer Onboarding Guide, and video tutorials to install and configure the application.",
    badgePosition: "right",
    showConnector: true,
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
      </svg>
    ),
  },
  {
    title: "Build & Launch",
    description: "Configure branding, deploy the application, validate the installation, and launch your Shopify app.",
    badgePosition: "right",
    showConnector: false,
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0Z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function DeliverySection() {
  const row1 = STEPS.slice(0, 3);
  const row2 = STEPS.slice(3);
  const { containerRef, getStepState } = useTimelineAnimation(STEPS.length);

  return (
    <section ref={containerRef} id="fl-flow" style={{ position: "relative", background: "radial-gradient(circle at 1px 1px, rgba(13, 148, 136, 0.15) 1px, transparent 0px) 0% 0% / 22px 22px, linear-gradient(rgb(247, 252, 252), rgb(255, 255, 255) 42%) 0% 0% / 100% 100% rgb(255, 255, 255)", padding: "80px 32px 44px", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-90px", left: "50%", width: "760px", height: "420px", marginLeft: "-380px", borderRadius: "999px", background: "radial-gradient(rgba(20, 184, 166, 0.16) 0%, rgba(20, 184, 166, 0) 68%)", pointerEvents: "none" }} />
      <div style={{ position: "static", maxWidth: "1160px", margin: "0px auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <SectionEyebrow tone="teal">DELIVERY</SectionEyebrow>
          <GradientHeading lead="How Delivery " highlight="Works" size={36} style={{ letterSpacing: "-1.3px" }} />
          <p style={{ fontSize: "15px", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "600px", lineHeight: "1.6" }}>
            Everything you need to get started is delivered immediately after your purchase.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px 60px" }}>
          {row1.map((s, i) => (
            <DeliveryStep key={s.title} stepNumber={i + 1} icon={s.icon} title={s.title} description={s.description} badgePosition={s.badgePosition} showConnector={s.showConnector} state={getStepState(i)} />
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
          {row2.map((s, i) => (
            <DeliveryStep key={s.title} stepNumber={i + 4} icon={s.icon} title={s.title} description={s.description} badgePosition={s.badgePosition} showConnector={s.showConnector} state={getStepState(i + 3)} />
          ))}
        </div>
      </div>
    </section>
  );
}
