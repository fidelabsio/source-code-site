import StatTile from "@/components/ui/StatTile";

const STATS = [
  { value: "8–12", unit: " wks", label: "Typical development" },
  { value: "2–5", unit: " days", label: "Using FIDE source code" },
  { value: "95", unit: "%", label: "Code already written" },
  { value: "100", unit: "%", label: "Branding configuration" },
  { value: "80", unit: "%+", label: "Time saved" },
];

export default function StatsBarSection() {
  return (
    <section style={{ background: "rgb(255, 255, 255)", padding: "28px 32px 0px" }}>
      <div style={{ maxWidth: "1160px", margin: "0px auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "20px" }}>
        {STATS.map((s) => (
          <StatTile key={s.label} value={s.value} unit={s.unit} label={s.label} className="fl-ix-scp8" />
        ))}
      </div>
    </section>
  );
}
