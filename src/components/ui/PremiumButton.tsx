"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    showArrow?: boolean;
    type?: "button" | "submit";
}

export function PremiumButton({ onClick, children, className, icon, showArrow = false, type = "button" }: PremiumButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const RootTag = type === "submit" ? "button" : "div";

    return (
        <div
            className={cn("relative group inline-block", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <style jsx>{`
                @keyframes rotate-ring {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes particle-burst {
                    0%   { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(1); opacity: 1; }
                    100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(var(--dist) * -1)) scale(0); opacity: 0; }
                }
                .premium-ring::before {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    border-radius: 9999px;
                    background: conic-gradient(
                        from 0deg,
                        #E63946,
                        #C1121F,
                        transparent 60%,
                        transparent 80%,
                        #E63946
                    );
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    animation: rotate-ring 3s linear infinite;
                    z-index: -1;
                }
                .group:hover .premium-ring::before {
                    opacity: 1;
                }
                .premium-glow::after {
                    content: '';
                    position: absolute;
                    inset: -12px;
                    border-radius: 9999px;
                    background: radial-gradient(circle, rgba(230, 57, 70, 0.4) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease, transform 0.5s ease;
                    transform: scale(0.8);
                    z-index: -2;
                }
                .group:hover .premium-glow::after {
                    opacity: 1;
                    transform: scale(1.15);
                }
                .particle {
                    position: absolute;
                    width: 3px;
                    height: 3px;
                    background: #E63946;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    opacity: 0;
                    pointer-events: none;
                }
                .group:hover .particle {
                    animation: particle-burst 1.2s ease-out infinite;
                }
            `}</style>

            <RootTag
                onClick={onClick}
                type={type === "submit" ? "submit" : undefined}
                role={type === "button" ? "button" : undefined}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        if (type !== "submit") {
                            e.preventDefault();
                            onClick?.();
                        }
                    }
                }}
                className="relative flex items-center justify-center gap-2 px-8 py-3 bg-[#111111] border border-white/10 rounded-full text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 group-hover:border-brand-red/40 group-hover:scale-105 active:scale-95 shadow-2xl premium-ring premium-glow cursor-pointer overflow-hidden w-full h-full"
            >
                <div className="relative z-10 flex items-center gap-2">
                    <span className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                        <motion.div
                            animate={{
                                y: isHovered ? -20 : 0,
                                opacity: isHovered ? 0 : 1,
                                scale: isHovered ? 0.5 : 1
                            }}
                            className="absolute"
                        >
                            {icon || (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 0 0 1 7 7v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                                </svg>
                            )}
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0, scale: 0.5 }}
                            animate={{
                                y: isHovered ? 0 : 20,
                                opacity: isHovered ? 1 : 0,
                                scale: isHovered ? 1 : 0.5
                            }}
                            className="absolute text-brand-red"
                        >
                            <Sparkles size={16} />
                        </motion.div>
                    </span>
                    <span className="group-hover:text-brand-red transition-colors duration-300 whitespace-nowrap">
                        {children}
                    </span>
                    {showArrow && (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-brand-red transition-all" />
                    )}
                </div>

                {/* Shimmer effect inside */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </RootTag>

            {/* Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <span
                        key={i}
                        className="particle"
                        style={{
                            '--angle': `${i * 45}deg`,
                            '--dist': '42px',
                            animationDelay: `${i * 0.1}s`
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded-lg text-[10px] text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-y-2 group-hover:translate-y-0 shadow-xl">
                Ask Radlabs AI
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#1a1a1a]" />
            </div>
        </div>
    );
}
