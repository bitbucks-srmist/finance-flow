"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
    {
        q: "Who can participate in FinFlow '26?",
        a: "FinFlow '26 is open exclusively to B.Tech CSE students (all years). Teams of 2–4 members. At least one team member must be enrolled in a B.Tech CSE program at any recognized Indian university.",
    },
    {
        q: "Is there a registration fee?",
        a: "No! FinFlow '26 is completely free to participate in, thanks to our generous sponsors. We even provide meals, accommodation, and swag for all participants throughout the 24-hour event.",
    },
    {
        q: "What tech stack can we use?",
        a: "Absolutely anything! Web2 or Web3, mobile or backend, AI/ML or traditional algorithms — you have full freedom. We only ask that your solution is original and built during the hackathon period.",
    },
    {
        q: "How are projects judged?",
        a: "Projects are evaluated across four criteria: Innovation (25%), Technical Complexity (25%), Real-World Impact & Feasibility (30%), and Presentation Quality (20%). The expert jury panel has final say.",
    },
    {
        q: "Can teams work remotely?",
        a: "FinFlow '26 is an in-person event held at our campus. All team members must be physically present. We do not support fully remote participation, but we provide travel reimbursement for outstation participants.",
    },
    {
        q: "What happens to our intellectual property?",
        a: "You retain 100% of your IP. By participating, you grant FinFlow '26 a limited right to showcase your project on our website and social media. All code and patents belong exclusively to your team.",
    },
    {
        q: "Will there be mentors available during the hackathon?",
        a: "Yes! We have 50+ mentors from leading fintech companies, VCs, and academia available in scheduled and walk-in sessions. Mentors can help with technical architecture, business modeling, and pitch coaching.",
    },
    {
        q: "What are the hardware/infrastructure requirements?",
        a: "Participants should bring their own laptops. We provide high-speed WiFi, power outlets, AWS/Azure credits, GitHub Copilot access, API keys for popular financial data providers, and access to sample datasets.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);
    const [search, setSearch] = useState("");
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const filtered = faqs.filter(
        (f) =>
            f.q.toLowerCase().includes(search.toLowerCase()) ||
            f.a.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section id="faq" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
            <div
                className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[200px] opacity-10"
                style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
            />

            <div className="relative container-custom">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
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
                        Got Questions?
                    </span>
                    <h2
                        className="font-display font-bold text-4xl sm:text-5xl mb-4"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f0f0ff" }}
                    >
                        FAQ
                    </h2>

                    {/* Search bar */}
                    <div className="relative mt-8">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2"
                            style={{ color: "rgba(0,212,255,0.5)" }}
                        />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-input pl-11"
                            style={{ background: "rgba(30, 27, 75, 0.6)" }}
                        />
                    </div>

                    {search && (
                        <p className="text-sm mt-2" style={{ color: "rgba(0,212,255,0.6)" }}>
                            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{search}&rdquo;
                        </p>
                    )}
                </motion.div>

                {/* FAQ items */}
                <div className="space-y-3">
                    <AnimatePresence>
                        {filtered.length === 0 ? (
                            <motion.p
                                className="text-center py-8"
                                style={{ color: "rgba(200, 200, 255, 0.45)" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                No questions found for &ldquo;{search}&rdquo;. Try a different term.
                            </motion.p>
                        ) : (
                            filtered.map((faq, i) => {
                                const originalIdx = faqs.indexOf(faq);
                                const isOpen = open === originalIdx;
                                return (
                                    <motion.div
                                        key={faq.q}
                                        className="rounded-2xl overflow-hidden"
                                        style={{
                                            background: isOpen
                                                ? "rgba(0, 212, 255, 0.06)"
                                                : "rgba(30, 27, 75, 0.6)",
                                            border: isOpen
                                                ? "1px solid rgba(0, 212, 255, 0.3)"
                                                : "1px solid rgba(0, 212, 255, 0.1)",
                                            backdropFilter: "blur(12px)",
                                            transition: "background 0.3s, border 0.3s",
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                                            onClick={() => setOpen(isOpen ? null : originalIdx)}
                                            aria-expanded={isOpen}
                                            style={{ background: "none", border: "none", cursor: "pointer" }}
                                        >
                                            <span
                                                className="font-semibold text-sm sm:text-base pr-4"
                                                style={{
                                                    color: isOpen ? "#00D4FF" : "#f0f0ff",
                                                    fontFamily: "Inter, sans-serif",
                                                    transition: "color 0.3s",
                                                }}
                                            >
                                                {faq.q}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex-shrink-0"
                                            >
                                                <ChevronDown
                                                    size={20}
                                                    style={{ color: isOpen ? "#00D4FF" : "rgba(200,200,255,0.4)" }}
                                                />
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                                    style={{ overflow: "hidden" }}
                                                >
                                                    <div
                                                        className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed"
                                                        style={{ color: "rgba(200, 200, 255, 0.72)" }}
                                                    >
                                                        <div
                                                            className="h-px mb-4"
                                                            style={{ background: "rgba(0,212,255,0.15)" }}
                                                        />
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
