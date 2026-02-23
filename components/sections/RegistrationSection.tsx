"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, ArrowRight, ArrowLeft, User, BookOpen, Loader2 } from "lucide-react";

const step1Schema = z.object({
    teamName: z.string().min(3, "Team name must be at least 3 characters"),
    leaderName: z.string().min(2, "Name must be at least 2 characters"),
    leaderEmail: z.string().email("Enter a valid email address"),
    leaderPhone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
    member2: z.string().min(2, "Name must be at least 2 characters").optional().or(z.literal("")),
    member3: z.string().min(2, "Name must be at least 2 characters").optional().or(z.literal("")),
    member4: z.string().min(2, "Name must be at least 2 characters").optional().or(z.literal("")),
});

const step2Schema = z.object({
    focusArea: z.string().min(1, "Please select a focus area"),
    projectTitle: z.string().min(5, "Project title must be at least 5 characters"),
    projectDescription: z
        .string()
        .min(50, "Please describe your project in at least 50 characters")
        .max(500, "Keep it under 500 characters"),
    techStack: z.string().min(3, "Please mention your tech stack"),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

const FOCUS_AREAS = [
    "Financial Inclusion",
    "DeFi & Blockchain",
    "Student Finance",
    "MSME Tools",
    "Cross-Border Payments",
    "Gen Z Wealth Management",
];

const ProgressRing = ({ progress }: { progress: number }) => {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    return (
        <div className="relative w-20 h-20 mx-auto mb-8">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 70 70">
                <circle cx="35" cy="35" r={radius} stroke="rgba(0,212,255,0.15)" strokeWidth="5" fill="none" />
                <motion.circle
                    cx="35" cy="35" r={radius}
                    stroke="url(#ringGrad)" strokeWidth="5" fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00D4FF" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                </defs>
            </svg>
            <div
                className="absolute inset-0 flex items-center justify-center font-bold text-lg"
                style={{ color: "#00D4FF", fontFamily: "Space Grotesk, sans-serif" }}
            >
                {Math.round(progress)}%
            </div>
        </div>
    );
};

const InputField = ({
    label, id, error, type = "text", ...props
}: {
    label: string; id: string; error?: string; type?: string;
    [key: string]: any;
}) => (
    <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(200,200,255,0.8)" }} htmlFor={id}>
            {label}
        </label>
        <input
            id={id}
            type={type}
            className={`form-input ${error ? "error" : ""}`}
            aria-describedby={error ? `${id}-error` : undefined}
            {...props}
        />
        {error && (
            <motion.p
                id={`${id}-error`}
                className="text-xs mt-1.5"
                style={{ color: "#ff6b6b" }}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {error}
            </motion.p>
        )}
    </div>
);

export default function RegistrationSection() {
    const [step, setStep] = useState(1);
    const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const form1 = useForm<Step1Data>({ resolver: zodResolver(step1Schema), mode: "onBlur" });
    const form2 = useForm<Step2Data>({ resolver: zodResolver(step2Schema), mode: "onBlur" });

    const onStep1Submit = (data: Step1Data) => {
        setStep1Data(data);
        setStep(2);
    };

    const onStep2Submit = async (data: Step2Data) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1800));
        setIsSubmitting(false);
        setSubmitted(true);
        console.log("Submission:", { ...step1Data, ...data });
    };

    const progress = step === 1 ? 50 : 100;

    return (
        <section id="registration" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,215,0,0.5) 1px, transparent 0)",
                    backgroundSize: "50px 50px",
                }}
            />
            <div
                className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[200px] opacity-10"
                style={{ background: "radial-gradient(circle, #FFD700, transparent)" }}
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
                            color: "#FFD700",
                            background: "rgba(255, 215, 0, 0.1)",
                            border: "1px solid rgba(255, 215, 0, 0.25)",
                        }}
                    >
                        Join the Hackathon
                    </span>
                    <h2
                        className="font-display font-bold text-4xl sm:text-5xl mb-4"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "#f0f0ff" }}
                    >
                        Register{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #FFD700, #ff8c00)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Your Team
                        </span>
                    </h2>
                    <p className="text-base" style={{ color: "rgba(200, 200, 255, 0.6)" }}>
                        Teams of 2–4 members. Registration closes February 26, 2026.
                    </p>
                </motion.div>

                {/* Form card */}
                <motion.div
                    className="glass-strong rounded-3xl p-7 sm:p-10"
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                className="text-center py-8"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                >
                                    <CheckCircle size={72} style={{ color: "#10b981", margin: "0 auto 24px" }} />
                                </motion.div>
                                <h3
                                    className="font-display font-bold text-3xl mb-3"
                                    style={{ color: "#f0f0ff", fontFamily: "Space Grotesk, sans-serif" }}
                                >
                                    You&apos;re Registered! 🎉
                                </h3>
                                <p className="text-base mb-6" style={{ color: "rgba(200,200,255,0.7)" }}>
                                    Team <strong style={{ color: "#00D4FF" }}>{step1Data?.teamName}</strong> is locked in!
                                    Check {step1Data?.leaderEmail} for confirmation details.
                                </p>
                                <div
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
                                    style={{
                                        background: "rgba(16,185,129,0.15)",
                                        border: "1px solid rgba(16,185,129,0.3)",
                                        color: "#10b981",
                                    }}
                                >
                                    📅 Mark your calendar: February 28, 2026 at 9:00 AM IST
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div key={`step-${step}`} initial={{ opacity: 0, x: step === 1 ? -30 : 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: step === 1 ? 30 : -30 }} transition={{ duration: 0.35 }}>
                                <ProgressRing progress={progress} />

                                {/* Step indicator */}
                                <div className="flex items-center justify-center gap-3 mb-8">
                                    {[1, 2].map((s) => (
                                        <div key={s} className="flex items-center gap-2">
                                            <div
                                                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-400"
                                                style={{
                                                    background: step >= s ? "linear-gradient(135deg, #00D4FF, #8B5CF6)" : "rgba(0,212,255,0.1)",
                                                    color: step >= s ? "#fff" : "rgba(0,212,255,0.4)",
                                                    border: step >= s ? "none" : "1px solid rgba(0,212,255,0.2)",
                                                    boxShadow: step >= s ? "0 0 15px rgba(0,212,255,0.3)" : "none",
                                                }}
                                            >
                                                {step > s ? <CheckCircle size={14} /> : s === 1 ? <User size={14} /> : <BookOpen size={14} />}
                                            </div>
                                            <span className="text-xs font-medium" style={{ color: step >= s ? "#00D4FF" : "rgba(0,212,255,0.3)" }}>
                                                {s === 1 ? "Team Info" : "Project Pitch"}
                                            </span>
                                            {s < 2 && <div className="w-8 h-px" style={{ background: step > s ? "rgba(0,212,255,0.5)" : "rgba(0,212,255,0.15)" }} />}
                                        </div>
                                    ))}
                                </div>

                                {step === 1 ? (
                                    <form onSubmit={form1.handleSubmit(onStep1Submit)} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <InputField label="Team Name *" id="teamName" error={form1.formState.errors.teamName?.message} placeholder="Team Nexus" {...form1.register("teamName")} />
                                            <InputField label="Team Leader Name *" id="leaderName" error={form1.formState.errors.leaderName?.message} placeholder="Arjun Sharma" {...form1.register("leaderName")} />
                                        </div>
                                        <InputField label="Leader Email *" id="leaderEmail" type="email" error={form1.formState.errors.leaderEmail?.message} placeholder="arjun@example.com" {...form1.register("leaderEmail")} />
                                        <InputField label="Leader Phone *" id="leaderPhone" type="tel" error={form1.formState.errors.leaderPhone?.message} placeholder="9876543210" {...form1.register("leaderPhone")} />
                                        <div>
                                            <p className="text-sm font-medium mb-3" style={{ color: "rgba(200,200,255,0.7)" }}>
                                                Team Members (Optional, up to 3 more)
                                            </p>
                                            <div className="space-y-3">
                                                {["member2", "member3", "member4"].map((field, i) => (
                                                    <InputField key={field} label={`Member ${i + 2} Name`} id={field} placeholder={`Team member ${i + 2}`} {...form1.register(field as "member2" | "member3" | "member4")} />
                                                ))}
                                            </div>
                                        </div>
                                        <motion.button
                                            type="submit"
                                            className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
                                            style={{
                                                background: "linear-gradient(135deg, #00D4FF, #8B5CF6)",
                                                color: "white",
                                                border: "none",
                                                cursor: "pointer",
                                                boxShadow: "0 0 25px rgba(0,212,255,0.3)",
                                                fontFamily: "Inter, sans-serif",
                                            }}
                                            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0,212,255,0.5)" }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Next: Project Pitch <ArrowRight size={20} />
                                        </motion.button>
                                    </form>
                                ) : (
                                    <form onSubmit={form2.handleSubmit(onStep2Submit)} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(200,200,255,0.8)" }} htmlFor="focusArea">Focus Area *</label>
                                            <select id="focusArea" className="form-input" {...form2.register("focusArea")} style={{ background: "rgba(30,27,75,0.5)", color: "#f0f0ff" }}>
                                                <option value="" style={{ background: "#1a1545" }}>Select a focus area</option>
                                                {FOCUS_AREAS.map((a) => <option key={a} value={a} style={{ background: "#1a1545" }}>{a}</option>)}
                                            </select>
                                            {form2.formState.errors.focusArea && <p className="text-xs mt-1.5" style={{ color: "#ff6b6b" }}>{form2.formState.errors.focusArea.message}</p>}
                                        </div>
                                        <InputField label="Project Title *" id="projectTitle" error={form2.formState.errors.projectTitle?.message} placeholder="PayEase — UPI for Rural India" {...form2.register("projectTitle")} />
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(200,200,255,0.8)" }} htmlFor="projectDescription">Project Description * <span style={{ color: "rgba(200,200,255,0.4)" }}>(50–500 chars)</span></label>
                                            <textarea id="projectDescription" rows={4} className={`form-input resize-none ${form2.formState.errors.projectDescription ? "error" : ""}`} placeholder="Describe your project idea, the problem it solves, and why it matters..." {...form2.register("projectDescription")} />
                                            {form2.formState.errors.projectDescription && <p className="text-xs mt-1.5" style={{ color: "#ff6b6b" }}>{form2.formState.errors.projectDescription.message}</p>}
                                        </div>
                                        <InputField label="Tech Stack *" id="techStack" error={form2.formState.errors.techStack?.message} placeholder="React, Node.js, Solidity, Python" {...form2.register("techStack")} />
                                        <div className="flex gap-3 pt-2">
                                            <motion.button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold flex-shrink-0"
                                                style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)", cursor: "pointer", fontFamily: "Inter, sans-serif" }}
                                                whileHover={{ background: "rgba(0,212,255,0.2)" }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <ArrowLeft size={18} /> Back
                                            </motion.button>
                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex-1 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
                                                style={{
                                                    background: isSubmitting ? "rgba(255,215,0,0.3)" : "linear-gradient(135deg, #FFD700, #ff8c00)",
                                                    color: isSubmitting ? "#FFD700" : "#1a1545",
                                                    border: "none",
                                                    cursor: isSubmitting ? "wait" : "pointer",
                                                    boxShadow: "0 0 25px rgba(255,215,0,0.3)",
                                                    fontFamily: "Inter, sans-serif",
                                                }}
                                                whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 40px rgba(255,215,0,0.5)" } : {}}
                                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                            >
                                                {isSubmitting ? <><Loader2 size={20} className="animate-spin" /> Submitting...</> : <>🚀 Submit Registration</>}
                                            </motion.button>
                                        </div>
                                    </form>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
