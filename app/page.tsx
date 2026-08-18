import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Fide Labs — One Codebase for Your Brand and Every Client Brand" },
  description:
    "Launch your own Shopify app or deliver white-label solutions from one production-ready codebase — hide pricing, quote requests, a quote dashboard, draft orders, and email notifications, with full docs and a commercial license.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Fide Labs — One Codebase for Your Brand and Every Client Brand",
    description:
      "Launch your own Shopify app or deliver white-label solutions from one production-ready codebase — hide pricing, quote requests, a quote dashboard, draft orders, and email notifications, with full docs and a commercial license.",
  },
};

export default function Page() {
  return <HomePage />;
}
