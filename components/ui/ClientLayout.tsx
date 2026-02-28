"use client";
import ParticleBackground from "@/components/ui/ParticleBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/ui/Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <ParticleBackground />
            <ScrollProgress />
            <Navbar />
            {children}
        </main>
    );
}
