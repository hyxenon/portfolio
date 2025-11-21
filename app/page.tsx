import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
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
      <Experience />
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
