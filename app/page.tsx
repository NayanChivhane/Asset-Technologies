import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <Stats />
      <Clients />
      <Testimonials/>
      <Contact />

      <Footer />
    </>
  );
}