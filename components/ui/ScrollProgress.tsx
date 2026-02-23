"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const [scrollY, setScrollY] = useState(0);
    const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = scrollTop / docHeight;
            setScrollY(progress);
            scaleX.set(progress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scaleX]);

    return (
        <div className="fixed top-0 left-0 right-0 z-[1000] h-[3px] bg-transparent">
            <motion.div
                className="h-full origin-left"
                style={{
                    scaleX,
                    background:
                        "linear-gradient(90deg, #00D4FF 0%, #8B5CF6 50%, #FFD700 100%)",
                    boxShadow:
                        "0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)",
                }}
            />
        </div>
    );
}
