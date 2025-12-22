import EpisodesSection from "@/components/corbacast/EpisodesSection";
import ComingSoonSection from "@/components/corbacast/ComingSoonSection";
import SpotifyEpisodesSection from "@/components/corbacast/SpotifyEpisodesSection";
import { AudioPlayer } from "@/components/corbacast/AudioPlayer";

export default function EpisodesPage() {
    return (
        <div className="pt-20">
            {/* Ao Vivo Online section as hero */}
            <ComingSoonSection />

            <div className="py-8 bg-background flex justify-center w-full relative z-20">
                <AudioPlayer
                    src="/audio/black-sheep.mp3"
                    title="Black Sheep"
                    subtitle="Ben Fuller"
                />
            </div>

            <EpisodesSection />

            <SpotifyEpisodesSection />
        </div>
    );
}
