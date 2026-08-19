import GradientHeading from "@/components/ui/GradientHeading";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import FlipVideoCard from "./FlipVideoCard";

const FEATURES = [
  {
    title: "Hide Price",
    description: "Hide prices per product, collection, or customer tag.",
    videoSrc: "https://res.cloudinary.com/dgjd6jpof/video/upload/f_auto,q_auto/v1787150906/source-code-site/gif.mp4",
    icon: (
      <>
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
        <path d="m2 2 20 20" />
      </>
    ),
  },
  {
    title: "Quote Request",
    description: "Custom quote forms merchants can drop into any theme.",
    videoSrc: "https://res.cloudinary.com/dgjd6jpof/video/upload/f_auto,q_auto/v1787150896/source-code-site/quote-request.mp4",
    icon: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M15 2v5h5" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </>
    ),
  },
  {
    title: "Quote Dashboard",
    description: "Track, filter, and action every quote in one place.",
    videoSrc: "https://res.cloudinary.com/dgjd6jpof/video/upload/f_auto,q_auto/v1787150901/source-code-site/dashboard.mp4",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M8 17V9" />
        <path d="M13 17v-5" />
        <path d="M18 17v-9" />
      </>
    ),
  },
  {
    title: "White Label",
    description: "Full rebrand from a single config — logo, colours, copy.",
    videoSrc: "https://res.cloudinary.com/dgjd6jpof/video/upload/f_auto,q_auto/v1787150888/source-code-site/white-label.mp4",
    icon: (
      <>
        <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M16 7H8" />
        <path d="M2 13h20" />
      </>
    ),
  },
  {
    title: "Draft Order",
    description: "Turn any accepted quote into a Shopify draft order.",
    videoSrc: "https://res.cloudinary.com/dgjd6jpof/video/upload/f_auto,q_auto/v1787150903/source-code-site/draft-order.mp4",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="m10.4 12.6a2 2 0 0 1 3 3L9 20l-4 1 1-4Z" />
      </>
    ),
  },
  {
    title: "Email Notifications",
    description: "Branded transactional emails for every quote event.",
    videoSrc: "https://res.cloudinary.com/dgjd6jpof/video/upload/f_auto,q_auto/v1787150894/source-code-site/email.mp4",
    icon: (
      <>
        <path d="M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    title: "Documentation",
    description: "In-app help centre content ready for your customers.",
    videoSrc: "https://res.cloudinary.com/dgjd6jpof/video/upload/f_auto,q_auto/v1787150891/source-code-site/doc.mp4",
    icon: (
      <>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
        <path d="M8 7h8" />
        <path d="M8 11h6" />
      </>
    ),
  },
  {
    title: "Theme Extension",
    description: "Native theme blocks — no Liquid edits required.",
    videoSrc: "https://res.cloudinary.com/dgjd6jpof/video/upload/f_auto,q_auto/v1787150899/source-code-site/theme.mp4",
    icon: (
      <>
        <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
        <path d="m14 8 3-3" />
        <path d="m18 4 2 2" />
        <path d="m8.5 8.5 7 7" />
        <path d="M17.5 14.5 20 12l-8-8-2.5 2.5" />
      </>
    ),
  },
];

export default function FeatureGridSection() {
  return (
    <section id="features" style={{ background: "rgb(255, 255, 255)", padding: "84px 32px 96px" }}>
      <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <SectionEyebrow tone="blue">FEATURES</SectionEyebrow>
          <GradientHeading lead="Every Feature You " highlight="Need to Launch Faster" />
          <p style={{ fontSize: "16px", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "600px", lineHeight: "1.6" }}>
            Everything included in the Fide Labs source codebase — production tested and built for real Shopify merchants.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {FEATURES.map((f) => (
            <FlipVideoCard
              key={f.title}
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              }
              title={f.title}
              description={f.description}
              videoSrc={f.videoSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
