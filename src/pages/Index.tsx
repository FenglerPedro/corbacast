import Header from "@/components/corbacast/Header";
import HeroSection from "@/components/corbacast/HeroSection";
import AboutSection from "@/components/corbacast/AboutSection";
import OurHistorySection from "@/components/corbacast/OurHistorySection";
import PlatformsSection from "@/components/corbacast/PlatformsSection";
import NewsletterSection from "@/components/corbacast/NewsletterSection";
import EpisodesSection from "@/components/corbacast/EpisodesSection";
import ComingSoonSection from "@/components/corbacast/ComingSoonSection";
import DynamicsSection from "@/components/corbacast/DynamicsSection";
import ParticipateSection from "@/components/corbacast/ParticipateSection";
import EventSection from "@/components/corbacast/EventSection";
import Footer from "@/components/corbacast/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <OurHistorySection />
      <PlatformsSection />
      <NewsletterSection />
      <EpisodesSection />
      <ComingSoonSection />
      <DynamicsSection />
      <ParticipateSection />
      <EventSection />
      <Footer />
    </main>
  );
};

export default Index;
