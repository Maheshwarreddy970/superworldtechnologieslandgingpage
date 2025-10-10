import ComparatorSection from "@/components/ComparatorSection";
import CTA from "@/components/cta";
import Desgines from "@/components/Desgines";
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
    url: "www.superworldtechnologies.com/car-dealerships",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "www.superworldtechnologies.com/thumbnail3.png",
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
    images: ["www.superworldtechnologies.com/thumbnail3.png"],
  },
}

const TemplateDesigns = [
  {
    img: '/cardealer/carnov-0Rhxq8ztLKyqTsnTBrcuLA3J2SvLk0.webp',
    href: 'https://carnov.framer.website/',
  },
  {
    img: '/cardealer/opurent-inxrQMKSHBwZUi14l0KdZfZCInmnpG.webp',
    href: 'https://opurent.framer.website/',
  },
  {
    img: '/cardealer/HBsPAhydM7w3F2BXTN8QUDHs0.avif',
    href: 'https://bydrive.framer.website/landing-page-rent-sports',
  },
  {
    img: '/cardealer/drivoxe-R5fBw86IvnodiyFl1GgcDxn0wEx7rV.webp',
    href: 'https://drivoxe.framer.website/',
  },
  {
    img: '/cardealer/luxerra-qpu5ZvpNb7r402PwCyI3FnlviJerJ3.jpg',
    href: 'https://luxerra.framer.website/',
  },
  {
    img: '/cardealer/Used-Car-Dealerships-in-Albuquerque-creative-1-CarMax-Albuquerque-1024x576.webp',
    href: 'https://www.carmax.com/',
  },
  {
    img: '/cardealer/Alba-Car.jpeg',
    href: 'https://albacars.ae/',
  },
  {
    img: '/cardealer/8963370462632bd5efb6664524843a7b2b4e934397dd0c58606a27304668410d1742309016760.webp',
    href: 'https://www.wix.com/sgtemplates/r-baxter',
  },
  {
    img: '/cardealer/648a060df628d8b735bc3af4_carwashcover.jpeg',
    href: 'https://car-wash-wcopilot.webflow.io/',
  },
  {
    img: '/cardealer/677ddc617948d520e2b91016_00c52ff7-a0c6-499f-8519-c4e5770d05b0.webp',
    href: 'https://garageflow-template.webflow.io/home',
  },
  {
    img: '/cardealer/67883a3860ec96e483b5bea1_9e3720ef-f5cb-4942-babc-9073b4593f34.webp',
    href: 'https://motordeal.webflow.io/',
  },
  {
    img: '/cardealer/689f873c173cd507939071d1_f7168b47-7d46-4a6a-934c-4a19298bbdc3.webp',
    href: 'https://rydex.webflow.io/',
  },
  {
    img: '/cardealer/6863f01ca4aea97ad17146cf_90aee2c2.webp',
    href: 'https://cruze.webflow.io/',
  },
  {
    img: '/cardealer/Screenshot2025-10-1016401.jpeg',
    href: 'https://finalwebsite-five.vercel.app/car',
  },
];


export default function Home() {
  return (
    <>
      <Header Logotext={"cardealer"}></Header>
      <HeroSection mainimage={'/cd.jpg'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection Logotext={"cardealer"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <Desgines TemplateDesigns={TemplateDesigns}></Desgines>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"cardealer"}></Footer>
    </>
  );
}
