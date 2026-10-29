
import "./home-sections.css";

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WorldsSection from "@/components/sections/WorldsSection";
import AtmosphereSection from "@/components/sections/AtmosphereSection";
import VisitSection from "@/components/sections/VisitSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ExperienceSection />
        <WorldsSection />
        <section className="section-bg-atmosphere">
        <AtmosphereSection />
        </section>
        <VisitSection />
      </main>

      <Footer />
    </>
  );
}
