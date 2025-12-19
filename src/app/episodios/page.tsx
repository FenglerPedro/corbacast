import EpisodesSection from "@/components/corbacast/EpisodesSection";
import ComingSoonSection from "@/components/corbacast/ComingSoonSection";

export default function EpisodesPage() {
    return (
        <div className="pt-20">
            {/* Ao Vivo Online section as hero */}
            <ComingSoonSection />

            <EpisodesSection />
        </div>
    );
}
