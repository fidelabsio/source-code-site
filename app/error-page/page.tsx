import type { Metadata } from "next";
import ErrorPage from "@/components/pages/ErrorPage";

export const metadata: Metadata = {
  title: "Error",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ErrorPage />;
}
