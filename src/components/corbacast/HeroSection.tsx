"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.png";
import { Headphones, Play, Pause } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ClientOnly } from "@/components/ui/client-only";

const Headphone3D = dynamic(
  () => import("./Headphone3D").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }
);

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex pt-24 md:pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="section-container pb-12 md:pb-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="max-w-2xl">
            {/* Welcome badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-sm uppercase tracking-wider text-muted-foreground">Seja bem-vindo ao</span>
              <span className="px-4 py-1.5 rounded-full border border-primary/30 text-sm font-medium text-primary">
                CORBACAST
              </span>
            </motion.div>

            {/* Main Title with mixed typography */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-script text-5xl md:text-6xl text-foreground"
              >
                Conexão que
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 flex-wrap"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0">
                  <div className="flex gap-1 items-center justify-center h-full">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-primary rounded-full"
                        animate={{ height: [6, 12, 6] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <span className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground uppercase tracking-tight leading-none">
                  TRANSFORMA
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-script text-4xl md:text-5xl lg:text-6xl text-primary text-center md:text-right md:pr-12"
              >
                Sua Vida
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-muted-foreground text-lg max-w-md"
            >
              Ouça nosso último episódio nas principais
              plataformas de streaming e fique por dentro
              de tudo que acontece no mundo cristão.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/episodios"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors whitespace-nowrap text-center inline-flex items-center justify-center"
              >
                Ver episódios
              </Link>
              <a
                href="https://chat.whatsapp.com/DT18r6xgkMb7OkXf8FrTXT?mode=hqrt1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors whitespace-nowrap text-center inline-flex items-center justify-center"
              >
                Entrar no grupo
              </a>
            </motion.div>

            {/* Platform links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex items-center gap-6"
            >
              <span className="text-sm text-muted-foreground">Disponível em:</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@corbamissions?si=g0biPXRUePh2who6"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="https://open.spotify.com/episode/78BTHj4w3hV1g0YYJeGMA1?si=MLE6jsfkSQe_PXGuNBZIqg"
                  className="text-[#1DB954] hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right side - Visual elements */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Background decorative shape */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute inset-0 m-auto w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-3xl -rotate-6"
              />

              {/* 3D Headphone Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-0 z-10"
              >
                <Headphone3D />
              </motion.div>
            </div>

            {/* Audio Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative z-20"
            >
              <audio ref={audioRef} src="/audio/a-boa-parte.mp3" loop />

              <button
                onClick={togglePlay}
                className="w-[320px] md:w-[500px] flex items-center justify-start gap-4 bg-background/50 backdrop-blur-md border border-primary/20 hover:border-primary/50 text-foreground py-2 pl-2 pr-6 rounded-full transition-all group shadow-lg hover:shadow-primary/20"
              >
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center shrink-0
                  ${isPlaying ? 'bg-primary text-white' : 'bg-primary/20 text-primary'}
                  transition-colors
                `}>
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  )}
                </div>

                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary/80 transition-colors">
                    Ouça agora
                  </p>
                  <div className="flex items-center justify-start gap-2">
                    <p className="font-display text-sm">A Boa Parte</p>
                    <div className="flex gap-0.5 items-end h-3">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-0.5 bg-primary rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'h-1'}`}
                          style={{
                            height: isPlaying ? `${Math.random() * 100}%` : '4px',
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
