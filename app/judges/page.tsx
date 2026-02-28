import BackButton from "@/components/ui/BackButton";
import JudgesSection from "@/components/sections/JudgesSection";

export default function JudgesPage() {
    return (
        <div className="min-h-screen" style={{ background: "#0a0820" }}>
            <div className="container-custom">
                <BackButton />
                <JudgesSection />
            </div>
        </div>
    );
}
