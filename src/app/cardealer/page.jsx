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
  title: "AI Car Dealership Websites | SuperWorld Technologies",
  description: "AI-powered car dealership websites with VIN search, visual inventory browsing, finance calculators & 24/7 sales chat. Convert more browsers into buyers. Launch in 48-72 hours.",
  openGraph: {
    title: "AI Car Dealership Websites | SuperWorld Technologies",
    description: "AI-powered car dealership websites with VIN search, visual inventory browsing, finance calculators & 24/7 sales chat. Convert more browsers into buyers. Launch in 48-72 hours.",
    url: "https://www.superworldtechnologies.com/car-dealerships",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail3.png",
      width: 1200,
      height: 630,
      alt: "AI Car Dealership Website Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Car Dealership Websites | SuperWorld Technologies",
    description: "AI-powered car dealership websites with VIN search, visual inventory browsing, finance calculators & 24/7 sales chat. Convert more browsers into buyers. Launch in 48-72 hours.",
    images: ["https://www.superworldtechnologies.com/thumbnail3.png"],
  },
}


export default function Home() {
  return (
    <>
      <Header Logotext={"cardealer"}></Header>
      <HeroSection mainimage={'/cd.jpg'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection  Logotext={"cardealer"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"cardealer"}></Footer>
    </>
  );
}
