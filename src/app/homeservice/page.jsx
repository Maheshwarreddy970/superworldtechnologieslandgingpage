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
  title: "AI Home Services Websites | SuperWorld Technologies",
  description: "Smart home services websites with photo-based instant quotes, dynamic scheduling, customer reviews & automated booking. Get 40% more booked jobs.",
  openGraph: {
    title: "AI Home Services Websites | SuperWorld Technologies",
    description: "Smart home services websites with photo-based instant quotes, dynamic scheduling, customer reviews & automated booking. Get 40% more booked jobs.",
    url: "www.superworldtechnologies.com/home-services",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "www.superworldtechnologies.com/thumbnail4.png",
      width: 1200,
      height: 630,
      alt: "AI Home Services Website Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Home Services Websites | SuperWorld Technologies",
    description: "Smart home services websites with photo-based instant quotes, dynamic scheduling, customer reviews & automated booking. Get 40% more booked jobs.",
    images: ["www.superworldtechnologies.com/thumbnail4.png"],
  },
}






export default function Home() {
  return (
    <>
      <Header Logotext={"homeservice"}></Header>
      <HeroSection mainimage={'/hs.jpg'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection Logotext={"homeservice"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"homeservice"}></Footer>
    </>
  );
}
