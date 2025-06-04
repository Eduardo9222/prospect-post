import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoSection from "@/components/Video";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <VideoSection />
      <Process />
      <Services />
      <Footer />
    </div>
  );
}
