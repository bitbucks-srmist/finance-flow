"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Target, Lightbulb, Globe, TrendingUp } from "lucide-react";

const stats = [
    { value: 1000, suffix: "+", label: "Registrations" },
    { value: 500000, prefix: "₹", suffix: "", label: "In Prize Money", format: (n: number) => n >= 100000 ? `₹${(n / 100000).toFixed(1)}L+` : `₹${n}` },
    { value: 50, suffix: "+", label: "Expert Mentors" },
    { value: 24, suffix: " hrs", label: "Of Innovation" },
];

const pillars = [
    {
        icon: Target,
        title: "Problem-First Thinking",
        description:
            "We challenge participants to identify real financial pain points faced by underserved communities, students, and small businesses — then engineer elegant solutions.",
        color: "#00D4FF",
        gradient: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.03))",
        border: "rgba(0, 212, 255, 0.25)",
    },
    {
        icon: Lightbulb,
        title: "Innovation Without Limits",
        description:
            "From AI-powered credit scoring to blockchain payment rails — no solution is too bold. We celebrate radical ideas that reimagine the financial ecosystem.",
        color: "#FFD700",
        gradient: "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.03))",
        border: "rgba(255, 215, 0, 0.25)",
    },
    {
        icon: Globe,
        title: "Real-World Impact",
        description:
            "Every project is evaluated on its potential for actual deployment. Top solutions get connected with accelerators, VCs, and fintech incubators.",
        color: "#8B5CF6",
        gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))",
        border: "rgba(139, 92, 246, 0.25)",
    },
    {
        icon: TrendingUp,
        title: "Career Launchpad",
        description:
            "Network with industry leaders, get mentored by fintech pioneers, and open doors to internships and placements at top financial technology companies.",
        color: "#10b981",
        gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))",
        border: "rgba(16, 185, 129, 0.25)",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const statsRef = useRef<HTMLDivElement>(null);
    const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

    return (
        <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background accents */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,212,255,0.6) 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[160px] opacity-10"
                style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
            />

            <div className="relative container-custom">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span
                        className="inline-block text-sm font-semibold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full"
                        style={{
                            color: "#00D4FF",
                            background: "rgba(0, 212, 255, 0.1)",
                            border: "1px solid rgba(0, 212, 255, 0.2)",
                        }}
                    >
                        About FinFlow &apos;26
                    </span>
                    <h2
                        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f0f0ff" }}
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
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: "rgba(200, 200, 255, 0.65)" }}
                    >
                        FinFlow &apos;26 is India&apos;s most ambitious student fintech hackathon, bringing together the
                        brightest engineering minds to solve the financial challenges of tomorrow — today.
                    </p>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    ref={statsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {stats.map(({ value, suffix, prefix, label, format }) => (
                        <div
                            key={label}
                            className="glass rounded-2xl p-6 text-center"
                            style={{ border: "1px solid rgba(0, 212, 255, 0.15)" }}
                        >
                            <div
                                className="font-display font-bold text-3xl sm:text-4xl mb-1"
                                style={{
                                    background: "linear-gradient(135deg, #00D4FF, #FFD700)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    fontFamily: "Space Grotesk, sans-serif",
                                }}
                            >
                                {statsInView ? (
                                    format ? (
                                        <CountUp
                                            start={0}
                                            end={value}
                                            duration={2.5}
                                            formattingFn={format}
                                        />
                                    ) : (
                                        <CountUp
                                            start={0}
                                            end={value}
                                            duration={2.5}
                                            prefix={prefix || ""}
                                            suffix={suffix || ""}
                                        />
                                    )
                                ) : (
                                    `${prefix || ""}0${suffix || ""}`
                                )}
                            </div>
                            <div className="text-sm font-medium" style={{ color: "rgba(0, 212, 255, 0.6)" }}>
                                {label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Pillars grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {pillars.map(({ icon: Icon, title, description, color, gradient, border }) => (
                        <motion.div
                            key={title}
                            variants={cardVariants}
                            className="group rounded-2xl p-6 transition-all duration-400 cursor-default"
                            style={{
                                background: gradient,
                                border: `1px solid ${border}`,
                                backdropFilter: "blur(12px)",
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: `0 0 30px ${color}30, 0 0 60px ${color}10`,
                                borderColor: color + "60",
                            }}
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                                style={{
                                    background: `${color}20`,
                                    border: `1px solid ${color}30`,
                                }}
                            >
                                <Icon size={22} style={{ color }} />
                            </div>
                            <h3
                                className="font-display font-semibold text-lg mb-3"
                                style={{ color: "#f0f0ff", fontFamily: "Space Grotesk, sans-serif" }}
                            >
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(200, 200, 255, 0.65)" }}>
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
