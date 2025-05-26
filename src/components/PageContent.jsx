"use client";

import { useApp } from "@/contexts/AppContext";
import { getComponentKey } from "@/lib/components/registry";
import dynamic from "next/dynamic";

// Dynamic component map for section types and variants - moved to client component
const SECTION_MAP = {
  header_1: dynamic(() => import("@/components/sections/Header1")),
  header_2: dynamic(() => import("@/components/sections/Header2")),
  header_3: dynamic(() => import("@/components/sections/Header3")),
  header_4: dynamic(() => import("@/components/sections/Header_ShubhamGupta")),
  hero_1: dynamic(() => import("@/components/sections/Hero1")),
  hero_2: dynamic(() => import("@/components/sections/Hero2")),
  hero_3: dynamic(() => import("@/components/sections/Hero_ShubhamGupta")),
  about_1: dynamic(() => import("@/components/sections/About1")),
  about_2: dynamic(() => import("@/components/sections/About_ShubhamGupta")),
  services_1: dynamic(() => import("@/components/sections/Services1")),
  services_2: dynamic(() => import("@/components/sections/Services_ShubhamGupta")),
  testimonial_1: dynamic(() => import("@/components/sections/Testimonial1")),
  testimonial_2: dynamic(() => import("@/components/sections/Testimonial_ShubhamGupta")),
  testimonial_3: dynamic(() => import("@/components/sections/Testimonial_1_ShubhamGupta")),
  faq_1: dynamic(() => import("@/components/sections/FAQ1")),
  contact_1: dynamic(() => import("@/components/sections/Contact1")),
  contact_1: dynamic(() => import("@/components/sections/Contact_ShubhamGupta")),
  footer_1: dynamic(() => import("@/components/sections/Footer1")),
  footer_2: dynamic(() => import("@/components/sections/Footer2")),
  footer_3: dynamic(() => import("@/components/sections/Footer_ShubhamGupta")),
  gallery_1: dynamic(() => import("@/components/sections/Gallery1")),
  gallery_2: dynamic(() => import("@/components/sections/Gallery2")),
  gallery_3: dynamic(() => import("@/components/sections/Gallery_ShubhamGupta")),
  features_1: dynamic(() => import("@/components/sections/Features1")),
  features_2: dynamic(() => import("@/components/sections/Features2")),
  pricing_1: dynamic(() => import("@/components/sections/Pricing1")),
  pricing_2: dynamic(() => import("@/components/sections/Pricing2")),
  pricing_3: dynamic(() => import("@/components/sections/Pricing_ShubhamGupta")),
  cta_1: dynamic(() => import("@/components/sections/CTA1")),
  cta_2: dynamic(() => import("@/components/sections/CTA2")),
  team_1: dynamic(() => import("@/components/sections/Team1")),
  team_2: dynamic(() => import("@/components/sections/Team2")),
  appointment_1: dynamic(() => import("@/components/sections/Appointment_ShubhamGupta")),
};

export default function PageContent({ page, sections, theme, config }) {
  // Use the app context to get theme values
  const { theme: contextTheme } = useApp();

  // Merge provided theme with context theme, with context taking precedence
  const themeToUse = { ...theme, ...(contextTheme || {}) };

  return (
    <main>
      <h1 className="sr-only">{page.title}</h1>
      {sections.map((section) => {
        const sectionKey = getComponentKey(section.type, section.variant);
        const DynamicSection = SECTION_MAP[sectionKey];

        if (!DynamicSection) {
          console.warn(`No component found for section type: ${sectionKey}`);
          return null;
        }

        return (
          <section key={section.id} className="section-wrapper">
            <DynamicSection
              content={section.content}
              items={section.items}
              theme={themeToUse}
              config={config}
            />
          </section>
        );
      })}
    </main>
  );
}
