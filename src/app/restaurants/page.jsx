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




export const metadata ={
  title: "AI Restaurant Websites & Online Ordering | SuperWorld Technologies",
  description: "Smart restaurant websites with AI menu recommendations, contactless ordering, reservation systems & loyalty programs. Boost online orders & customer satisfaction.",
  openGraph: {
    title: "AI Restaurant Websites & Online Ordering | SuperWorld Technologies", 
    description: "Smart restaurant websites with AI menu recommendations, contactless ordering, reservation systems & loyalty programs. Boost online orders & customer satisfaction.",
    url: "https://www.superworldtechnologies.com/restaurants",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail6.png",
      width: 1200,
      height: 630,
      alt: "AI Restaurant Website & Ordering Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Restaurant Websites & Online Ordering | SuperWorld Technologies",
    description: "Smart restaurant websites with AI menu recommendations, contactless ordering, reservation systems & loyalty programs. Boost online orders & customer satisfaction.",
    images: ["https://www.superworldtechnologies.com/thumbnail6.png"],
  },
}






export default function Home() {
  return (
    <>
      <Header Logotext={"restaurants"}></Header>
      <HeroSection mainimage={'/Dashboard Design (1).png'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection  Logotext={"restaurants"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"restaurants"}></Footer>
    </>
  );
}
