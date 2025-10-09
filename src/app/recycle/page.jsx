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
  title: "AI Waste Management Websites | SuperWorld Technologies",
  description: "Smart waste management websites with AI material sorting, route optimization, pickup scheduling & customer portals. Increase efficiency by 35% with automated workflows.",
  openGraph: {
    title: "AI Waste Management Websites | SuperWorld Technologies",
    description: "Smart waste management websites with AI material sorting, route optimization, pickup scheduling & customer portals. Increase efficiency by 35% with automated workflows.",
    url: "https://www.superworldtechnologies.com/waste-management",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail2.png",
      width: 1200,
      height: 630,
      alt: "AI Waste Management Website Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Waste Management Websites | SuperWorld Technologies",
    description: "Smart waste management websites with AI material sorting, route optimization, pickup scheduling & customer portals. Increase efficiency by 35% with automated workflows.",
    images: ["https://www.superworldtechnologies.com/thumbnail2.png"],
  },
}






export default function Home() {
  return (
    <>
      <Header Logotext={"recycle"}></Header>
      <HeroSection mainimage={'/rc.jpg'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection  Logotext={"recycle"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"recycle"}></Footer>
    </>
  );
}
