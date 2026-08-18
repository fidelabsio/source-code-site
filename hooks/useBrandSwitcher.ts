"use client";

import { useState } from "react";

export type Brand = {
  name: string;
  /** "r, g, b" triplet, so callers can build both solid and rgba() colors from it */
  rgb: string;
  hex: string;
  soft: string;
  logo: string;
};

export function useBrandSwitcher(brands: Brand[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  return { activeIndex, setActiveIndex, activeBrand: brands[activeIndex] };
}
