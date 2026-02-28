import BackButton from "@/components/ui/BackButton";
import FAQSection from "@/components/sections/FAQSection";

export default function FAQPage() {
    return (
        <div className="min-h-screen" style={{ background: "#0a0820" }}>
            <div className="container-custom">
                <BackButton />
                <FAQSection />
            </div>
        </div>
    );
}
