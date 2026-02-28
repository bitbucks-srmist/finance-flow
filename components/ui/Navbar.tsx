"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/focus-areas", label: "Focus Areas" },
    { href: "/schedule", label: "Schedule" },
    { href: "/judges", label: "Judges" },
    { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0820]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg" : "bg-transparent"
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            }}
                        >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                                <Zap size={16} className="text-white" fill="white" />
                            </div>
                            <span className="font-display font-bold text-xl hidden sm:block bg-gradient-to-br from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                                FinFlow &apos;26
                            </span>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors duration-300 relative group ${isActive
                                                ? "text-cyan-400"
                                                : "text-purple-100/70 hover:text-cyan-400"
                                            }`}
                                    >
                                        {link.label}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-px transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-600 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                href="/#registration"
                                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-br from-cyan-500 to-purple-600 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95"
                            >
                                Register Now
                            </Link>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />
                        {/* Sidebar panel */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-[280px] z-50 md:hidden flex flex-col pt-24 px-6 gap-2 bg-[#0f0c30]/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-[-20px_0_60px_rgba(0,0,0,0.5)]"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ x: 40, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={`block w-full text-left px-4 py-3.5 rounded-xl font-medium transition-all ${isActive
                                                    ? "text-cyan-400 bg-cyan-500/15 border border-cyan-500/40"
                                                    : "text-purple-100/80 bg-cyan-500/5 border border-cyan-500/10 hover:bg-cyan-500/15 hover:border-cyan-500/40 hover:text-cyan-400"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ x: 40, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link
                                    href="/#registration"
                                    onClick={() => setMobileOpen(false)}
                                    className="block w-full px-4 py-3.5 rounded-xl font-semibold text-white text-center bg-gradient-to-br from-cyan-500 to-purple-600 shadow-[0_0_15px_rgba(0,212,255,0.3)] mt-4 active:scale-95 transition-transform"
                                >
                                    Register Now ⚡
                                </Link>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
