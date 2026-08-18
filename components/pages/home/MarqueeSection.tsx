import Marquee from "@/components/ui/Marquee";

const WORDS = [
  "Quote Requests",
  "Hide Price",
  "Draft Orders",
  "Theme Extension",
  "White Label",
  "Email Notifications",
  "Quote Dashboard",
  "Multi-Currency",
];

export default function MarqueeSection() {
  return (
    <section style={{ background: "rgb(13, 21, 38)", padding: "20px 0px", overflow: "hidden" }}>
      <Marquee items={WORDS} />
    </section>
  );
}
