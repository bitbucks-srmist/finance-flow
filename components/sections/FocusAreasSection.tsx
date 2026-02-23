"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const focusAreas = [
    {
        id: 1,
        emoji: "🌐",
        title: "Financial Inclusion",
        tagline: "Banking the Unbanked",
        description: "Build accessible digital wallets, micro-lending platforms, and community credit systems for the 1.4 billion unbanked adults globally.",
        tags: ["Digital Wallets", "Micro-lending", "Last-Mile"],
        color: "#00D4FF",
    },
    {
        id: 2,
        emoji: "₿",
        title: "DeFi & Blockchain",
        tagline: "Rewriting the Rules",
        description: "Create transparent lending pools, yield optimization strategies, and on-chain credit scores using decentralized protocols.",
        tags: ["Smart Contracts", "DeFi Protocols", "Web3"],
        color: "#8B5CF6",
    },
    {
        id: 3,
        emoji: "🎓",
        title: "Student Finance",
        tagline: "Funding the Future",
        description: "Design income-share agreements, peer-to-peer student loans, and AI-powered scholarship discovery platforms for Gen Z.",
        tags: ["ISA", "P2P Loans", "Scholarship AI"],
        color: "#FFD700",
    },
    {
        id: 4,
        emoji: "🏪",
        title: "MSME Tools",
        tagline: "Empowering Small Business",
        description: "Build invoice financing, automated GST reconciliation, and smart cash-flow forecasting for India's 63 million MSMEs.",
        tags: ["Invoice Finance", "GST", "Cash Flow AI"],
        color: "#10b981",
    },
    {
        id: 5,
        emoji: "🌍",
        title: "Cross-Border Payments",
        tagline: "Borderless Money",
        description: "Create near-zero-fee international remittance solutions using stablecoins and multi-rail settlement systems.",
        tags: ["Remittance", "Stablecoins", "FX Hedging"],
        color: "#f97316",
    },
    {
        id: 6,
        emoji: "💎",
        title: "Gen Z Wealth",
        tagline: "Investing Reimagined",
        description: "Design gamified micro-investing apps, social trading platforms, and AI portfolio advisors for intuitive wealth-building.",
        tags: ["Micro-Investing", "Social Trading", "AI Advisor"],
        color: "#ec4899",
    },
];

export default function FocusAreasSection() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section 
            id="focus-areas" 
            ref={sectionRef} 
            className="relative py-20 sm:py-24"
            style={{ background: "#0a0820" }}
        >
            {/* Background accent */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[150px] opacity-10"
                style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
            />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span
                        className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                        style={{
                            color: "#8B5CF6",
                            background: "rgba(139, 92, 246, 0.1)",
                            border: "1px solid rgba(139, 92, 246, 0.25)",
                        }}
                    >
                        Core Focus Areas
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f0ff" }}
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
                    <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(200, 200, 255, 0.6)" }}>
                        Six critical domains in financial technology. Pick your passion and build something that matters.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {focusAreas.map((area, i) => (
                        <motion.div
                            key={area.id}
                            className="rounded-xl p-5 cursor-pointer transition-all duration-300"
                            style={{
                                background: `linear-gradient(135deg, ${area.color}12, transparent)`,
                                border: `1px solid ${activeCard === area.id ? area.color + "60" : area.color + "25"}`,
                                boxShadow: activeCard === area.id ? `0 0 25px ${area.color}20` : "none",
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            onClick={() => setActiveCard(activeCard === area.id ? null : area.id)}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <span className="text-3xl block mb-2">{area.emoji}</span>
                                    <h3
                                        className="font-bold text-lg"
                                        style={{ color: "#f0f0ff", fontFamily: "'Space Grotesk', sans-serif" }}
                                    >
                                        {area.title}
                                    </h3>
                                    <p className="text-xs mt-1" style={{ color: area.color }}>
                                        {area.tagline}
                                    </p>
                                </div>
                                <motion.div
                                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: area.color + "15", border: `1px solid ${area.color}30` }}
                                    animate={{ rotate: activeCard === area.id ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span style={{ color: area.color, fontSize: "16px", fontWeight: "bold" }}>+</span>
                                </motion.div>
                            </div>

                            {/* Description */}
                            <motion.div
                                initial={false}
                                animate={{
                                    height: activeCard === area.id ? "auto" : 0,
                                    opacity: activeCard === area.id ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                style={{ overflow: "hidden" }}
                            >
                                <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(200, 200, 255, 0.7)" }}>
                                    {area.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {area.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded-full"
                                            style={{
                                                background: area.color + "15",
                                                color: area.color,
                                                border: `1px solid ${area.color}25`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Preview when collapsed */}
                            {activeCard !== area.id && (
                                <p className="text-sm mt-2" style={{ color: "rgba(180, 180, 220, 0.5)" }}>
                                    {area.description.slice(0, 60)}...
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
