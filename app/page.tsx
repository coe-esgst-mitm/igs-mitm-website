import Hero from "@/components/Hero";
import UpcomingEvent from "@/components/UpcomingEvent";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Gallery from "@/components/Gallery";
import Committee from "@/components/Committee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <UpcomingEvent />
      <About />
      <Activities />
      <Gallery />
      <Committee />
      <Contact />
      <Footer />
    </main>
  );
}