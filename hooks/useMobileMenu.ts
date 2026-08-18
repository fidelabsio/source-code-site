"use client";

import { useState } from "react";

export function useMobileMenu() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prev) => !prev);
  }

  function close() {
    setOpen(false);
  }

  return { open, toggle, close };
}
