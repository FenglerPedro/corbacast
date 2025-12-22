"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, Clock, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const episodes = [
    {
        title: "A Jornada da Fé",
        description: "Uma reflexão profunda sobre os desafios e alegrias de caminhar com Deus no dia a dia.",
        duration: "45 min",
        date: "Em breve",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
        title: "Propósito e Chamado",
        description: "Descobrindo o plano de Deus para sua vida e como viver com intencionalidade.",
        duration: "38 min",
        date: "Em breve",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=400&fit=crop",
    },
    {
        title: "Comunidade Autêntica",
        description: "A importância de relacionamentos genuínos na jornada cristã.",
        duration: "52 min",
        date: "Em breve",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
    },
    {
        title: "Fé e Cultura",
        description: "Como viver sua fé em um mundo em constante transformação cultural.",
        duration: "41 min",
        date: "Em breve",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    },
    {
        title: "Liderança Servidora",
        description: "Princípios de liderança baseados no exemplo de Cristo.",
        duration: "48 min",
        date: "Em breve",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop",
    },
    {
        title: "Esperança Viva",
        description: "Mantendo a esperança em tempos de incerteza e dificuldade.",
        duration: "35 min",
        date: "Em breve",
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&h=400&fit=crop",
    },
];

const SpotifyEpisodesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, itemsPerPage]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (episodes.length - itemsPerPage + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? episodes.length - itemsPerPage : prev - 1));
    };

    return (
        <section id="spotify-episodes" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background to-[#1DB954]/5" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-[#1DB954]/10 text-[#1DB954] text-sm font-medium rounded-full mb-6">
                        Áudio
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
                        Episódios do <span className="text-[#1DB954]">Spotify</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Acompanhe nossos podcasts onde quer que você esteja.
                    </p>
                </motion.div>

                <div className="relative group">
                    {/* Main Carousel Container */}
                    <div className="overflow-hidden px-4 md:px-0">
                        {/* Layout wrapper */}
                    </div>

                    <div className="relative overflow-hidden">
                        {/* Side Gradients for "hiding" effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {episodes.map((episode, index) => (
                                <div
                                    key={index}
                                    className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3"
                                >
                                    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-[#1DB954]/30 
                    transition-all duration-500 card-hover h-full">
                                        {/* Image */}
                                        <div className="relative aspect-square overflow-hidden">
                                            <img
                                                src={episode.image}
                                                alt={episode.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                                            {/* Play button overlay */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileHover={{ opacity: 1, scale: 1 }}
                                                className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            >
                                                <div className="w-16 h-16 rounded-full bg-[#1DB954] flex items-center justify-center glow-effect shadow-[0_0_20px_rgba(29,185,84,0.5)]">
                                                    <Play className="w-8 h-8 text-white ml-1" />
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-[#1DB954] transition-colors">
                                                {episode.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                                {episode.description}
                                            </p>

                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{episode.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{episode.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-[#1DB954] hover:text-white transition-colors z-20"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-[#1DB954] hover:text-white transition-colors z-20"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://open.spotify.com/episode/78BTHj4w3hV1g0YYJeGMA1?si=MLE6jsfkSQe_PXGuNBZIqg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-12 bg-[#1DB954] hover:bg-[#1DB954]/90 text-white font-display uppercase tracking-wider px-8 rounded-md transition-colors"
                    >
                        Ver Todos os Episódios
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SpotifyEpisodesSection;
