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
    url: "https://www.superworldtechnologies.com/home-services",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail4.png",
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
    images: ["https://www.superworldtechnologies.com/thumbnail4.png"],
  },
}



const TemplateDesigns = [
  {
    img: '/homeservice/rooferio-SMPYVOQowSMLFHpvPesV9U6vfmY3rc.webp',
    href: 'https://rooferio.framer.website/'
  },
  {
    img: '/homeservice/roofix-vdw8lQ6J95t6HYb4jyxO3TqGl1ufZ4.webp',
    href: 'https://roofix.framer.ai/'
  },
  {
    img: '/homeservice/roofora-lSlT1MyHAyf0O6TvRFrOhYm64ABADp.webp',
    href: 'https://roofora.framer.website/'
  },
  {
    img: '/homeservice/iLhHSuYB6y7ik1PaBZhg0VWsaM-PXBgTVK7Lk3raK19lZJ9ml6PV8iICT.jpg',
    href: 'https://roofer.framer.website/'
  },
  {
    img: '/homeservice/roofshield-Rj889TBIx1eElJLPmSM1vX1hxZgsAe.jpg',
    href: 'https://roofshiield.framer.website/'
  },
  {
    img: '/homeservice/flowfix-wpaF1P82efrxGNV62l69YorUVIvWo9.jpg',
    href: 'https://floowfix.framer.website/'
  },
  {
    img: '/homeservice/plumbox-BMwCUHpKBHTbjY87FwKjP3N98GMBDK.webp',
    href: 'https://plumbox.framer.ai/'
  },
  {
    img: '/homeservice/plubar-WEV58Cz181IXNkPErthz0pKevtCCt4.webp',
    href: 'https://plubaar.framer.website/'
  },
  {
    img: '/homeservice/u6gkiepBxPPCPoEIbEFElVyASiI-ySvWXoestI8uaVg0ivXo3bl7RQl9q2.jpg',
    href: 'https://cleaner.framer.website/?via=framerbite'
  },
  {
    img: '/homeservice/Shot_2-QHO4L1IQEm3dPDu9eeweH3WwCGHu3L.webp',
    href: 'https://onduty.framer.website/'
  },
  {
    img: '/homeservice/solarify-8kdYb3ynVRHgdypgTqVnuaOiwlpA2G.webp',
    href: 'https://solarify.framer.website/'
  },
  {
    img: '/homeservice/2tkkcoiBdJGVEmvOGP5D7uaQECo-nrebTFUx758cT57AlCQrUIpOd90zE4.jpg',
    href: 'https://cleean.framer.website/?via=framerbite'
  },
  {
    img: '/homeservice/PJE7vs3Xz8zxxN2X4f4quU0YMaU-9xafyUh1wiveVfUXRMmAbBuuQxEDTU.jpg',
    href: 'https://quickfix.framer.website/?via=framerbite'
  },
  {
    img: '/homeservice/elNJRSSFA2GLERt3qcPCyHHc0-HqxXo9ThnfX8C1P8tkYotglfTowi9B.jpg',
    href: 'https://plumby.framer.website/'
  }
]


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
