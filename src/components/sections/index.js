// Import all section components
import Header_ShubhamGupta from './Header_ShubhamGupta';
import Header1 from './Header1';
import Header2 from './Header2';
import Header3 from './Header3';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero_ShubhamGupta from './Hero_ShubhamGupta'
import About1 from './About1';
import About_ShubhamGupta from './About_ShubhamGupta';
import Services1 from './Services1';
import Services_ShubhamGupta from './Services_ShubhamGupta';
import Testimonial1 from './Testimonial1';
import Testimonial_ShubhamGupta from './Testimonial_ShubhamGupta';
import Testimonial_1_ShubhamGupta from './Testimonial_1_ShubhamGupta';
import FAQ1 from './FAQ1';
import Contact1 from './Contact1';
import Contact_ShubhamGupta from './Contact_ShubhamGupta';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer_ShubhamGupta from './Footer_ShubhamGupta';
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';
import Gallery_ShubhamGupta from './Gallery_ShubhamGupta';
import Features1 from './Features1';
import Features2 from './Features2';
import Pricing1 from './Pricing1';
import Pricing2 from './Pricing2';
import Pricing_ShubhamGupta from './Pricing_ShubhamGupta';
import CTA1 from './CTA1';
import CTA2 from './CTA2';
import Team1 from './Team1';
import Team2 from './Team2';
import Appointment_ShubhamGupta from './Appointment_ShubhamGupta';

// Map component keys to their respective React components
export const componentMap = {
  // Headers
  header_1: Header1,
  header_2: Header2,
  header_3: Header3,
  header_4: Header_ShubhamGupta,
  // Heroes
  hero_1: Hero1,
  hero_2: Hero2,
  hero_3: Hero_ShubhamGupta,
  // About
  about_1: About1,
  about_2: About_ShubhamGupta,
  
  // Services
  services_1: Services1,
  Services_2: Services_ShubhamGupta,
  // Testimonials
  testimonial_1: Testimonial1,
  testimonial_2: Testimonial_ShubhamGupta,
  testimonial_3: Testimonial_1_ShubhamGupta,
  // FAQ
  faq_1: FAQ1,
  // Contact
  contact_1: Contact1,
  contact_2: Contact_ShubhamGupta,
  // Footers
  footer_1: Footer1,
  footer_2: Footer2,
  footer_2: Footer_ShubhamGupta,
  // Gallery
  gallery_1: Gallery1,
  gallery_2: Gallery2,
  gallery_3: Gallery_ShubhamGupta,
  // Features
  features_1: Features1, 
  features_2: Features2,
  // Pricing
  pricing_1: Pricing1,
  pricing_2: Pricing2,
  pricing_3: Pricing_ShubhamGupta,
  // CTA
  cta_1: CTA1,
  cta_2: CTA2,
  // Team
  team_1: Team1,
  team_2: Team2,
  //Appointment
  appointment_1: Appointment_ShubhamGupta
};

// Helper function to get component by type and variant
export const getComponent = (type, variant) => {
  const key = `${type}_${variant}`;
  return componentMap[key] || null;
}; 