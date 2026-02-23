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
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12"
            style={{ background: "#0a0820" }}
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                    className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[100px] opacity-30"
                    style={{ background: "radial-gradient(circle, #00D4FF, transparent)" }}
                />
                <div 
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-20"
                    style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
                />
            </div>

            {/* Grid Pattern */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                }}
            />

            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
                {/* Badge */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                            background: "rgba(0, 212, 255, 0.1)",
                            border: "1px solid rgba(0, 212, 255, 0.2)",
                            color: "#e0f7ff",
                        }}
                    >
                        <Sparkles size={14} style={{ color: "#FFD700" }} />
                        B.Tech CSE Fintech Hackathon • Feb 28, 2026
                        <span 
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: "#00D4FF", boxShadow: "0 0 8px #00D4FF" }}
                        />
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-4"
                >
                    <h1 
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00D4FF, #8B5CF6, #FFD700)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            FinFlow
                        </span>
                        <span style={{ color: "#FFD700" }}>&apos;26</span>
                    </h1>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl font-medium mb-2"
                    style={{ color: "#e0f7ff", fontFamily: "'Space Grotesk', sans-serif" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    24 Hours. Infinite Possibilities.
                </motion.p>

                <motion.p
                    className="text-base sm:text-lg mb-8 max-w-lg mx-auto"
                    style={{ color: "rgba(200, 200, 255, 0.6)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Building the Next Generation of{" "}
                    <span style={{ color: "#FFD700", fontWeight: 600 }}>Accessible Digital Finance</span>
                </motion.p>

                {/* Stats */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-6 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    {[
                        { icon: Users, label: "1000+ Registrations", color: "#00D4FF" },
                        { icon: Trophy, label: "₹5L+ Prizes", color: "#FFD700" },
                        { icon: Sparkles, label: "24 Hours • 1 Vision", color: "#8B5CF6" },
                    ].map(({ icon: Icon, label, color }) => (
                        <div key={label} className="flex items-center gap-2">
                            <Icon size={16} style={{ color }} />
                            <span className="text-sm font-medium" style={{ color: "rgba(200, 200, 255, 0.7)" }}>
                                {label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <button
                        onClick={() => scrollToSection("#registration")}
                        className="group px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                        style={{
                            background: "linear-gradient(135deg, #00D4FF, #8B5CF6)",
                            boxShadow: "0 4px 20px rgba(0, 212, 255, 0.3)",
                        }}
                    >
                        <span className="flex items-center justify-center gap-2">
                            ⚡ Register Now
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button
                        onClick={() => scrollToSection("#about")}
                        className="px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                        style={{
                            color: "#00D4FF",
                            border: "2px solid rgba(0, 212, 255, 0.4)",
                            background: "transparent",
                        }}
                    >
                        Explore More
                    </button>
                </motion.div>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <CountdownTimer />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors"
                style={{ color: "rgba(0, 212, 255, 0.5)" }}
                onClick={() => scrollToSection("#about")}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-label="Scroll down"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown size={18} />
            </motion.button>
        </section>
    );
}
