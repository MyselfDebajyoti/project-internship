import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import RoomSection from "@/components/rooms";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <RoomSection />
      <ServicesSection />
    </main>
  );
}
