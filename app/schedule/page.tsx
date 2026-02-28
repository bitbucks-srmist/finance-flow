import BackButton from "@/components/ui/BackButton";
import ScheduleSection from "@/components/sections/ScheduleSection";

export default function SchedulePage() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0820" }}>
      <div className="container-custom">
        <BackButton />
        <ScheduleSection />
      </div>
    </div>
  );
}
