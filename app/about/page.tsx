import BackButton from "@/components/ui/BackButton";
import AboutSection from "@/components/sections/AboutSection";

export default function AboutPage() {
    return (
        <div className="min-h-screen" style={{ background: "#0a0820" }}>
            <div className="container-custom">
                <BackButton />
                <AboutSection />
            </div>
        </div>
    );
}
