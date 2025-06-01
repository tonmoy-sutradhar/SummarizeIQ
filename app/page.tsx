import BgGradient from "@/components/common/BgGradient";
import DemoSection from "@/components/home/DemoSection";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient></BgGradient>
      <div className="flex flex-col">
        <HeroSection></HeroSection>
        <DemoSection></DemoSection>
      </div>
      {/* <HowItWorksSection></HowItWorksSection> */}
      {/* <PricingSection></PricingSection> */}
      {/* <CTASection></CTASection> */}
    </div>
  );
}
// grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-(family-name:--font-geist-sans)"
