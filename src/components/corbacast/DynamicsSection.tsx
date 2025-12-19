import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mic2, MessageCircle, BookOpen, Users } from "lucide-react";

const dynamics = [
  {
    icon: Mic2,
    title: "Entrevistas",
    description: "Conversas profundas com líderes, missionários e pessoas com histórias inspiradoras de fé.",
  },
  {
    icon: BookOpen,
    title: "Estudos Bíblicos",
    description: "Reflexões e ensinamentos baseados na Palavra de Deus, aplicados ao contexto atual.",
  },
  {
    icon: MessageCircle,
    title: "Bate-papo",
    description: "Conversas descontraídas sobre temas relevantes para a vida cristã contemporânea.",
  },
  {
    icon: Users,
    title: "Testemunhos",
    description: "Histórias reais de transformação e de como Deus age na vida de pessoas comuns.",
  },
];

const DynamicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Formatos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
            Conheça Nossa <span className="gradient-text">Dinâmica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diversidade de formatos para alcançar diferentes públicos e necessidades espirituais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dynamics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 
                  border border-primary/20 flex items-center justify-center group-hover:border-primary/40 
                  group-hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-primary" />
              </motion.div>
              
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicsSection;
