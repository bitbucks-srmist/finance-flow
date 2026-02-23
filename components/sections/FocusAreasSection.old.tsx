"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const focusAreas = [
    {
        id: 1,
        emoji: "🌐",
        title: "Financial Inclusion",
        tagline: "Banking the Unbanked",
        description:
            "Build solutions for the 1.4 billion unbanked adults globally. Create accessible digital wallets, micro-lending platforms, and community credit systems that work without smartphones or stable internet.",
        tags: ["Digital Wallets", "Micro-lending", "Last-Mile"],
        color: "#00D4FF",
        gradient: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.05))",
        border: "rgba(0, 212, 255, 0.35)",
        glow: "0 0 40px rgba(0,212,255,0.25)",
    },
    {
        id: 2,
        emoji: "₿",
        title: "DeFi & Blockchain",
        tagline: "Rewriting the Rules",
        description:
            "Harness the power of decentralized protocols to create transparent lending pools, yield optimization strategies, and on-chain credit scores that don't discriminate.",
        tags: ["Smart Contracts", "DeFi Protocols", "Web3"],
        color: "#8B5CF6",
        gradient: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.05))",
        border: "rgba(139, 92, 246, 0.35)",
        glow: "0 0 40px rgba(139,92,246,0.25)",
    },
    {
        id: 3,
        emoji: "🎓",
        title: "Student Finance",
        tagline: "Funding the Future",
        description:
            "Design income-share agreements, peer-to-peer student loan markets, stipend management apps, and AI-powered scholarship discovery platforms tailored for Gen Z.",
        tags: ["ISA", "P2P Loans", "Scholarship AI"],
        color: "#FFD700",
        gradient: "linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,215,0,0.05))",
        border: "rgba(255, 215, 0, 0.35)",
        glow: "0 0 40px rgba(255,215,0,0.25)",
    },
    {
        id: 4,
        emoji: "🏪",
        title: "MSME Tools",
        tagline: "Empowering Small Business",
        description:
            "Build invoice financing platforms, automated GST reconciliation, smart cash-flow forecasting, and embedded insurance products for India's 63 million micro-enterprises.",
        tags: ["Invoice Finance", "GST", "Cash Flow AI"],
        color: "#10b981",
        gradient: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05))",
        border: "rgba(16, 185, 129, 0.35)",
        glow: "0 0 40px rgba(16,185,129,0.25)",
    },
    {
        id: 5,
        emoji: "🌍",
        title: "Cross-Border Payments",
        tagline: "Borderless Money",
        description:
            "Create sub-second, near-zero-fee international remittance solutions. Leverage stablecoins, FX hedging algorithms, and multi-rail settlement to connect global diaspora.",
        tags: ["Remittance", "Stablecoins", "FX Hedging"],
        color: "#f97316",
        gradient: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))",
        border: "rgba(249, 115, 22, 0.35)",
        glow: "0 0 40px rgba(249,115,22,0.25)",
    },
    {
        id: 6,
        emoji: "💎",
        title: "Gen Z Wealth",
        tagline: "Investing Reimagined",
        description:
            "Design gamified micro-investing apps, social trading platforms, AI portfolio advisors, and fractional real-estate tools that make wealth-building intuitive and social.",
        tags: ["Micro-Investing", "Social Trading", "AI Advisor"],
        color: "#ec4899",
        gradient: "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(236,72,153,0.05))",
        border: "rgba(236, 72, 153, 0.35)",
        glow: "0 0 40px rgba(236,72,153,0.25)",
    },
];

export default function FocusAreasSection() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section id="focus-areas" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
            {/* Radial bg accent */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10"
                style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
            />

            <div className="relative container-custom">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span
                        className="inline-block text-sm font-semibold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full"
                        style={{
                            color: "#8B5CF6",
                            background: "rgba(139, 92, 246, 0.1)",
                            border: "1px solid rgba(139, 92, 246, 0.25)",
                        }}
                    >
                        Core Focus Areas
                    </span>
                    <h2
                        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f0f0ff" }}
                    >
                        Choose Your{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8B5CF6, #00D4FF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Battleground
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(200, 200, 255, 0.65)" }}>
                        Six critical domains in financial technology. Pick your passion and build something that matters.
                    </p>
                </motion.div>

                {/* Hex-inspired Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {focusAreas.map((area, i) => (
                        <motion.div
                            key={area.id}
                            className="group relative rounded-2xl p-6 cursor-pointer transition-all duration-400 overflow-hidden"
                            style={{
                                background: area.gradient,
                                border: `1px solid ${activeCard === area.id ? area.color + "80" : area.border}`,
                                boxShadow: activeCard === area.id ? area.glow : "none",
                                backdropFilter: "blur(12px)",
                            }}
                            initial={{ opacity: 0, y: 60, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                            onClick={() => setActiveCard(activeCard === area.id ? null : area.id)}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Top content */}
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="text-4xl mb-3 block">{area.emoji}</span>
                                    <h3
                                        className="font-display font-bold text-xl"
                                        style={{ color: "#f0f0ff", fontFamily: "Space Grotesk, sans-serif" }}
                                    >
                                        {area.title}
                                    </h3>
                                    <p className="text-sm mt-1" style={{ color: area.color, opacity: 0.85 }}>
                                        {area.tagline}
                                    </p>
                                </div>
                                <motion.div
                                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                    style={{ background: area.color + "20", border: `1px solid ${area.color}40` }}
                                    animate={{ rotate: activeCard === area.id ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span style={{ color: area.color, fontSize: "18px", fontWeight: "bold" }}>+</span>
                                </motion.div>
                            </div>

                            {/* Expandable description */}
                            <motion.div
                                initial={false}
                                animate={{
                                    height: activeCard === area.id ? "auto" : 0,
                                    opacity: activeCard === area.id ? 1 : 0,
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                style={{ overflow: "hidden" }}
                            >
                                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(200, 200, 255, 0.75)" }}>
                                    {area.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {area.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 rounded-full font-medium"
                                            style={{
                                                background: area.color + "20",
                                                color: area.color,
                                                border: `1px solid ${area.color}30`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Collapsed preview */}
                            <motion.p
                                className="text-sm"
                                style={{ color: "rgba(180, 180, 220, 0.55)" }}
                                animate={{ opacity: activeCard === area.id ? 0 : 1, height: activeCard === area.id ? 0 : "auto" }}
                                transition={{ duration: 0.2 }}
                            >
                                {area.description.slice(0, 80)}...
                            </motion.p>

                            {/* Gradient bottom border accent */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-0.5"
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${area.color}, transparent)`,
                                    opacity: activeCard === area.id ? 1 : 0,
                                    transition: "opacity 0.3s",
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
