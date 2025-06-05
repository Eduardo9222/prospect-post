import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import InstallationProcess from "@/components/Process";
import OurServices from "@/components/Service";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Video />
      <InstallationProcess />
      <OurServices />
      <Footer />
    </div>
  );
}
