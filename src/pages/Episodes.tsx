import Header from "@/components/corbacast/Header";
import EpisodesSection from "@/components/corbacast/EpisodesSection";
import ComingSoonSection from "@/components/corbacast/ComingSoonSection";
import Footer from "@/components/corbacast/Footer";

const Episodes = () => {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="pt-20">
                {/* Ao Vivo Online section as hero */}
                <ComingSoonSection />

                <EpisodesSection />
            </div>
            <Footer />
        </main>
    );
};

export default Episodes;
