import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createSourceCodeCheckoutUrl } from "@/lib/checkout";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ renewal?: string }>;
}) {
  const { renewal } = await searchParams;

  let checkoutUrl: string;
  try {
    checkoutUrl = await createSourceCodeCheckoutUrl(renewal === "true");
  } catch (error) {
    console.error("Checkout redirect failed:", error);
    redirect("/error-page");
  }

  redirect(checkoutUrl);
}
