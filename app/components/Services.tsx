"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
    const [hoveredService, setHoveredService] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const services = [
        { name: "Brand Films", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" },
        { name: "Commercials & Ad Spots", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop" },
        { name: "Event Cinematography", image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop" },
        { name: "Editorial & Fashion Films", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop" },
        { name: "Wedding Films", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop" },
        { name: "Product Films", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop" },
        { name: "Music Videos", image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop" },
        { name: "Documentary Shorts", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=1000&auto=format&fit=crop" },
        { name: "Social Media Visuals", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" },
        { name: "Creative Direction", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop" },
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="bg-black text-white py-20 relative overflow-hidden" ref={containerRef}>
            {/* Floating Image Reveal */}
            <AnimatePresence>
                {hoveredService && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, x: mousePosition.x - 200, y: mousePosition.y - 150 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="fixed top-0 left-0 w-[400px] h-[300px] z-50 pointer-events-none overflow-hidden rounded-lg hidden md:block mix-blend-difference"
                    >
                        <img
                            src={services.find(s => s.name === hoveredService)?.image}
                            alt="Service Preview"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Divider Line */}
            <div className="w-full h-[1px] bg-white/20 mb-12" />

            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start relative z-10">
                <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12 md:mb-0 md:sticky md:top-20 mix-blend-difference">
                    Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 text-right w-full md:w-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="text-lg md:text-xl font-light tracking-wide text-gray-400 hover:text-white transition-colors duration-300 cursor-none"
                            onMouseEnter={() => setHoveredService(service.name)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            {service.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Section */}
            <div className="mt-32 relative py-12 border-t border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center animate-marquee whitespace-nowrap">
                    <span className="text-[10vw] font-bold uppercase tracking-tighter mx-4">Start Your Story</span>
                    <span className="text-[10vw] font-bold uppercase tracking-tighter mx-4 text-accent">Start Your Story</span>
                    <span className="text-[10vw] font-bold uppercase tracking-tighter mx-4">Start Your Story</span>
                    <span className="text-[10vw] font-bold uppercase tracking-tighter mx-4 text-accent">Start Your Story</span>
                </div>

                <div className="absolute inset-0 flex items-center animate-marquee2 whitespace-nowrap">
                    <span className="text-[10vw] font-bold uppercase tracking-tighter mx-4">Start Your Story</span>
                    <span className="text-[10vw] font-bold uppercase tracking-tighter mx-4 text-accent">Start Your Story</span>
                    <span className="text-[10vw] font-bold uppercase tracking-tighter mx-4">Start Your Story</span>
                    <span className="text-[10vw] font-bold uppercase tracking-tighter mx-4 text-accent">Start Your Story</span>
                </div>
            </div>
        </section>
    );
}
