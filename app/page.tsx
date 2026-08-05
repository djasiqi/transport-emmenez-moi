import About from "@/components/About";
import AvailabilityBanner from "@/components/AvailabilityBanner";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Institutions from "@/components/Institutions";
import LirieConnection from "@/components/LirieConnection";
import ServiceArea from "@/components/ServiceArea";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import Values from "@/components/Values";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AvailabilityBanner />
      <Services />
      <Values />
      <About />
      <HowItWorks />
      <Institutions />
      <LirieConnection />
      <ServiceArea />
      <Faq />
      <ContactForm />
    </>
  );
}
