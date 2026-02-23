"use client";
import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
    color: string;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        const particles: Particle[] = [];
        const colors = ["#00D4FF", "#8B5CF6", "#FFD700", "#4C51FF", "#00B8F5"];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticle = (): Particle => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.6 + 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        });

        const init = () => {
            particles.length = 0;
            const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 12000));
            for (let i = 0; i < count; i++) {
                particles.push(createParticle());
            }
        };

        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.15;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color.replace(")", `, ${p.opacity})`).replace("rgb", "rgba").replace("#", "rgba(").replace("rgba(", "rgba(");

                // Simple hex-to-rgba conversion
                const hexToRgba = (hex: string, alpha: number): string => {
                    const r = parseInt(hex.slice(1, 3), 16);
                    const g = parseInt(hex.slice(3, 5), 16);
                    const b = parseInt(hex.slice(5, 7), 16);
                    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
                };

                ctx.fillStyle = hexToRgba(p.color, p.opacity);

                // Glow effect for certain particles
                if (p.radius > 1.5) {
                    ctx.shadowColor = p.color;
                    ctx.shadowBlur = 6;
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
            });

            ctx.shadowBlur = 0;
            connectParticles();
            animationId = requestAnimationFrame(animate);
        };

        resize();
        init();
        animate();

        window.addEventListener("resize", () => {
            resize();
            init();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.7 }}
        />
    );
}
