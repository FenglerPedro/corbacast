"use client";

import AboutSection from "@/components/corbacast/AboutSection";
import OurHistorySection from "@/components/corbacast/OurHistorySection";
import DynamicsSection from "@/components/corbacast/DynamicsSection";
import NewsletterSection from "@/components/corbacast/NewsletterSection";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Section for About Page */}
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
                            Conheça-nos
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
                            Sobre o <span className="gradient-text">Corbã Cast</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Conheça a história por trás do podcast que nasceu com o propósito
                            de conectar, edificar e levar a mensagem do Evangelho a todas as nações.
                        </p>
                    </motion.div>
                </div>
            </section>

            <AboutSection />
            <OurHistorySection />
            <DynamicsSection />
            <NewsletterSection />
        </div>
    );
}
