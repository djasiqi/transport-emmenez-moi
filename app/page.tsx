import About from "@/components/About";
import AvailabilityBanner from "@/components/AvailabilityBanner";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Values from "@/components/Values";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AvailabilityBanner />
      <Values />
      <About />
      <Services />
      <ContactForm />
    </>
  );
}
