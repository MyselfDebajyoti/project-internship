import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import RoomSection from "@/components/rooms";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <RoomSection />
    </main>
  );
}
