"use client";

import FeaturesSection from "@/components/sections/home/Features/FeaturesSection";
import FrequentlySection from "@/components/sections/home/Frequently/FrequentlySection";
import HeroSection from "@/components/sections/home/Hero/HeroSection";
import ProductSection from "@/components/sections/home/Products/ProductSection";
import TestimonialSection from "@/components/sections/home/Testimonial/TestimonialSection";
import UseCaseSection from "@/components/sections/home/UseCase/UseCaseSection";

export default function Page() {
  return (
    <div className="mt-2 flex w-full flex-col items-start gap-12 lg:gap-16">
      <HeroSection />
      <ProductSection />
      <UseCaseSection />
      <FeaturesSection />
      <FrequentlySection />
      <TestimonialSection />
    </div>
  );
}
