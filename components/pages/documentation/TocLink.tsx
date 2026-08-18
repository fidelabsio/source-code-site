export default function TocLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className="fl-dc-scp9"
      style={{
        padding: "6px 0px 6px 14px",
        marginLeft: "-1px",
        borderLeft: active ? "2px solid rgb(20, 184, 166)" : "2px solid transparent",
        fontSize: "12.5px",
        lineHeight: "1.45",
        transition: "color 0.16s, border-color 0.16s",
        color: active ? "rgb(13, 148, 136)" : "rgb(156, 163, 175)",
        fontWeight: active ? "600" : "500",
      }}
    >
      <span className="sc-interp">{label}</span>
    </a>
  );
}
