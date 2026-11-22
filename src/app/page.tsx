"use client";

import React, { useState } from "react";
import { DemoProduct } from "@/data/demo-content";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TypographyMarquee } from "@/components/sections/TypographyMarquee";
import { NewDropsSection } from "@/components/sections/NewDropsSection";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { OversizedCampaignSection } from "@/components/sections/OversizedCampaignSection";
import { CustomTshirtSection } from "@/components/sections/CustomTshirtSection";
import { DtfQualitySection } from "@/components/sections/DtfQualitySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LookbookSection } from "@/components/sections/LookbookSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { SocialShowcaseSection } from "@/components/sections/SocialShowcaseSection";
import { Footer } from "@/components/sections/Footer";
import { ProductQuickViewModal } from "@/components/ui/ProductQuickViewModal";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<DemoProduct | null>(null);

  return (
    <ThemeProvider>
      {/* 1. Announcement bar */}
      <AnnouncementBar />

      {/* 2. Responsive navigation */}
      <Navbar />

      <main>
        {/* 3. Cinematic hero */}
        <HeroSection />

        {/* 4. Animated VEXED typography marquee */}
        <TypographyMarquee />

        {/* 5. New Drops (Light) */}
        <NewDropsSection onSelectProduct={setSelectedProduct} />

        {/* 6. Explore Collections (Dark) */}
        <CollectionsSection />

        {/* 7. Featured Products (Light) */}
        <FeaturedProductsSection onSelectProduct={setSelectedProduct} />

        {/* 8. Oversized Collection campaign (Dark) */}
        <OversizedCampaignSection />

        {/* 9. Custom T-shirt promotion (Light) */}
        <CustomTshirtSection />

        {/* 10. DTF Printing Quality section (Dark) */}
        <DtfQualitySection />

        {/* 11. How It Works (Light) */}
        <HowItWorksSection />

        {/* 12. Fashion Lookbook (Dark) */}
        <LookbookSection />

        {/* 13. Brand Story (Light) */}
        <BrandStorySection />

        {/* 14. Social Media showcase (Dark) */}
        <SocialShowcaseSection />
      </main>

      {/* 15. Footer (Dark) */}
      <Footer />

      {/* Client-side Product Preview Modal (Prototype Only) */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </ThemeProvider>
  );
}
