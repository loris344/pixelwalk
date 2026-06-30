import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Tools } from "@/components/Tools";
import { Services } from "@/components/Services";
import { Examples } from "@/components/Examples";
import { Process } from "@/components/Process";
import { Why } from "@/components/Why";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tools />
        <Examples />
        <Services />
        <Process />
        <Why />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
