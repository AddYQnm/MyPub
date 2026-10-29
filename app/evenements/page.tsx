
import EventHero from "@/components/events/EventHero";
import EventIntro from "@/components/events/EventIntro";
import BilliardSection from "@/components/events/BilliardSection";
import EventCards from "@/components/events/EventCards";
import EventClosing from "@/components/events/EventClosing";

export default function EvenementsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#151411] text-[#f0e8da]">
      <EventHero />
      <EventIntro />
      <BilliardSection />
      <EventCards />
      <EventClosing />
    </main>
  );
}
