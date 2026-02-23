"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeUnit {
    label: string;
    value: number;
}

const HACKATHON_DATE = new Date("2026-02-28T09:00:00+05:30").getTime();

const FlipCard = ({ value, label }: { value: number; label: string }) => {
    const display = String(value).padStart(2, "0");

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 perspective-1000">
                {/* Card */}
                <div className="relative rounded-xl flex items-center justify-center w-full h-full overflow-hidden bg-[#1e1b4b]/90 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                    {/* Middle line */}
                    <div className="absolute left-0 right-0 h-px top-1/2 bg-cyan-500/30 z-10" />
                    
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={display}
                            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {display}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-cyan-400/70">
                {label}
            </span>
        </div>
    );
};

export default function CountdownTimer() {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState<TimeUnit[]>([
        { label: "Days", value: 0 },
        { label: "Hours", value: 0 },
        { label: "Minutes", value: 0 },
        { label: "Seconds", value: 0 },
    ]);

    const getTimeLeft = useCallback((): TimeUnit[] => {
        const diff = Math.max(0, HACKATHON_DATE - Date.now());
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        return [
            { label: "Days", value: days },
            { label: "Hours", value: hours },
            { label: "Minutes", value: minutes },
            { label: "Seconds", value: seconds },
        ];
    }, []);

    useEffect(() => {
        setMounted(true);
        setTime(getTimeLeft());
        
        const interval = setInterval(() => {
            setTime(getTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, [getTimeLeft]);

    if (!mounted) return null;

    const hasEnded = HACKATHON_DATE <= Date.now();

    if (hasEnded) {
        return (
            <div className="text-center font-display text-2xl font-bold text-yellow-400">
                🚀 The Hackathon Has Begun!
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400/60">
                ⚡ Hackathon Begins In
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
                {time.map((unit, i) => (
                    <div key={unit.label} className="flex items-center">
                        <FlipCard value={unit.value} label={unit.label} />
                        {i < time.length - 1 && (
                            <span className="text-3xl sm:text-4xl font-bold text-cyan-400 animate-pulse pb-6 px-1 sm:px-2">
                                :
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
