"use client";

import { useMemo, useState } from "react";
import type { FaqCategory } from "@/lib/faqData";

export function useFaqSearch(categories: FaqCategory[]) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    if (!normalizedQuery) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) => item.q.toLowerCase().includes(normalizedQuery) || item.a.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [categories, normalizedQuery]);

  const matchCount = visibleCategories.reduce((sum, c) => sum + c.items.length, 0);

  return { query, setQuery, normalizedQuery, visibleCategories, matchCount };
}
