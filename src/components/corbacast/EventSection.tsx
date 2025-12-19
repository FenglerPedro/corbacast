"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "O que é o Corbã Cast?",
    answer: "O Corbã Cast é o podcast oficial do departamento de mídia do projeto missionário Corbã. Aqui compartilhamos histórias, testemunhos e ensinamentos edificantes."
  },
  {
    question: "Qual a frequência dos episódios?",
    answer: "Lançamos novos episódios quinzenalmente, sempre trazendo convidados especiais e temas relevantes para sua caminhada cristã."
  },
  {
    question: "Onde posso assistir?",
    answer: "Os episódios estão disponíveis no YouTube, Spotify, Apple Podcasts e em nosso site oficial."
  },
  {
    question: "Como posso participar da lista de transmissão?",
    answer: "Você pode entrar em nosso grupo VIP do WhatsApp clicando no botão 'Entrar no grupo' na seção abaixo."
  },
  {
    question: "O Corbã Cast é de qual igreja?",
    answer: "Somos um projeto interdenominacional, focado na expansão do Reino e na edificação do corpo de Cristo, independente de placas de igreja."
  }
];

const EventSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Tira Dúvidas
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6 leading-tight">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Confira as respostas para as dúvidas mais comuns sobre nosso podcast e projeto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
