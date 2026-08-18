"use client";

import { useState } from "react";

const CONTENT = {
  purchase: {
    badgeText: "One-time",
    priceAmount: "599",
    priceUnit: "One-time Purchase",
    kicker: "Perpetual Commercial License",
    ctaText: "Buy Source Code",
    footText: "Instant secure download after approval",
    noteText:
      "Purchase once and own a perpetual Commercial License. Optional annual renewal is available only for continuing updates and technical support.",
    receiveHeading: "What You'll Receive",
    showIncludes: true,
  },
  renewal: {
    badgeText: "Optional",
    priceAmount: "149",
    priceUnit: "/ year",
    kicker: "Optional Update & Support Renewal",
    ctaText: "Renew Updates & Support",
    footText: "Renewal is optional — your licence stays perpetual",
    noteText:
      "Available after your included 12 months of updates and support. Renewal extends updates and standard technical support only. Your perpetual Commercial License remains valid even if you choose not to renew.",
    receiveHeading: "Included with Renewal",
    showIncludes: false,
  },
} as const;

export function usePurchaseRenewalToggle() {
  const [renewal, setRenewal] = useState(false);
  return { renewal, setRenewal, content: renewal ? CONTENT.renewal : CONTENT.purchase };
}
