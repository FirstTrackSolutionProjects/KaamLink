import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import TrustStats from "../components/TrustStats";
import Testimonials from "../components/Testimonials";
import Cities from "../components/Cities";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <TrustStats />
      <Testimonials />
      <Cities />
      <FAQ />
    </>
  );
}
