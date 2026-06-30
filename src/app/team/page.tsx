import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/Team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the people behind Pixel Walk, a small, hands-on team of automation and AI builders based in France.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <Team />
      </main>
      <Footer />
    </>
  );
}
