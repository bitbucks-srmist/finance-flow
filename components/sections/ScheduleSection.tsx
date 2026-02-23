"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const events = [
    {
        time: "9:00 AM",
        title: "Opening Ceremony",
        description: "Keynote address, problem statement reveal, and team networking kickoff",
        icon: "🎯",
        color: "#00D4FF",
    },
    {
        time: "10:00 AM",
        title: "Ideation Sprint",
        description: "Brainstorming sessions with domain experts and structured design thinking workshops",
        icon: "💡",
        color: "#FFD700",
    },
    {
        time: "12:00 PM",
        title: "Mentor Connect",
        description: "One-on-one sessions with industry mentors to validate your approach and get feedback",
        icon: "🧑‍💼",
        color: "#8B5CF6",
    },
    {
        time: "2:00 PM",
        title: "Build Phase Begins",
        description: "Heads-down coding begins. Deploy infrastructure, set up repos, and start building",
        icon: "⚡",
        color: "#10b981",
    },
    {
        time: "7:00 PM",
        title: "Mid-Point Check-in",
        description: "Progress demo to mentors, real-time feedback, and course corrections if needed",
        icon: "📊",
        color: "#f97316",
    },
    {
        time: "12:00 AM",
        title: "Midnight Fuel Session",
        description: "Energy boost, motivational talks from fintech founders, and hackathon lore exchange",
        icon: "🌙",
        color: "#ec4899",
    },
    {
        time: "7:00 AM",
        title: "Prototype Freeze",
        description: "Code freeze and final touches. Begin preparing demo scripts and pitch decks",
        icon: "🔒",
        color: "#FFD700",
    },
    {
        time: "9:00 AM",
        title: "Demo Day & Awards",
        description: "3-minute pitches to the jury panel, Q&A, winner announcement, and prize ceremony",
        icon: "🏆",
        color: "#00D4FF",
    },
];

export default function ScheduleSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section id="schedule" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
            <div
                className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full blur-[180px] opacity-10"
                style={{ background: "radial-gradient(circle, #10b981, transparent)" }}
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
                            color: "#10b981",
                            background: "rgba(16, 185, 129, 0.1)",
                            border: "1px solid rgba(16, 185, 129, 0.25)",
                        }}
                    >
                        24-Hour Journey
                    </span>
                    <h2
                        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f0f0ff" }}
                    >
                        The{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #10b981, #00D4FF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Schedule
                        </span>
                    </h2>
                    <p className="text-lg" style={{ color: "rgba(200, 200, 255, 0.65)" }}>
                        February 28 — March 1, 2026 • 9:00 AM to 9:00 AM
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px"
                        style={{ background: "linear-gradient(to bottom, #00D4FF, #8B5CF6, #FFD700, transparent)" }}
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    />

                    <div className="space-y-6">
                        {events.map((event, i) => {
                            const isRight = i % 2 === 0;
                            return (
                                <motion.div
                                    key={i}
                                    className={`relative flex items-start gap-4 sm:gap-0 ${isRight ? "sm:flex-row" : "sm:flex-row-reverse"
                                        }`}
                                    initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                                >
                                    {/* Card */}
                                    <div className={`flex-1 pl-14 sm:pl-0 ${isRight ? "sm:pr-12" : "sm:pl-12"}`}>
                                        <motion.div
                                            className="rounded-2xl p-5 cursor-default"
                                            style={{
                                                background: "rgba(30, 27, 75, 0.7)",
                                                border: `1px solid ${event.color}30`,
                                                backdropFilter: "blur(12px)",
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                borderColor: event.color + "60",
                                                boxShadow: `0 0 20px ${event.color}20`,
                                            }}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-2xl">{event.icon}</span>
                                                <div>
                                                    <p className="text-xs font-bold tracking-widest uppercase" style={{ color: event.color }}>
                                                        {event.time}
                                                    </p>
                                                    <h3
                                                        className="font-display font-bold text-lg"
                                                        style={{ color: "#f0f0ff", fontFamily: "Space Grotesk, sans-serif" }}
                                                    >
                                                        {event.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-sm leading-relaxed" style={{ color: "rgba(200, 200, 255, 0.65)" }}>
                                                {event.description}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Center dot */}
                                    <motion.div
                                        className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-5 w-5 h-5 rounded-full z-10 flex items-center justify-center"
                                        style={{
                                            background: event.color,
                                            boxShadow: `0 0 12px ${event.color}, 0 0 24px ${event.color}60`,
                                        }}
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1, type: "spring", stiffness: 300 }}
                                        whileHover={{ scale: 1.4 }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                                    </motion.div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden sm:block flex-1" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
