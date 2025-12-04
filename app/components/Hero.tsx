"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax & Scroll Effects
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.5]);
    const bgScale = useTransform(scrollY, [0, 1000], [1.1, 1]);
    const bgBrightness = useTransform(scrollY, [0, 500], [1, 0.5]);

    return (
        <section
            ref={containerRef}
            className="sticky top-0 h-screen w-full overflow-hidden bg-accent text-white selection:bg-white selection:text-accent z-0"
        >
            {/* Background Image/Gradient */}
            <motion.div
                style={{ scale: bgScale, filter: `brightness(${bgBrightness})` }}
                className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4a6fa5] via-[#2c4a7c] to-[#1a2c4a] will-change-transform"
            >
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Corner Navigation / Info */}
            <motion.div style={{ opacity }} className="absolute top-8 left-8 z-20 text-xs font-bold tracking-widest uppercase opacity-80">
                Saitille.com
            </motion.div>

            <motion.div style={{ opacity }} className="absolute top-8 right-8 z-20 flex gap-8 text-xs font-bold tracking-widest uppercase">
                <a href="#projects" className="hover:opacity-100 opacity-60 transition-opacity">Projects</a>
                <a href="#about" className="hover:opacity-100 opacity-60 transition-opacity">About</a>
                <a href="#contact" className="hover:opacity-100 opacity-60 transition-opacity">Let&apos;s Talk</a>
            </motion.div>

            <motion.div style={{ opacity }} className="absolute bottom-8 left-8 z-20 text-xs font-bold tracking-widest uppercase opacity-60">
                Creative Production Studio
            </motion.div>

            <motion.div style={{ opacity }} className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-2">
                <div className="bg-white text-accent px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors cursor-pointer">
                    Start Project
                </div>
            </motion.div>

            <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-xs font-bold tracking-widest uppercase opacity-60 hidden md:block">
                Helsinki, Finland
            </motion.div>

            {/* Main Content */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 h-full flex flex-col items-center justify-center will-change-transform"
            >
                <h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-center mix-blend-overlay opacity-90 select-none">
                    <span className="block overflow-hidden">
                        <span className="block animate-slide-up [animation-delay:0.2s] opacity-0">SAITILLE.</span>
                    </span>
                    <span className="block overflow-hidden">
                        <span className="block animate-slide-up [animation-delay:0.4s] opacity-0">COM</span>
                    </span>
                </h1>
            </motion.div>
        </section>
    );
}
