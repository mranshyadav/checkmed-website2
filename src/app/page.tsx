import Hero from "@/components/Hero";
import EcosystemStrip from "@/components/EcosystemStrip";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import Outcomes from "@/components/Outcomes";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <EcosystemStrip />
      <Problem />
      <HowItWorks />
      <Partners />
      <Outcomes />
      <Clients />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
