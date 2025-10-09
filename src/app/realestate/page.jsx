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
  title: "AI Real Estate Websites | SuperWorld Technologies",
  description: "Intelligent real estate websites with AI property matching, virtual 3D tours, instant lead capture & automated follow-ups. Convert 50% more buyers to properties.",
  openGraph: {
    title: "AI Real Estate Websites | SuperWorld Technologies",
    description: "Intelligent real estate websites with AI property matching, virtual 3D tours, instant lead capture & automated follow-ups. Convert 50% more buyers to properties.",
    url: "www.superworldtechnologies.com/real-estate",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "www.superworldtechnologies.com/thumbnail1.png",
      width: 1200,
      height: 630,
      alt: "AI Real Estate Website Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Real Estate Websites | SuperWorld Technologies",
    description: "Intelligent real estate websites with AI property matching, virtual 3D tours, instant lead capture & automated follow-ups. Convert 50% more buyers to properties.",
    images: ["www.superworldtechnologies.com/thumbnail1.png"],
  },
}






export default function Home() {
  return (
    <>
      <Header Logotext={"realestate"}></Header>
      <HeroSection mainimage={'/re.jpg'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection Logotext={"realestate"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"realestate"}></Footer>
    </>
  );
}
