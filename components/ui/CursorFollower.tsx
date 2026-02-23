"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorFollower() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA"
            );
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed pointer-events-none z-[9999] rounded-full border"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: isPointer ? 44 : 32,
                    height: isPointer ? 44 : 32,
                    borderColor: isPointer ? "rgba(255, 215, 0, 0.8)" : "rgba(0, 212, 255, 0.6)",
                    boxShadow: isPointer
                        ? "0 0 15px rgba(255, 215, 0, 0.4)"
                        : "0 0 10px rgba(0, 212, 255, 0.3)",
                    transition: "width 0.2s, height 0.2s, border-color 0.2s, box-shadow 0.2s",
                }}
            />
            {/* Inner dot */}
            <motion.div
                className="fixed pointer-events-none z-[9999] rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: isPointer ? 6 : 5,
                    height: isPointer ? 6 : 5,
                    backgroundColor: isPointer ? "rgba(255, 215, 0, 1)" : "rgba(0, 212, 255, 1)",
                    boxShadow: isPointer
                        ? "0 0 8px rgba(255, 215, 0, 0.8)"
                        : "0 0 6px rgba(0, 212, 255, 0.8)",
                }}
            />
        </>
    );
}
