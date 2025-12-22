"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
    src: string;
    title: string;
    subtitle?: string;
}

export const AudioPlayer = ({ src, title, subtitle = "Ouça agora" }: AudioPlayerProps) => {
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative z-20 flex justify-center w-full"
        >
            <audio ref={audioRef} src={src} loop />

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

                <div className="text-left w-full overflow-hidden">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary/80 transition-colors">
                        {subtitle}
                    </p>
                    <div className="flex items-center justify-start gap-2">
                        <p className="font-display text-sm truncate">{title}</p>
                        <div className="flex gap-0.5 items-end h-3 shrink-0">
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
    );
};
