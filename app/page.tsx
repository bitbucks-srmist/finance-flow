"use client";
import dynamic from "next/dynamic";
import ParticleBackground from "@/components/ui/ParticleBackground";
import CursorFollower from "@/components/ui/CursorFollower";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FocusAreasSection from "@/components/sections/FocusAreasSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import JudgesSection from "@/components/sections/JudgesSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0820] overflow-x-hidden">
      {/* Global persistent elements */}
      <ParticleBackground />
      {/* <CursorFollower /> */}
      <ScrollProgress />
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <RegistrationSection />
      <ScheduleSection />
      <JudgesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
