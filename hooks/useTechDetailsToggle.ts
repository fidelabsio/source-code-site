"use client";

import { useRef, useState } from "react";

const PANEL_TRANSITION_MS = 450;

export function useTechDetailsToggle() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, PANEL_TRANSITION_MS);
    }
  }

  return { open, toggle, panelRef };
}
