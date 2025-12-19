import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import spotifyLogo from "@/assets/spotify-logo.png";
import youtubeLogo from "@/assets/youtube-logo.png";
import googleMeetLogo from "@/assets/google-meet-logo.png";

const platforms = [
  {
    name: "Spotify",
    description: "Ouça no maior streaming de áudio",
    logo: spotifyLogo,
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30",
  },
  {
    name: "YouTube",
    description: "Assista em vídeo completo",
    logo: youtubeLogo,
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-500/30",
  },
  {
    name: "Google Meet",
    description: "Participe ao vivo",
    logo: googleMeetLogo,
    color: "from-blue-500/20 to-teal-600/10",
    borderColor: "border-blue-500/30",
  },
];

const PlatformsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platforms" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Onde Ouvir
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
            Conheça as <span className="gradient-text">Plataformas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O Corbã Cast está disponível nas principais plataformas de streaming.
            Escolha a sua favorita e não perca nenhum episódio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ duration: 0.3 }}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${platform.color} border ${platform.borderColor} 
                hover:bg-white hover:bg-none hover:border-gray-200 transition-colors duration-300 hover:shadow-2xl overflow-hidden`}
            >
              {/* Shimmer light effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
              </div>

              <div className="w-14 h-14 rounded-xl bg-card group-hover:bg-gray-100 flex items-center justify-center mb-4 
                transition-colors duration-300 overflow-hidden relative z-10">
                <img src={platform.logo} alt={platform.name} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-display text-xl text-foreground group-hover:text-red-600 mb-2 transition-colors duration-300 relative z-10">
                {platform.name}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-gray-800 transition-colors duration-300 relative z-10">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default PlatformsSection;
