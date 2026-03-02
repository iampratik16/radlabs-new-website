"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Database, Zap, ShieldCheck, Activity, Cpu, Network, Layers } from "lucide-react";

const capabilities = [
    {
        id: "architecture",
        title: "Custom AI Architecture",
        description: "Designing resilient systems tailored to your proprietary data. We construct data pipelines that ensure seamless flow of the right data, at the right time.",
        icon: Database,
        visual: Cpu,
        color: "from-red-500/20 to-red-900/20",
        stroke: "stroke-red-500/50",
    },
    {
        id: "integration",
        title: "LLM Integration & RAG",
        description: "Retrieval-Augmented Generation linking enterprise knowledge with intelligence. Intelligent decision-making embedded at every step of your logic layers.",
        icon: Zap,
        visual: Network,
        color: "from-orange-500/20 to-red-800/20",
        stroke: "stroke-orange-500/50",
    },
    {
        id: "automation",
        title: "Agentic Workflow Automation",
        description: "Autonomous agents orchestrating intricate operational sequences end-to-end. Execution mechanisms driving automated actions that deliver tangible outcomes.",
        icon: Activity,
        visual: Layers,
        color: "from-brand-red/20 to-brand-darkred/20",
        stroke: "stroke-brand-red/50",
    },
    {
        id: "governance",
        title: "AI Governance & Observability",
        description: "Enterprise-grade guardrails ensuring compliant and predictable AI outputs. Responsible AI deployment with comprehensive oversight and control mechanisms.",
        icon: ShieldCheck,
        visual: ShieldCheck,
        color: "from-rose-500/20 to-red-950/20",
        stroke: "stroke-rose-500/50",
    },
];

export function AICapabilities() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative bg-black" id="ai-capabilities">
            {/* Sticky Header */}
            <div className="sticky top-0 h-[30vh] md:h-[40vh] flex flex-col justify-center items-center z-20 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 text-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-red/30 bg-brand-red/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                            <span className="text-sm font-medium text-brand-red tracking-wide uppercase">
                                Intelligent Systems
                            </span>
                        </div>
                        <Typography variant="h2" className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight">
                            More Than Just Models
                        </Typography>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto font-sans font-light">
                            We don't just wrap APIs. We architect custom layers of logic, grounding LLMs in your specific enterprise reality.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scrolling Content Sequence */}
            <div className="relative z-10 w-full mt-[-10vh]">
                {capabilities.map((cap, index) => {
                    const isEven = index % 2 === 0;
                    const Icon = cap.icon;
                    const VisualIcon = cap.visual;

                    return (
                        <div key={cap.id} className="min-h-screen flex items-center relative overflow-hidden py-24">

                            {/* Background Ambient Glow */}
                            <motion.div
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] bg-gradient-to-br ${cap.color} opacity-30 mix-blend-screen pointer-events-none`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 0.3 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 1.5 }}
                            />

                            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

                                {/* Text Content */}
                                <motion.div
                                    className={`flex flex-col gap-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.1)] backdrop-blur-md">
                                            <Icon className="w-8 h-8 text-brand-red" />
                                        </div>
                                        <span className="text-neutral-500 font-display font-bold tracking-[0.2em] text-xl">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                                        {cap.title}
                                    </h3>

                                    <p className="text-lg md:text-xl text-neutral-400 font-sans leading-relaxed">
                                        {cap.description}
                                    </p>

                                    <div className="mt-8 pt-8 border-t border-white/10 border-dashed">
                                        <div className="flex items-center gap-4 text-sm font-medium text-brand-red uppercase tracking-widest hover:text-white transition-colors cursor-pointer group">
                                            <span>Explore Architecture</span>
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="w-6 h-px bg-current relative"
                                            >
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 border-solid border-l-4 border-y-4 border-l-current border-y-transparent w-0 h-0" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Visual Diagram Side */}
                                <motion.div
                                    className={`relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden flex items-center justify-center group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    {/* Tech Grid Background */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

                                    {/* Central Node */}
                                    <motion.div
                                        className="relative z-20 w-32 h-32 rounded-full border-2 border-brand-red/50 bg-black/80 flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.3)] backdrop-blur-md"
                                        animate={{
                                            boxShadow: ["0 0 50px rgba(220,38,38,0.3)", "0 0 100px rgba(220,38,38,0.5)", "0 0 50px rgba(220,38,38,0.3)"]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <VisualIcon className="w-12 h-12 text-brand-red group-hover:scale-110 transition-transform duration-500" />

                                        {/* Spinning Outer Ring */}
                                        <motion.div
                                            className="absolute -inset-4 border border-dashed border-white/20 rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        />
                                        <motion.div
                                            className="absolute -inset-8 border border-white/10 rounded-full"
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        >
                                            <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-brand-red -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_red]" />
                                        </motion.div>
                                    </motion.div>

                                    {/* Connection Lines & Floating Nodes */}
                                    {[0, 1, 2].map((i) => (
                                        <React.Fragment key={i}>
                                            <motion.div
                                                className={`absolute w-px h-[100px] md:h-[150px] bg-gradient-to-t ${cap.color.replace('from-', 'from-').replace('to-', 'to-')} hidden md:block`}
                                                style={{
                                                    top: i === 0 ? '10%' : i === 1 ? 'auto' : 'auto',
                                                    bottom: i === 1 ? '10%' : 'auto',
                                                    left: i === 2 ? '15%' : 'auto',
                                                    right: i === 2 ? 'auto' : '50%',
                                                    transform: i === 2 ? 'rotate(90deg)' : 'none',
                                                }}
                                                initial={{ scaleY: 0, opacity: 0 }}
                                                whileInView={{ scaleY: 1, opacity: 1 }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                                            />
                                            <motion.div
                                                className="absolute w-12 h-12 rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm flex items-center justify-center text-[10px] text-neutral-500 font-mono"
                                                style={{
                                                    top: i === 0 ? '15%' : i === 1 ? '70%' : '45%',
                                                    left: i === 0 ? '20%' : i === 1 ? '80%' : '15%',
                                                }}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: 0.8 + (i * 0.2) }}
                                                whileHover={{ scale: 1.1, backgroundColor: "rgba(220,38,38,0.1)", borderColor: "rgba(220,38,38,0.5)", color: "#fff" }}
                                            >
                                                SYS.{i}
                                            </motion.div>
                                        </React.Fragment>
                                    ))}

                                    {/* Sweeping Scanline Effect */}
                                    <motion.div
                                        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-brand-red/5 to-transparent z-30 pointer-events-none"
                                        animate={{ y: ["-100%", "500%"] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Final Callout at bottom of scroll */}
            <div className="pb-32 pt-16 flex justify-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <Activity className="w-6 h-6 text-brand-red" />
                    <span className="text-lg font-medium text-white tracking-wide">
                        Ready to integrate these capabilities?
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
