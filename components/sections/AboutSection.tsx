"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Target, Lightbulb, Globe, TrendingUp } from "lucide-react";

const stats = [
    { value: 1000, suffix: "+", label: "Registrations" },
    { value: 5, prefix: "₹", suffix: "L+", label: "Prize Money" },
    { value: 50, suffix: "+", label: "Expert Mentors" },
    { value: 24, suffix: " hrs", label: "Of Innovation" },
];

const pillars = [
    {
        icon: Target,
        title: "Problem-First Thinking",
        description: "Identify real financial pain points faced by underserved communities, students, and small businesses.",
        color: "#00D4FF",
    },
    {
        icon: Lightbulb,
        title: "Innovation Without Limits",
        description: "From AI-powered credit scoring to blockchain payment rails — no solution is too bold.",
        color: "#FFD700",
    },
    {
        icon: Globe,
        title: "Real-World Impact",
        description: "Top solutions get connected with accelerators, VCs, and fintech incubators.",
        color: "#8B5CF6",
    },
    {
        icon: TrendingUp,
        title: "Career Launchpad",
        description: "Network with industry leaders and open doors to internships at top fintech companies.",
        color: "#10b981",
    },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const statsRef = useRef<HTMLDivElement>(null);
    const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

    return (
        <section 
            id="about" 
            ref={sectionRef} 
            className="relative py-20 sm:py-24"
            style={{ background: "#0a0820" }}
        >
            {/* Background accent */}
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[120px] opacity-10"
                style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
            />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span
                        className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                        style={{
                            color: "#00D4FF",
                            background: "rgba(0, 212, 255, 0.1)",
                            border: "1px solid rgba(0, 212, 255, 0.2)",
                        }}
                    >
                        About FinFlow &apos;26
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f0ff" }}
                    >
                        Where{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00D4FF, #8B5CF6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Code
                        </span>{" "}
                        Meets{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #FFD700, #ff8c00)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Capital
                        </span>
                    </h2>
                    <p
                        className="text-base max-w-xl mx-auto"
                        style={{ color: "rgba(200, 200, 255, 0.6)" }}
                    >
                        India&apos;s most ambitious student fintech hackathon, bringing together the brightest engineering minds.
                    </p>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    ref={statsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {stats.map(({ value, suffix, prefix, label }) => (
                        <div
                            key={label}
                            className="rounded-xl p-5 text-center"
                            style={{ 
                                background: "rgba(30, 27, 75, 0.5)",
                                border: "1px solid rgba(0, 212, 255, 0.15)" 
                            }}
                        >
                            <div
                                className="text-2xl sm:text-3xl font-bold mb-1"
                                style={{
                                    background: "linear-gradient(135deg, #00D4FF, #FFD700)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    fontFamily: "'Space Grotesk', sans-serif",
                                }}
                            >
                                {statsInView ? (
                                    <CountUp
                                        start={0}
                                        end={value}
                                        duration={2}
                                        prefix={prefix || ""}
                                        suffix={suffix || ""}
                                    />
                                ) : (
                                    `${prefix || ""}0${suffix || ""}`
                                )}
                            </div>
                            <div className="text-xs font-medium" style={{ color: "rgba(0, 212, 255, 0.6)" }}>
                                {label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Pillars grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {pillars.map(({ icon: Icon, title, description, color }, i) => (
                        <motion.div
                            key={title}
                            className="rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: `linear-gradient(135deg, ${color}10, transparent)`,
                                border: `1px solid ${color}25`,
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                                style={{
                                    background: `${color}15`,
                                    border: `1px solid ${color}30`,
                                }}
                            >
                                <Icon size={20} style={{ color }} />
                            </div>
                            <h3
                                className="font-semibold text-base mb-2"
                                style={{ color: "#f0f0ff", fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(200, 200, 255, 0.6)" }}>
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
