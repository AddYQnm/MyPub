
import EventHero from "@/components/events/EventHero";
import EventIntro from "@/components/events/EventIntro";
import BilliardSection from "@/components/events/BilliardSection";
import EventCards from "@/components/events/EventCards";
import EventClosing from "@/components/events/EventClosing";
import Footer from "@/components/sections/Footer";
import Header from "@/components/layout/Header";

export default function EvenementsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#151411] text-[#f0e8da]">
      <Header />
      <EventHero />
      <EventIntro />
      <BilliardSection />
      <EventCards />
      <EventClosing />
      <Footer />
    </main>
  );
}
