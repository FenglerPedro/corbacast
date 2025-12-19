import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Wifi } from "lucide-react";

const ComingSoonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&h=1080&fit=crop"
          alt="Background"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/20 border border-primary/30 rounded-full mb-8"
          >
            <Wifi className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-medium">Em Breve</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase mb-6 leading-tight">
            Ao Vivo <span className="gradient-text">Online</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Em breve você poderá acompanhar gravações ao vivo, participar de lives 
            exclusivas e interagir em tempo real com a equipe do Corbã Cast.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl">
              <Video className="w-5 h-5 text-primary" />
              <span className="text-foreground">Lives Semanais</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="text-foreground">Interação ao Vivo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
