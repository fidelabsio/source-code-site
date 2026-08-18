import Hero from "./home/Hero";
import MarqueeSection from "./home/MarqueeSection";
import PackageIncludedSection from "./home/PackageIncludedSection";
import StatsBarSection from "./home/StatsBarSection";
import FeatureGridSection from "./home/FeatureGridSection";
import SolutionsSection from "./home/SolutionsSection";
import WhiteLabelDemoSection from "./home/WhiteLabelDemoSection";
import PricingSection from "./home/PricingSection";
import DeliverySection from "./home/DeliverySection";
import NotIncludedSection from "./home/NotIncludedSection";
import DocsSection from "./home/DocsSection";
import FinalCtaSection from "./home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeSection />
      <PackageIncludedSection />
      <StatsBarSection />
      <FeatureGridSection />
      <SolutionsSection />
      <WhiteLabelDemoSection />
      <PricingSection />
      <DeliverySection />
      <NotIncludedSection />
      <DocsSection />
      <FinalCtaSection />
    </>
  );
}
