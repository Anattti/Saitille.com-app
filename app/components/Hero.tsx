"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // ============================================
    // SCROLL-POHJAISET EFEKTIT
    // ============================================
    // Muuta numeroarvoja säätääksesi scroll-efektien voimakkuutta

    // Pääsisällön parallax-liike (y-akseli)
    // [0, 1000] = scroll-alue pikseleinä, [0, 400] = liikkeen määrä
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    // Häivytys scrollatessa
    // [0, 500] = scroll-alue, [1, 0] = opacity 100% → 0%
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    // Tekstin zoomaus scrollatessa
    // [1, 1.5] = skaalaus 100% → 150%
    const scale = useTransform(scrollY, [0, 500], [1, 1.5]);

    // Taustan skaalaus (vastakkainen suunta)
    // [1.1, 1] = alkaa zoomattuna, palaa normaaliksi
    const bgScale = useTransform(scrollY, [0, 1000], [1.1, 1]);

    // Taustan tummeneminen
    // [1, 0.5] = kirkkaus 100% → 50%
    const bgBrightness = useTransform(scrollY, [0, 500], [1, 0.5]);

    return (
        <section
            ref={containerRef}
            className="sticky top-0 h-screen w-full overflow-hidden bg-accent text-white selection:bg-white selection:text-accent z-0"
        >
            {/* ============================================ */}
            {/* TAUSTA - Radial gradient sinisellä */}
            {/* ============================================ */}
            <motion.div
                style={{ scale: bgScale, filter: `brightness(${bgBrightness})` }}
                className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4a6fa5] via-[#2c4a7c] to-[#1a2c4a] will-change-transform"
            >
                {/* Tumma overlay taustan päälle */}
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* ============================================ */}
            {/* KULMA-ELEMENTIT - Navigaatio ja info */}
            {/* ============================================ */}
            {/* Kaikki häipyvät scrollatessa (opacity-efekti) */}

            {/* Vasen ylä: Logo */}
            <motion.div style={{ opacity }} className="absolute top-8 left-8 z-20 text-xs font-bold tracking-widest uppercase opacity-80">
                Saitille.com
            </motion.div>

            {/* Oikea ylä: Navigaatio */}
            <motion.div style={{ opacity }} className="absolute top-8 right-8 z-20 flex gap-8 text-xs font-bold tracking-widest uppercase">
                <a href="#projects" className="hover:opacity-100 opacity-60 transition-opacity">Projects</a>
                <a href="#about" className="hover:opacity-100 opacity-60 transition-opacity">About</a>
                <a href="#contact" className="hover:opacity-100 opacity-60 transition-opacity">Let&apos;s Talk</a>
            </motion.div>

            {/* Vasen ala: Tagline */}
            <motion.div style={{ opacity }} className="absolute bottom-8 left-8 z-20 text-xs font-bold tracking-widest uppercase opacity-60">
                Creative Production Studio
            </motion.div>

            {/* Oikea ala: CTA-nappi */}
            <motion.div style={{ opacity }} className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-2">
                <div className="bg-white text-accent px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors cursor-pointer">
                    Start Project
                </div>
            </motion.div>

            {/* Keski ala: Sijainti (piilotettu mobiilissa) */}
            <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-xs font-bold tracking-widest uppercase opacity-60 hidden md:block">
                Helsinki, Finland
            </motion.div>

            {/* ============================================ */}
            {/* PÄÄSISÄLTÖ - Animoitu otsikko */}
            {/* ============================================ */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 h-full flex flex-col items-center justify-center will-change-transform"
            >
                {/* 
                    H1-OTSIKKO HOVER-EFEKTILLÄ
                    - initial="visible" = alkutila
                    - whileHover="hidden" = hover-tila
                    - animate="visible" = paluu alkutilaan
                */}
                <motion.h1
                    className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-center mix-blend-overlay opacity-90 select-none cursor-pointer relative"
                    initial="visible"
                    whileHover="hidden"
                    animate="visible"
                >
                    {/* ============================================ */}
                    {/* PÄÄTEKSTI - "SAITILLE.COM" */}
                    {/* ============================================ */}

                    {/* Ensimmäinen rivi: "SAITILLE." */}
                    <span className="block overflow-hidden">
                        <motion.span
                            className="block"
                            // Variants määrittelevät animaation tilat
                            variants={{
                                hidden: { y: "100%", opacity: 0 },  // Hover: liukuu alas piiloon
                                visible: { y: 0, opacity: 1 }        // Normaali: näkyvillä
                            }}
                            // Alkuanimaatio sivun latautuessa
                            initial={{ y: "100%", opacity: 0 }}  // Alkaa alhaalta piilossa
                            animate={{ y: 0, opacity: 1 }}       // Nousee näkyviin
                            // SÄÄDÄ TÄSTÄ: duration = animaation kesto, delay = viive
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        >
                            SAITILLE.
                        </motion.span>
                    </span>

                    {/* Toinen rivi: "COM" */}
                    <span className="block overflow-hidden">
                        <motion.span
                            className="block"
                            variants={{
                                hidden: { y: "100%", opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            // SÄÄDÄ TÄSTÄ: delay 0.4s tekee porrastetun efektin
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        >
                            COM
                        </motion.span>
                    </span>

                    {/* ============================================ */}
                    {/* SLOGAN - Näkyy vain hoverilla */}
                    {/* ============================================ */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center text-[4vw] tracking-widest uppercase"
                        // Ulompi div: fade-efekti
                        variants={{
                            hidden: { y: 0, opacity: 1 },   // Hover: näkyvillä
                            visible: { y: 0, opacity: 0 }   // Normaali: piilotettu
                        }}
                        // SÄÄDÄ TÄSTÄ: delay 0.6s odottaa että pääteksti ehtii liukua pois
                        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Sisempi span: slide-up efekti */}
                        <span className="block overflow-hidden">
                            <motion.span
                                className="block"
                                variants={{
                                    hidden: { y: 0, opacity: 1 },      // Hover: näkyvillä
                                    visible: { y: "-100%", opacity: 0 } // Normaali: ylhäällä piilossa
                                }}
                                // SÄÄDÄ TÄSTÄ: saman delay kuin ulommassa divissä
                                transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                Made to Stand Out
                            </motion.span>
                        </span>
                    </motion.div>
                </motion.h1>
            </motion.div>
        </section>
    );
}
