"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Twitter, Linkedin, Globe } from "lucide-react";

const judges = [
    {
        name: "Dr. Priya Sharma",
        role: "CTO, FinBridge India",
        domain: "Financial Inclusion & Rural Fintech",
        color: "#00D4FF",
        initials: "PS",
    },
    {
        name: "Arjun Kapoor",
        role: "Partner, Sequoia Surge",
        domain: "Venture Capital & Growth",
        color: "#FFD700",
        initials: "AK",
    },
    {
        name: "Neha Joshi",
        role: "Head of DeFi, Polygon Labs",
        domain: "Blockchain & Web3",
        color: "#8B5CF6",
        initials: "NJ",
    },
    {
        name: "Rahul Mehta",
        role: "VP Engineering, Razorpay",
        domain: "Payments & Infrastructure",
        color: "#10b981",
        initials: "RM",
    },
    {
        name: "Sanya Patil",
        role: "Founder, StudyPay",
        domain: "Student Finance & EdTech",
        color: "#f97316",
        initials: "SP",
    },
    {
        name: "Vikram Bose",
        role: "Director, SEBI FinTech Hub",
        domain: "Regulatory & Compliance",
        color: "#ec4899",
        initials: "VB",
    },
];

const prizes = [
    { place: "1st", prize: "₹2,00,000", perks: "Incubation opportunity + Mentorship", color: "#FFD700", glow: "rgba(255,215,0,0.3)" },
    { place: "2nd", prize: "₹1,00,000", perks: "Fast-track interview at top fintechs", color: "#C0C0C0", glow: "rgba(192,192,192,0.3)" },
    { place: "3rd", prize: "₹50,000", perks: "AWS & Azure credits worth ₹1L", color: "#CD7F32", glow: "rgba(205,127,50,0.3)" },
];

const sponsors = [
    { name: "RazorPay", tier: "Gold", color: "#FFD700" },
    { name: "Polygon", tier: "Gold", color: "#FFD700" },
    { name: "AWS", tier: "Silver", color: "#C0C0C0" },
    { name: "GitHub", tier: "Silver", color: "#C0C0C0" },
    { name: "MongoDB", tier: "Bronze", color: "#CD7F32" },
    { name: "Postman", tier: "Bronze", color: "#CD7F32" },
];

export default function JudgesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section id="judges" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
            <div
                className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10"
                style={{ background: "radial-gradient(circle, #FFD700, transparent)" }}
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
                            color: "#FFD700",
                            background: "rgba(255, 215, 0, 0.1)",
                            border: "1px solid rgba(255, 215, 0, 0.25)",
                        }}
                    >
                        Expert Panel
                    </span>
                    <h2
                        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f0f0ff" }}
                    >
                        Meet the{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #FFD700, #ff8c00)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Judges
                        </span>
                    </h2>
                </motion.div>

                {/* Judges grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                    {judges.map((judge, i) => (
                        <motion.div
                            key={judge.name}
                            className="group rounded-2xl p-6 relative overflow-hidden cursor-default"
                            style={{
                                background: "rgba(30, 27, 75, 0.7)",
                                border: `1px solid ${judge.color}25`,
                                backdropFilter: "blur(12px)",
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                            whileHover={{
                                scale: 1.02,
                                borderColor: judge.color + "60",
                                boxShadow: `0 0 30px ${judge.color}20`,
                            }}
                        >
                            {/* Avatar */}
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0"
                                    style={{
                                        background: `linear-gradient(135deg, ${judge.color}30, ${judge.color}10)`,
                                        border: `2px solid ${judge.color}40`,
                                        color: judge.color,
                                        fontFamily: "Space Grotesk, sans-serif",
                                    }}
                                >
                                    {judge.initials}
                                </div>
                                <div>
                                    <h3
                                        className="font-display font-bold text-base"
                                        style={{ color: "#f0f0ff", fontFamily: "Space Grotesk, sans-serif" }}
                                    >
                                        {judge.name}
                                    </h3>
                                    <p className="text-xs font-medium mt-0.5" style={{ color: judge.color }}>
                                        {judge.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm" style={{ color: "rgba(200, 200, 255, 0.6)" }}>
                                <span className="font-medium" style={{ color: "rgba(200, 200, 255, 0.8)" }}>Expertise: </span>
                                {judge.domain}
                            </p>
                            <div className="flex gap-3 mt-4">
                                {[Twitter, Linkedin, Globe].map((Icon, j) => (
                                    <div
                                        key={j}
                                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110"
                                        style={{
                                            background: "rgba(0,212,255,0.08)",
                                            border: "1px solid rgba(0,212,255,0.15)",
                                            color: "rgba(0,212,255,0.5)",
                                        }}
                                    >
                                        <Icon size={13} />
                                    </div>
                                ))}
                            </div>
                            {/* Spotlight effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 50% 0%, ${judge.color}08, transparent 70%)`,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Prizes */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <h2
                        className="font-display font-bold text-3xl sm:text-4xl mb-2"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f0f0ff" }}
                    >
                        Prize{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #FFD700, #00D4FF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Pool
                        </span>
                    </h2>
                    <p style={{ color: "rgba(200, 200, 255, 0.6)" }}>₹5 Lakh+ in total prizes and benefits</p>
                </motion.div>

                <div className="grid sm:grid-cols-3 gap-5 mb-20">
                    {prizes.map((prize, i) => (
                        <motion.div
                            key={prize.place}
                            className="rounded-2xl p-6 text-center relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${prize.color}15, ${prize.color}05)`,
                                border: `1px solid ${prize.color}30`,
                                boxShadow: i === 0 ? `0 0 40px ${prize.glow}` : "none",
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                            whileHover={{ scale: 1.03, boxShadow: `0 0 40px ${prize.glow}` }}
                        >
                            <div className="text-4xl mb-2">{i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</div>
                            <div
                                className="font-display font-bold text-3xl mb-1"
                                style={{ color: prize.color, fontFamily: "Space Grotesk, sans-serif" }}
                            >
                                {prize.prize}
                            </div>
                            <div className="font-bold text-lg mb-2" style={{ color: "#f0f0ff" }}>
                                {prize.place} Place
                            </div>
                            <p className="text-sm" style={{ color: "rgba(200, 200, 255, 0.6)" }}>
                                {prize.perks}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Sponsors */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <p
                        className="text-sm font-semibold tracking-[0.3em] uppercase mb-6"
                        style={{ color: "rgba(200, 200, 255, 0.4)" }}
                    >
                        Powered By
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        {sponsors.map((sponsor) => (
                            <div
                                key={sponsor.name}
                                className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                                style={{
                                    background: "rgba(30, 27, 75, 0.8)",
                                    border: `1px solid ${sponsor.color}25`,
                                    color: sponsor.color,
                                    fontFamily: "Space Grotesk, sans-serif",
                                }}
                            >
                                {sponsor.name}
                                <span
                                    className="ml-2 text-xs px-1.5 py-0.5 rounded"
                                    style={{ background: sponsor.color + "20", color: sponsor.color, fontSize: "9px" }}
                                >
                                    {sponsor.tier}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
