import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border border-primary/30 mb-8"
            >
              <Bell className="w-10 h-10 text-primary" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
              Grupo <span className="gradient-text">VIP</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Entre para nosso grupo exclusivo no WhatsApp e receba em primeira mão os novos episódios,
              conteúdos exclusivos e novidades do Corbã Cast.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="h-16 px-10 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-display uppercase 
                tracking-wider group text-lg rounded-full"
              onClick={() => window.open('https://chat.whatsapp.com/DT18r6xgkMb7OkXf8FrTXT?mode=hqrt1', '_blank')}
            >
              Entrar no grupo
              <MessageCircle className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
