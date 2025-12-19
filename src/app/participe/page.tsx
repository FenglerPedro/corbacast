"use client";

import ParticipateSection from "@/components/corbacast/ParticipateSection";
import PlatformsSection from "@/components/corbacast/PlatformsSection";
import NewsletterSection from "@/components/corbacast/NewsletterSection";
import { motion } from "framer-motion";
import { MessageSquare, Instagram, Youtube, Music } from "lucide-react";

export default function ParticipatePage() {
    return (
        <div className="pt-20">
            {/* Hero Section for Participate Page */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                            Faça Parte
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
                            Participe do <span className="gradient-text">Corbã Cast</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Queremos ouvir você! Envie suas perguntas, compartilhe seu testemunho
                            ou sugira temas para nossos próximos episódios.
                        </p>
                    </motion.div>
                </div>
            </section>

            <ParticipateSection />

            {/* Contact Section */}
            <section className="py-16 md:py-24 bg-secondary/20">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-3xl md:text-4xl uppercase mb-4">
                            Entre em <span className="gradient-text">Contato</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Escolha a forma mais conveniente para você se conectar conosco
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/61405946016", color: "bg-green-500/10 text-green-500" },
                            { icon: Music, label: "Spotify", href: "https://open.spotify.com/episode/78BTHj4w3hV1g0YYJeGMA1?si=MLE6jsfkSQe_PXGuNBZIqg", color: "bg-green-600/10 text-green-600" },
                            { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/corba.missions/", color: "bg-pink-500/10 text-pink-500" },
                            { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@corbamissions?si=g0biPXRUePh2who6", color: "bg-red-500/10 text-red-500" },
                        ].map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col items-center gap-4 p-8 bg-card/50 rounded-2xl border border-border hover:border-primary/30 transition-all group"
                            >
                                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <span className="font-display text-lg uppercase">{item.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <PlatformsSection />
            <NewsletterSection />
        </div>
    );
}
