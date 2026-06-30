import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Tools } from "@/components/Tools";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Why } from "@/components/Why";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tools />
        <Services />
        <Process />
        <Why />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
