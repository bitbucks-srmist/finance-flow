"use client";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { ArrowRight, ChevronDown, Sparkles, Users, Trophy } from "lucide-react";

export default function HeroSection() {
    const scrollToSection = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-[#0a0820]"
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
            </div>

            {/* Grid Pattern */}
            <div 
                className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"
            />

            <div className="relative z-10 container-custom text-center">
                {/* Badge */}
                <motion.div
                    className="inline-flex items-center justify-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm text-sm font-medium text-cyan-100">
                        <Sparkles size={14} className="text-yellow-400" />
                        <span>B.Tech CSE Fintech Hackathon • Feb 28, 2026</span>
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,212,255,1)] animate-pulse" />
                    </div>
                </motion.div>

                {/* Main title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-6"
                >
                    <h1 className="font-display font-bold leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-2 tracking-tight">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                            FinFlow
                        </span>
                    </h1>
                    <h2 className="font-display font-bold leading-none text-4xl sm:text-5xl md:text-7xl text-purple-100/90">
                        <span className="text-yellow-400/90">&apos;</span>26
                    </h2>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-4 text-cyan-100/90 font-display"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    24 Hours. Infinite Possibilities.
                </motion.p>

                <motion.p
                    className="text-base sm:text-lg max-w-xl mx-auto mb-10 text-purple-200/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    Building the Next Generation of{" "}
                    <span className="text-yellow-400 font-semibold">Accessible Digital Finance</span>
                </motion.p>

                {/* Stats bar */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                >
                    {[
                        { icon: Users, label: "1000+ Registrations", color: "text-cyan-400" },
                        { icon: Trophy, label: "₹5L+ Prizes", color: "text-yellow-400" },
                        { icon: Sparkles, label: "24 Hours • 1 Vision", color: "text-purple-400" },
                    ].map(({ icon: Icon, label, color }) => (
                        <div key={label} className="flex items-center gap-2">
                            <Icon size={16} className={color} />
                            <span className="text-sm font-medium text-purple-200/70">
                                {label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                >
                    <button
                        onClick={() => scrollToSection("#registration")}
                        className="group relative px-8 py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-br from-cyan-500 to-purple-600 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 w-full sm:w-auto min-w-[200px] hover:-translate-y-1"
                    >
                        <span className="flex items-center justify-center gap-2">
                            ⚡ Register Now
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button
                        onClick={() => scrollToSection("#about")}
                        className="px-8 py-4 rounded-2xl font-bold text-lg text-cyan-400 border-2 border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300 w-full sm:w-auto min-w-[200px]"
                    >
                        Explore More
                    </button>
                </motion.div>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                >
                    <CountdownTimer />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cyan-400/50 hover:text-cyan-400 transition-colors"
                onClick={() => scrollToSection("#about")}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-label="Scroll down"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown size={20} />
            </motion.button>
        </section>
    );
}
