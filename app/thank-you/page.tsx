import type { Metadata } from "next";
import ThankYouPage from "@/components/pages/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ThankYouPage />;
}
