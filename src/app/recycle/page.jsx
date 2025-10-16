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








const TemplateDesigns=[
  {
    img: "/recycle/",
    href: 'https://moodtemplate.framer.website/',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
  {
    img: "/recycle/",
    href: '',
  },
]


export default function Home() {
  return (
    <>
      <Header Logotext={"recycle"}></Header>
      <HeroSection mainimage={'/rc.jpg'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection Logotext={"recycle"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"recycle"}></Footer>
    </>
  );
}
