"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    return (
        <div style={{ paddingTop: "6rem", paddingBottom: "0.5rem" }}>
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300"
                style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "0.75rem",
                    background: "rgba(0, 212, 255, 0.1)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    color: "#22d3ee",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 212, 255, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)";
                }}
            >
                <ArrowLeft size={16} />
                Back to Home
            </Link>
        </div>
    );
}
