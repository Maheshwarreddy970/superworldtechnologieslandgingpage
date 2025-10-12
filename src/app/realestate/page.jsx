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
  title: "AI Real Estate Websites | SuperWorld Technologies",
  description: "Intelligent real estate websites with AI property matching, virtual 3D tours, instant lead capture & automated follow-ups. Convert 50% more buyers to properties.",
  openGraph: {
    title: "AI Real Estate Websites | SuperWorld Technologies",
    description: "Intelligent real estate websites with AI property matching, virtual 3D tours, instant lead capture & automated follow-ups. Convert 50% more buyers to properties.",
    url: "https://www.superworldtechnologies.com/real-estate",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail1.png",
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
    images: ["https://www.superworldtechnologies.com/thumbnail1.png"],
  },
}




const TemplateDesigns = [
  {
    img: "/realestate/kaliso-8yohk38usT6mjpTs9nu2VqwehQnZWp.webp",
    href: 'https://kaliso.framer.website/',
  },
  {
    img: '/realestate/vistahaven-oC7rQ4lLJAZdkUAZLNTNnmByO4qAwV.jpg',
    href: 'https://vistahaven.framer.website/',
  },
  {
    img: '/realestate/realest-Zjj3kJD0auKBYi0h8s4G641SW4ScoP.webp',
    href: 'https://realest.framer.website/',
  },
  {
    img: '/realestate/ambience-qikGboe9lE96L4HmpLc4XlWuapaOBf.webp',
    href: 'https://ambience.framer.website/',
  },
  {
    img: '/realestate/real-GILsMxn23jgFXU5xK7Ym8e9jELPkJB.webp',
    href: 'https://realagent.framer.website/',
  },
  {
    img: '/realestate/primeplace-ZrqEBunlddRiGMfINbzm6MBim0fRYK.webp',
    href: 'https://brickly.framer.website/',
  },
  {
    img: '/realestate/flowspace-dJZ48DY9Op3oISgPWgfW0mGbmlFtKU.webp',
    href: 'https://flowspace.framer.website/',
  },
  {
    img: '/realestate/royalsuits-ZyxwlKGy1qWdCBqhK8bO58rMaPM5pK.webp',
    href: 'https://royalsuits.framer.website/rooms-suits/family-interconnected',
  },
  {
    img: '/realestate/nestify-zbV2R3Fmqnhn6tO4fuV2anBAIRQyxD.webp',
    href: 'https://nestify.framer.website/',
  },
  {
    img: '/realestate/findit-hJAnVMmVkw2eOWyaBbv76vVSiN2NnX.webp',
    href: 'https://findit.framer.website',
  },
  {
    img: '/realestate/haven-ZoHgbjfQevPZMbQRxDCFX3jGuPSQjz.webp',
    href: 'https://haven.framer.media/?via=hxmzaehsan&utm_source=framer',
  },
  {
    img: '/realestate/luxify-architecture-template-jIT1dfbyTqDXlevOjhT09nnLGQZRwn.webp',
    href: 'https://luxify.framer.website/',
  },
  {
    img: '/realestate/haventra-RhaBFlZZ6xTMfi4TU6ULzaFwoyTl4d.webp',
    href: 'https://haventra.framer.website/',
  },
  {
    img: '/realestate/dwello-zPC6es7xd9z28IbwJIEpvZfo1knMmX.webp',
    href: 'https://dwello.framer.website/',
  },
  {
    img: '/realestate/realestic-w8o13uh5SFHeL7uGFb35vmMZgbHRMF.webp',
    href: 'https://realestic.framer.website/',
  },
  {
    img: '/realestate/cottage-2UUkQpQcXF6Bw8JXORYOwNptcQGKu8.webp',
    href: 'https://cottage.framer.website/',
  },
  {
    img: '/realestate/homforte-b8DUsxallq1kPiIdwiZ5hqlcxP3IPW.webp',
    href: 'https://homfort.framer.website/',
  },
  {
    img: '/realestate/goeboek-real-estate-and-property-website-uc7zX4wuF4lPDVzLUjAeF6zgABSvIw.webp',
    href: 'https://goeboek.framer.website/',
  },
  {
    img: '/realestate/harmony-qsPeimo7qNkgEniLdSTolwNoaT8m3y.webp',
    href: 'https://harmony.framer.media/',
  },
  {
    img: '/realestate/estates-C0XlFrCmtgmjufOwD8BfpEtI32MmE2.webp',
    href: 'https://estates.framer.website/',
  },
  {
    img: '/realestate/urbankeys-OxdGEg367Zy1hDvw1In2blpXtjCJdA.webp',
    href: 'https://urbankeys-template.framer.website/',
  },
  {
    img: '/realestate/residencekit-iIIE9lvTAWOQ8NrlIr4wgWnH7La3fi.webp',
    href: 'https://residence-properties.framer.website/',
  },
  {
    img: '/realestate/shelter-RbfffuHDS7rsz1FuTbxXMpp8wXYpXM.webp',
    href: 'https://sheltertemplate.framer.website/',
  },
  {
    img: '/realestate/nobility-Wv6cZdyrKzyJHuPj8aR8pn8TPNy9Cc.webp',
    href: 'https://nobility.framer.website/property',
  },
  {
    img: '/realestate/dreamhouse-mib6N9XZ0iS3HAMpFGdAErUJW82Oxr.jpg',
    href: 'https://finding-dreamhouse.framer.website/',
  },
  {
    img: '/realestate/zafron-0MtJoYr5mcQKhsMIUkIUgpSBK9NSbV.webp',
    href: 'https://zafron.framer.website/',
  },
  {
    img: '/realestate/onearc-OaP98iv64osuvzHK3t7cSppVeBxHpX.webp',
    href: 'https://onearc.framer.website/',
  },
  {
    img: '/realestate/nirastate-OS9K637NUDt16eDjiiMLRjXWnQeHgR.jpg',
    href: 'https://nirastate.framer.website/',
  },
  {
    img: '/realestate/7f8fffb54aca-Hero_201-oBgd1BdaHwZ7WW3nh2Js6SpkbwnC5d.webp',
    href: 'https://luxusresidenz.framer.website/',
  },
  {
    img: '/realestate/azura-cFzkrMzIprYV1wURaEm6Iekvjy4Nrh.webp',
    href: 'https://azura.framer.website/',
  },

  {
    img: "/realestate/swaarg-Rsu6eCI9zMYj9y628wfmgMpywKv4Nd.webp",
    href: 'https://swaarg.framer.website/?via=remixframer',
  },
  {
    img: "/realestate/ruma-KgePBh0VqmoQLhZrOh7LDTKvgofmeS.webp",
    href: 'https://ruma.framer.website/',
  }
]

export default function Home() {
  return (
    {
      img: "/realestate/",
      href: '',
    },
    <>
      <Header Logotext={"realestate"}></Header>
      <HeroSection mainimage={'/re.jpg'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection Logotext={"realestate"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <Desgines TemplateDesigns={TemplateDesigns}></Desgines>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"realestate"}></Footer>
    </>
  );
}
