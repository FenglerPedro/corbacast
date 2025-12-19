import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import flagImage from "@/assets/flag-australia.webp";
import missionaryPhoto from "@/assets/missionary-photo.png";
import { Particles } from "@/components/ui/particles";

const OurHistorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Particles background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#000000"
        size={0.5}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-gray-900 mb-6 leading-tight">
              Nossa <span className="gradient-text">História</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              O Corbã Missions nasceu para obedecer ao chamado de Cristo e alcançar as nações.
              Nossa missão é enviar e apoiar missionários, levando o Evangelho a todos os povos.
              Também usamos plataformas digitais para anunciar a Palavra em diferentes línguas.
              Vivemos para pregar a cruz de Cristo até o Seu retorno.
            </p>
          </motion.div>

          {/* Right side - Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Flag image - rectangular */}
            <div className="relative">
              <img
                src={flagImage}
                alt="Bandeira representando as nações"
                className="w-80 h-52 md:w-[480px] md:h-80 object-cover rounded-lg shadow-lg animate-flag-wave"
              />

              {/* Circular photo - overlapping bottom-left */}
              <div className="absolute -bottom-8 left-4 md:-bottom-12 md:-left-12">
                <img
                  src={missionaryPhoto}
                  alt="Missionário"
                  className="w-24 h-24 md:w-44 md:h-44 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurHistorySection;
