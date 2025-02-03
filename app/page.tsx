import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import RoomSection from "@/components/rooms";
import ServicesSection from "@/components/services";
import StatsCounter from "@/components/customer-count";
import GallerySection from "@/components/gallery-two";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <RoomSection />
      <ServicesSection />
      <StatsCounter />
      <GallerySection />
      <ContactForm />
      <Footer />
    </main>
  );
}
