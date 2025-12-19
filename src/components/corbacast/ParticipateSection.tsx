import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, MessageSquare, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/spotlight-card";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Envie sua Pergunta",
    description: "Mande sua dúvida ou sugestão de tema pelo nosso formulário ou redes sociais.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Compartilhe sua História",
    description: "Conte seu testemunho e inspire outras pessoas com o que Deus tem feito em sua vida.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Divulgue o Podcast",
    description: "Ajude a espalhar a mensagem compartilhando os episódios com amigos e família.",
  },
];

const ParticipateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="participate" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Faça Parte
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
            Como <span className="gradient-text">Participar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O Corbã Cast é feito por todos nós. Existem várias formas de você fazer parte dessa comunidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <GlowCard
                glowColor="red"
                customSize
                className="!aspect-auto h-full p-8 bg-card/50"
              >
                {/* Number badge */}
                <div className="absolute -top-4 left-8 px-3 py-1 bg-primary text-primary-foreground font-display text-sm rounded-full z-10">
                  {step.number}
                </div>

                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://wa.me/61405946016"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display uppercase tracking-wider px-8 group"
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Entrar em Contato
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ParticipateSection;
