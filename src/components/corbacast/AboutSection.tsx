"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Cross, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-last lg:order-first"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop"
                alt="Estúdio de podcast"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card border border-border rounded-2xl p-6 shadow-2xl"
            >
              <Cross className="w-8 h-8 text-primary mb-2" />
              <p className="font-display text-2xl text-foreground">Missão</p>
              <p className="text-sm text-muted-foreground">& Propósito</p>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Sobre o Projeto
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6 leading-tight">
              O Departamento de{" "}
              <span className="gradient-text">Mídia</span> do Corbã
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O Corbã Cast é o braço de comunicação do Projeto Missionário Corbã.
              Através de conteúdos em áudio e vídeo, levamos a mensagem do evangelho
              de forma relevante e acessível para a geração atual.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é equipar, inspirar e mobilizar cristãos para viverem
              uma fé autêntica e transformadora no dia a dia.
            </p>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl text-foreground">Paixão</p>
                  <p className="text-sm text-muted-foreground">Pelo Evangelho</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl text-foreground">Comunidade</p>
                  <p className="text-sm text-muted-foreground">Que Cresce</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
