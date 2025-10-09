import ComparatorSection from "@/components/ComparatorSection";
import CTA from "@/components/cta";
import FAQSection from "@/components/faq";
import FeaturesSection from "@/components/Feature";
import Footer from "@/components/footer";
import HeroSection from "@/components/Herosection";
import IntegrationsSection from "@/components/IntegrationsSection";
import Header from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/testimonials";
import TrustedBySection from "@/components/TrustedBy";




export const metadata = {
  title: "AI Healthcare Websites & Patient Portals | SuperWorld Technologies",
  description: "HIPAA-compliant healthcare websites with telehealth scheduling, automated patient reminders, secure forms & AI-powered patient care. Reduce no-shows by 30%.",
  openGraph: {
    title: "AI Healthcare Websites & Patient Portals | SuperWorld Technologies",
    description: "HIPAA-compliant healthcare websites with telehealth scheduling, automated patient reminders, secure forms & AI-powered patient care. Reduce no-shows by 30%.",
    url: "https://www.superworldtechnologies.com/healthcare",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail5.png",
      width: 1200,
      height: 630,
      alt: "AI Healthcare Website & Patient Portal Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Healthcare Websites & Patient Portals | SuperWorld Technologies",
    description: "HIPAA-compliant healthcare websites with telehealth scheduling, automated patient reminders, secure forms & AI-powered patient care. Reduce no-shows by 30%.",
    images: ["https://www.superworldtechnologies.com/thumbnail5.png"],
  },
}






export default function Home() {
  return (
    <>
      <Header Logotext={"health"}></Header>
      <HeroSection mainimage={'/hc.jpg'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection  Logotext={"health"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"health"}></Footer>
    </>
  );
}
