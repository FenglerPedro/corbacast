"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "O que é o Corbã Cast?",
        answer: "O Corbã Cast é um podcast voltado para temas cristãos, missões e edificação da fé, trazendo convidados especiais e discussões relevantes para a igreja atual."
    },
    {
        question: "Como posso ouvir os episódios?",
        answer: "Você pode ouvir nossos episódios diretamente aqui no site, ou através das principais plataformas de streaming como Spotify, Apple Podcasts, Deezer e YouTube."
    },
    {
        question: "Como posso participar do podcast?",
        answer: "Você pode enviar suas perguntas, sugestões de temas ou testemunhos através da nossa página 'Participe', ou entrar em contato pelas nossas redes sociais."
    },
    {
        question: "Qual a frequência de novos episódios?",
        answer: "Lançamos novos episódios semanalmente. Fique ligado em nossas redes sociais e inscreva-se na nossa newsletter para não perder nada."
    },
    {
        question: "O Corbã Cast é vinculado a alguma denominação?",
        answer: "O Corbã Cast é um projeto interdenominacional que busca servir ao Reino de Deus como um todo, focando na unidade e na expansão do Evangelho."
    }
];

const FAQSection = () => {
    return (
        <section className="py-24 bg-background min-h-[60vh] flex items-center">
            <div className="section-container max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                        Tira-Dúvidas
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
                        Perguntas <span className="gradient-text">Frequentes</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-display uppercase tracking-wide">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
