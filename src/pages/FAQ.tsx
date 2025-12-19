import Header from "@/components/corbacast/Header";
import FAQSection from "@/components/corbacast/FAQSection";
import Footer from "@/components/corbacast/Footer";
import { motion } from "framer-motion";

const FAQ = () => {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="pt-20">
                {/* Hero Section for FAQ Page */}
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
                                Suporte
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
                                Perguntas <span className="gradient-text">Frequentes</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Encontre respostas para as dúvidas mais comuns sobre o Corbã Cast,
                                nossa missão e como você pode participar.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <FAQSection />
            </div>
            <Footer />
        </main>
    );
};

export default FAQ;
