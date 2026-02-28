import BackButton from "@/components/ui/BackButton";
import FocusAreasSection from "@/components/sections/FocusAreasSection";

export default function FocusAreasPage() {
    return (
        <div className="min-h-screen" style={{ background: "#0a0820" }}>
            <div className="container-custom">
                <BackButton />
                <FocusAreasSection />
            </div>
        </div>
    );
}
