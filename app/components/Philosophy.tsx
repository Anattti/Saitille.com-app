"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="bg-background text-foreground py-32 relative">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
                <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12 md:mb-0 md:sticky md:top-20 mix-blend-difference z-10">
                    Philosophy
                </h2>

                <div className="w-full md:w-2/3 lg:w-1/2 space-y-12 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                    <motion.p style={{ opacity }} className="transition-colors hover:text-foreground duration-300">
                        We believe in <span className="text-foreground font-medium">Digital Brutalism</span>.
                        Stripping away the unnecessary to reveal the raw, honest core of your brand.
                        It's not about being rough; it's about being real.
                    </motion.p>

                    <motion.p style={{ opacity }} className="transition-colors hover:text-foreground duration-300">
                        Inspired by the <span className="text-foreground font-medium">Steve Jobs</span> ethos,
                        we obsess over the details you don't see. The micro-interactions, the fluid animations,
                        the feeling of quality that permeates every pixel.
                    </motion.p>

                    <motion.p style={{ opacity }} className="transition-colors hover:text-foreground duration-300">
                        Our design isn't just visual; it's <span className="text-foreground font-medium">visceral</span>.
                        We create digital experiences that demand attention and leave a lasting impression.
                        Start your story with a statement.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
