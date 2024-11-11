import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import KeyMetrics from "@/components/KeyMetrics";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Stack from "@/components/Stack";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      {/* <LogoAnimation /> */}
      <Portfolio />
      <KeyMetrics />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
