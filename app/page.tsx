import Hero from "@/components/home/Hero";
import NavbarComponent from "@/components/common/NavBar";
import Features from "@/components/sections/Features";
import FeatureGrid from "@/components/sections/FeatureGrid";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import StatsCounter from "@/components/sections/StatsCounter";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <FeatureGrid />
      <StatsCounter />
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
