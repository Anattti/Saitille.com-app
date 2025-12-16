"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionTemplate } from "framer-motion";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Kuuntele scrollausta ja vaihda tilaa kun on scrollattu tarpeeksi
    useMotionValueEvent(scrollY, "change", (latest) => {
        // Kun on scrollattu 50px, vaihda slogan näkyviin
        // Tämä tapahtuu "sticky"-alueen aikana
        setIsScrolled(latest > 50);
    });

    // ============================================
    // SCROLL-POHJAISET EFEKTIT
    // ============================================
    // Päivitetyt arvot: Efektit alkavat vasta kun slogan on vaihtunut (n. 400px kohdalla)

    // Pääsisällön parallax-liike (y-akseli)
    // Alkaa vasta 400px kohdalla -> pysyy paikallaan aluksi
    const y = useTransform(scrollY, [400, 1200], [0, 400]);

    // Häivytys scrollatessa
    // Alkaa 500px kohdalla -> slogan ehtii näkyä selkeästi
    const opacity = useTransform(scrollY, [500, 1000], [1, 0]);

    // Tekstin zoomaus scrollatessa
    // Alkaa 400px kohdalla
    const scale = useTransform(scrollY, [400, 1000], [1, 1.5]);

    // Taustan skaalaus
    // Tämä voi alkaa heti, luo syvyysvaikutelmaa vaikka teksti seisoo
    const bgScale = useTransform(scrollY, [0, 1200], [1.1, 1]);

    // Taustan tummeneminen
    const bgBrightness = useTransform(scrollY, [400, 1000], [1, 0.5]);
    const filter = useMotionTemplate`brightness(${bgBrightness})`;

    // Yhdistetty tila: slogan näkyy jos hover TAI scrollattu
    // Mobiilissa ei ole hoveria, joten scroll (tai tap) hoitaa homman
    const showSlogan = isHovered || isScrolled;

    return (
        <section
            ref={containerRef}
            className="relative h-[200dvh] w-full"
        >
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-accent text-white selection:bg-white selection:text-accent z-0">
                {/* ============================================ */}
                {/* TAUSTA - Radial gradient sinisellä */}
                {/* ============================================ */}
                <motion.div
                    style={{ scale: bgScale, filter }}
                    className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4a6fa5] via-[#2c4a7c] to-[#1a2c4a] will-change-transform"
                >
                    {/* Tumma overlay taustan päälle */}
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                {/* ============================================ */}
                {/* KULMA-ELEMENTIT - Navigaatio ja info */}
                {/* ============================================ */}

                {/* Vasen ylä: Logo */}
                <motion.div style={{ opacity }} className="hidden sm:block absolute top-8 left-8 z-20 text-xs font-bold tracking-widest uppercase opacity-80">
                    <a href="https://www.saitille.com">Saitille.com</a>
                </motion.div>

                {/* Oikea ylä: Navigaatio */}
                <motion.div style={{ opacity }} className="absolute top-8 left-0 z-20 flex w-full justify-between px-8 text-xs font-bold tracking-widest uppercase sm:left-auto sm:right-8 sm:w-auto sm:justify-start sm:gap-8 sm:px-0">
                    <a href="#projects" className="opacity-100 md:opacity-60 transition-opacity">Projects</a>
                    <a href="#about" className="hover:opacity-100 opacity-60 transition-opacity">About</a>
                    <a href="#contact" className="hover:opacity-100 opacity-60 transition-opacity">Let&apos;s Talk</a>
                </motion.div>

                {/* Vasen ala: Tagline */}
                <motion.div style={{ opacity }} className="hidden sm:block absolute bottom-8 left-8 z-20 text-xs font-bold tracking-widest uppercase opacity-60">
                    <a href="https://www.saitille.com">Creative Production Studio</a>
                </motion.div>

                {/* Oikea ala: CTA-nappi */}
                <motion.div style={{ opacity }} className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-2">
                    <button className="bg-white text-accent px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors cursor-pointer">
                        Start Project
                    </button>
                </motion.div>

                {/* Keski ala: Sijainti (piilotettu mobiilissa) */}
                <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-xs font-bold tracking-widest uppercase opacity-60 hidden md:block">
                    <a href="https://www.saitille.com">Helsinki, Finland</a>
                </motion.div>

                {/* ============================================ */}
                {/* PÄÄSISÄLTÖ - Animoitu otsikko */}
                {/* ============================================ */}
                <motion.div
                    style={{ y, opacity, scale }}
                    className="relative z-10 h-full flex flex-col items-center justify-center will-change-transform"
                >
                    {/* 
                        H1-OTSIKKO
                        - Ohjataan showSlogan-muuttujalla (Hover tai Scroll)
                    */}
                    <motion.h1
                        className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-center mix-blend-overlay opacity-90 select-none cursor-pointer relative"
                        initial="enter"
                        animate={showSlogan ? "hidden" : "visible"}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        // Poistetaan onClick, koska scroll hoitaa tämän nyt mobiilissa
                        // Mutta pidetään se vaihtoehtona jos käyttäjä haluaa klikata
                        onClick={() => setIsHovered(!isHovered)}
                    >
                        {/* ============================================ */}
                        {/* PÄÄTEKSTI - "SAITILLE.COM" */}
                        {/* ============================================ */}

                        {/* Ensimmäinen rivi: "SAITILLE." */}
                        <span className="block overflow-hidden">
                            <motion.span
                                className="block will-change-transform"
                                variants={{
                                    enter: {
                                        y: "100%",
                                        opacity: 0
                                    },
                                    hidden: {
                                        y: "100%",
                                        opacity: 0,
                                        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
                                    },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
                                    }
                                }}
                            >
                                SAITILLE.
                            </motion.span>
                        </span>

                        {/* Toinen rivi: "COM" */}
                        <span className="block overflow-hidden">
                            <motion.span
                                className="block will-change-transform"
                                variants={{
                                    enter: {
                                        y: "100%",
                                        opacity: 0
                                    },
                                    hidden: {
                                        y: "100%",
                                        opacity: 0,
                                        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
                                    },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }
                                    }
                                }}
                            >
                                COM
                            </motion.span>
                        </span>

                        {/* ============================================ */}
                        {/* SLOGAN - Näkyy kun showSlogan on tosi */}
                        {/* ============================================ */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center text-[4vw] tracking-widest uppercase"
                            variants={{
                                enter: {
                                    y: 0,
                                    opacity: 0
                                },
                                hidden: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                                },
                                visible: {
                                    y: 0,
                                    opacity: 0,
                                    transition: { delay: 0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                                }
                            }}
                        >
                            <span className="block overflow-hidden">
                                <motion.span
                                    className="block"
                                    variants={{
                                        enter: {
                                            y: "-100%",
                                            opacity: 0
                                        },
                                        hidden: {
                                            y: 0,
                                            opacity: 1,
                                            transition: { delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                                        },
                                        visible: {
                                            y: "-100%",
                                            opacity: 0,
                                            transition: { delay: 0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                                        }
                                    }}
                                >
                                    Made to Stand Out
                                </motion.span>
                            </span>
                        </motion.div>
                    </motion.h1>
                </motion.div>
            </div>
        </section>
    );
}
