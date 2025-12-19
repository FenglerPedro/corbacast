import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Heart, Mic, Home, Users, Headphones, HelpCircle, MessageSquare } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/corba.missions/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@corbamissions?si=g0biPXRUePh2who6", label: "YouTube" },
  { icon: SpotifyIcon, href: "https://open.spotify.com/episode/78BTHj4w3hV1g0YYJeGMA1?si=MLE6jsfkSQe_PXGuNBZIqg", label: "Spotify" },
  { icon: MessageSquare, href: "https://chat.whatsapp.com/DT18r6xgkMb7OkXf8FrTXT?mode=hqrt1", label: "WhatsApp" },
];

const navLinks = [
  { label: "Início", href: "/", icon: Home },
  { label: "Sobre", href: "/sobre", icon: Users },
  { label: "Episódios", href: "/episodios", icon: Headphones },
  { label: "Participe", href: "/participe", icon: MessageSquare },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Animated dotted surface background */}
      <DottedSurface className="opacity-10 text-black" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Top Section - Logo and Description */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 border border-red-200 mb-6">
              <Mic className="w-8 h-8 text-primary" />
            </div>

            <h3 className="font-display text-3xl md:text-4xl uppercase mb-4 text-black">
              <span className="text-primary">Corbã</span> Cast
            </h3>

            <p className="text-zinc-600 max-w-md mx-auto mb-8 font-medium">
              O podcast oficial do Projeto Missionário Corbã.
              Conteúdo que transforma, mensagens que inspiram.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-primary/10 hover:text-primary border border-zinc-200 hover:border-primary/30 transition-all text-zinc-700 font-medium"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center 
                  hover:bg-primary/10 hover:border-primary/30 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-zinc-600 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-200 mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
            <p className="font-medium">© 2024 Corbã Cast. Todos os direitos reservados.</p>
            <p className="flex items-center gap-2 font-medium">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para a glória de Deus
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
