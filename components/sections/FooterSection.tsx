"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Twitter, Instagram, Linkedin, Github, Mail, MapPin, Zap } from "lucide-react";

const socialLinks = [
    { Icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { Icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
    { Icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
    { Icon: Github, href: "#", label: "GitHub", color: "#f0f0ff" },
];

const footerStats = [
    { value: 1000, suffix: "+", label: "Registrations" },
    { value: 500000, label: "In Prizes", format: () => "₹5L+" },
    { value: 50, suffix: "+", label: "Mentors" },
    { value: 6, suffix: "", label: "Focus Domains" },
];

const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Focus Areas", href: "#focus-areas" },
    { label: "Schedule", href: "#schedule" },
    { label: "Judges", href: "#judges" },
    { label: "FAQ", href: "#faq" },
    { label: "Register", href: "#registration" },
];

export default function FooterSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer ref={sectionRef} className="relative overflow-hidden">
            {/* Top wave divider */}
            <div
                className="h-px w-full"
                style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(255,215,0,0.4), transparent)" }}
            />

            <div
                style={{
                    background: "linear-gradient(to bottom, rgba(15, 12, 48, 0.9), #0a0820)",
                    paddingTop: "4rem",
                    paddingBottom: "2rem",
                }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[200px] opacity-5"
                    style={{ background: "radial-gradient(circle, #00D4FF, transparent)" }}
                />

                <div className="relative container-custom">
                    {/* Social proof stats */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 pb-12"
                        style={{ borderBottom: "1px solid rgba(0,212,255,0.1)" }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        {footerStats.map(({ value, suffix, label, format }) => (
                            <div key={label} className="text-center">
                                <div
                                    className="font-display font-bold text-3xl mb-1"
                                    style={{
                                        background: "linear-gradient(135deg, #00D4FF, #FFD700)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        fontFamily: "Space Grotesk, sans-serif",
                                    }}
                                >
                                    {isInView ? (
                                        format ? (
                                            format()
                                        ) : (
                                            <CountUp start={0} end={value} duration={2.5} suffix={suffix || ""} />
                                        )
                                    ) : (
                                        `0${suffix || ""}`
                                    )}
                                </div>
                                <div className="text-xs font-medium" style={{ color: "rgba(0,212,255,0.55)" }}>
                                    {label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Main footer content */}
                    <div className="grid md:grid-cols-3 gap-10 mb-12">
                        {/* Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                                    style={{
                                        background: "linear-gradient(135deg, #00D4FF, #8B5CF6)",
                                        boxShadow: "0 0 15px rgba(0, 212, 255, 0.4)",
                                    }}
                                >
                                    <Zap size={16} className="text-white" fill="white" />
                                </div>
                                <span
                                    className="font-display font-bold text-xl"
                                    style={{
                                        background: "linear-gradient(135deg, #00D4FF, #FFD700)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        fontFamily: "Space Grotesk, sans-serif",
                                    }}
                                >
                                    FinFlow &apos;26
                                </span>
                            </div>
                            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(200, 200, 255, 0.55)" }}>
                                Building the Next Generation of Accessible Digital Finance. 24 Hours. Infinite Possibilities.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map(({ Icon, href, label, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        style={{
                                            background: "rgba(30, 27, 75, 0.8)",
                                            border: "1px solid rgba(0,212,255,0.15)",
                                            color: "rgba(200,200,255,0.5)",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.color = color;
                                            (e.currentTarget as HTMLAnchorElement).style.borderColor = color + "50";
                                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 12px ${color}30`;
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(200,200,255,0.5)";
                                            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,212,255,0.15)";
                                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                                        }}
                                    >
                                        <Icon size={15} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4
                                className="font-display font-semibold text-sm tracking-widest uppercase mb-5"
                                style={{ color: "rgba(0,212,255,0.7)", fontFamily: "Space Grotesk, sans-serif" }}
                            >
                                Quick Links
                            </h4>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => scrollTo(link.href)}
                                            className="text-sm transition-all duration-200 hover:text-[#00D4FF] hover:translate-x-1"
                                            style={{
                                                color: "rgba(200, 200, 255, 0.55)",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                display: "block",
                                                fontFamily: "Inter, sans-serif",
                                                transition: "color 0.2s, transform 0.2s",
                                            }}
                                        >
                                            → {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h4
                                className="font-display font-semibold text-sm tracking-widest uppercase mb-5"
                                style={{ color: "rgba(0,212,255,0.7)", fontFamily: "Space Grotesk, sans-serif" }}
                            >
                                Contact Us
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Mail size={15} style={{ color: "#00D4FF", marginTop: "2px", flexShrink: 0 }} />
                                    <a
                                        href="mailto:finflow26@cse.edu"
                                        className="text-sm hover:text-[#00D4FF] transition-colors duration-200"
                                        style={{ color: "rgba(200, 200, 255, 0.55)" }}
                                    >
                                        finflow26@cse.edu
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin size={15} style={{ color: "#FFD700", marginTop: "2px", flexShrink: 0 }} />
                                    <p className="text-sm" style={{ color: "rgba(200, 200, 255, 0.55)" }}>
                                        CSE Innovation Hub, Main Campus<br />
                                        February 28–March 1, 2026
                                    </p>
                                </div>
                            </div>

                            {/* CTA strip */}
                            <motion.button
                                onClick={() => scrollTo("#registration")}
                                className="mt-6 w-full py-3 rounded-xl text-sm font-bold"
                                style={{
                                    background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(139,92,246,0.2))",
                                    border: "1px solid rgba(0,212,255,0.3)",
                                    color: "#00D4FF",
                                    cursor: "pointer",
                                    fontFamily: "Inter, sans-serif",
                                }}
                                whileHover={{
                                    background: "linear-gradient(135deg, rgba(0,212,255,0.3), rgba(139,92,246,0.3))",
                                    boxShadow: "0 0 20px rgba(0,212,255,0.2)",
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                ⚡ Register Before Feb 26
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Bottom bar */}
                    <motion.div
                        className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
                        style={{
                            borderTop: "1px solid rgba(0,212,255,0.08)",
                            color: "rgba(200, 200, 255, 0.35)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p>© 2026 FinFlow Hackathon. All rights reserved.</p>
                        <p
                            style={{
                                background: "linear-gradient(90deg, #00D4FF, #FFD700)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            24 Hours. Infinite Possibilities. 🚀
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
