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





const TemplateDesigns=[
  {
    img: "/food/mood-7AWs6UkY3k3OJLrK2WSw9isAVQapAe.webp",
    href:"https://moodtemplate.framer.website/"
  },
  {
    img: "/food/latte-cafe-restaurant-template-aorM02VrW0BXaSBt2T2SWT0wa2KVwH.webp",
    href:"https://lattetemplate.framer.website/"
  },
  {
    img: "/food/pepper-4A83CjRvpvX4vZNO3P1ZFJjL5Rgkel.webp",
    href:"https://pepper.framer.website/"
  },
  {
    img: "/food/slice-town-72u22QVJmRmqDSOVhtL9PNpNPZERja.jpg",
    href:"https://slice-town-wbs.framer.website/"
  },
  {
    img: "/food/the-veloria-NTjIMQdJnyvLk0CnJ0SuAjbZYhwSTn.webp",
    href:"https://veloriarestaurant.framer.website/"
  },
  {
    img: "/food/brewhaus-s7iWezZrwxgsqV6J19RhXNgRJfr0TK.webp",
    href:"https://brewhaus.framer.website/"
  },
  {
    img: "/food/patty-uxJY8HWLseG6JuPvJr8rouUNPQg5be.webp",
    href:"https://patty.framer.website/"
  },
  {
    img: "/food/yumix-Ug5CdhfEVtm78vxuiw0tCBB7sVJUGx.webp",
    href:"https://yumix.framer.website/"
  },
  {
    img: "/food/bamzi-I41uTUwr0GJnOQzKbxEbZ1PYOy97ou.webp",
    href:"https://bamzi.framer.website/?via=framerdevs"
  },
  {
    img: "/food/monks-crave-oNcLstovWvlF9DwICFGSVXEknblMQW.webp",
    href:"https://monkscrave.framer.website/"
  },
  {
    img: "/food/craving-FyfmTx4K5ApqqeCJMClfawvryLSzYM.webp",
    href:"https://craving-framerwebpro.framer.website/"
  },
  {
    img: "/food/gusto-verde-g4xRUI50WSS648xSvks1ZSjsPu2bRK.webp",
    href:"https://gusto-verde.framer.website/"
  },
  {
    img: "/food/grillify-NsxZGlKBf9dsEphxm5pEihFxFMI5tn.jpg",
    href:"https://grillify.framer.website/"
  },
  {
    img: "/food/cateredplate-IxvFNjWvKd6I7WGfcK9q7EFhz56lv9.webp",
    href:"https://cateredplate.framer.website/"
  },
  {
    img: "/food/mahagera-Iqhr86lO6c1bYkkZMZycRJcb3Z8g9T.webp",
    href:"https://mahagera.framer.website/"
  },
  {
    img: "/food/luxdin-LSPTorcvNYSZ4h8FqKqnqXXHFdBNu1.webp",
    href:"https://luxdin.framer.website/"
  },
  {
    img: "/food/1-c670j9JDgPSELuhO6kwpoYrFlCal7U.webp",
    href:"https://latteart.framer.website/"
  },
  {
    img: "/food/syntstore-ojOuT1eR2kpILXQapbZZoTaL9pMuBB.webp",
    href:"https://syntstore.framer.website/"
  },
  {
    img: "/food/armora-7QHY5sz7eFgepQX7okYyEWU9OXmiTc.webp",
    href:"https://armora.framer.website/"
  },
  {
    img: "/food/cuisine-K7gMUxGAjnupqfzwSwmSC0iVrX37Ds.webp",
    href:"https://cuisine.framer.website/"
  },
  {
    img: "/food/nutriwell-ioVQyChgEE75plImoAh3TsIq1wfQGM.webp",
    href:"https://nutriwell.framer.website/"
  }
]

export default function Home() {
  return (
    <>
      <Header Logotext={"restaurants"}></Header>
      <HeroSection mainimage={'/Dashboard Design (1).png'} />
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection Logotext={"restaurants"}  ></ComparatorSection>
      <PricingSection></PricingSection>
      <Desgines TemplateDesigns={TemplateDesigns}></Desgines>
      <IntegrationsSection></IntegrationsSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
      <Footer Logotext={"restaurants"}></Footer>
    </>
  );
}
