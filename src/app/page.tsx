import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EcosystemStrip from "@/components/EcosystemStrip";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Audiences from "@/components/Audiences";
import Outcomes from "@/components/Outcomes";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EcosystemStrip />
        <Problem />
        <HowItWorks />
        <Features />
        <Audiences />
        <Outcomes />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
