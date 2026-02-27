import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HairSection from "@/components/HairSection";
import CoffeeSection from "@/components/CoffeeSection";
import Gallery from "@/components/Gallery";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HairSection />
        <CoffeeSection />
        <Gallery />
        <Info />
      </main>
      <Footer />
    </>
  );
}
