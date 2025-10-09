import IntegrationsSection from "@/components/IntegrationsSection";
import GetStartedTab from "./getstarted";
import Header from "@/components/Navbar";
import Footer from "@/components/footer";


export default function Home() {
    return (
        <>
            <Header Logotext={"main"}></Header>
            <GetStartedTab></GetStartedTab>
            <IntegrationsSection></IntegrationsSection>
            <Footer Logotext={"main"}></Footer>
        </>
    );
}