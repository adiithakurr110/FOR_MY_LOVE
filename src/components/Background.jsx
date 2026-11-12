"use client"

import { memo } from "react"
import { motion } from "framer-motion"

// Precomputed static particles to ensure 0 hydration mismatches, smooth 60fps, and no cascading renders
const STARS = [
    { id: 1, left: 8, top: 15, size: 2, duration: 3.5, delay: 0.1 },
    { id: 2, left: 18, top: 72, size: 2.5, duration: 4.2, delay: 0.8 },
    { id: 3, left: 28, top: 28, size: 1.5, duration: 3.0, delay: 0.3 },
    { id: 4, left: 38, top: 84, size: 3, duration: 4.8, delay: 1.2 },
    { id: 5, left: 48, top: 12, size: 2, duration: 3.8, delay: 0.5 },
    { id: 6, left: 58, top: 65, size: 2.5, duration: 4.5, delay: 1.0 },
    { id: 7, left: 68, top: 22, size: 1.5, duration: 3.2, delay: 0.4 },
    { id: 8, left: 78, top: 78, size: 3, duration: 5.0, delay: 1.5 },
    { id: 9, left: 88, top: 35, size: 2, duration: 3.6, delay: 0.7 },
    { id: 10, left: 94, top: 88, size: 2.5, duration: 4.0, delay: 0.2 },
    { id: 11, left: 14, top: 44, size: 1.5, duration: 3.4, delay: 1.1 },
    { id: 12, left: 24, top: 92, size: 2, duration: 4.6, delay: 0.6 },
    { id: 13, left: 34, top: 38, size: 2.5, duration: 3.9, delay: 1.4 },
    { id: 14, left: 44, top: 58, size: 1.5, duration: 4.1, delay: 0.9 },
    { id: 15, left: 54, top: 95, size: 2, duration: 3.7, delay: 0.3 },
    { id: 16, left: 64, top: 48, size: 3, duration: 4.9, delay: 1.3 },
    { id: 17, left: 74, top: 8, size: 2, duration: 3.3, delay: 0.5 },
    { id: 18, left: 84, top: 52, size: 1.5, duration: 4.4, delay: 0.8 },
    { id: 19, left: 92, top: 18, size: 2.5, duration: 3.8, delay: 1.0 },
    { id: 20, left: 6, top: 82, size: 2, duration: 4.7, delay: 0.4 },
    { id: 21, left: 50, top: 32, size: 2, duration: 3.5, delay: 0.7 },
    { id: 22, left: 82, top: 90, size: 2.5, duration: 4.3, delay: 1.2 },
]

const FLOATING_ORBS = [
    { id: "o1", left: "15%", top: "20%", size: 320, color: "rgba(168, 85, 247, 0.18)", duration: 12 },
    { id: "o2", left: "75%", top: "25%", size: 360, color: "rgba(236, 72, 153, 0.16)", duration: 15 },
    { id: "o3", left: "45%", top: "75%", size: 420, color: "rgba(244, 63, 94, 0.14)", duration: 18 },
]

function Background() {
    return (
        <>
            {/* Ambient animated gradient orbs and stars */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                {FLOATING_ORBS.map((orb) => (
                    <motion.div
                        key={orb.id}
                        className="absolute rounded-full blur-3xl will-change-transform"
                        style={{
                            left: orb.left,
                            top: orb.top,
                            width: orb.size,
                            height: orb.size,
                            backgroundColor: orb.color,
                            transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                            scale: [1, 1.18, 1],
                            x: [0, 25, -15, 0],
                            y: [0, -20, 20, 0],
                        }}
                        transition={{
                            duration: orb.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Star particles */}
                {STARS.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute bg-white rounded-full pointer-events-none"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
                        }}
                        animate={{
                            opacity: [0.15, 0.85, 0.15],
                            scale: [1, 1.35, 1],
                        }}
                        transition={{
                            duration: star.duration,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Deep romantic backdrop gradient */}
            <div
                className="absolute inset-0 -z-20 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(130% 120% at 50% 15%, #180926 0%, #0c0414 45%, #050208 100%)",
                }}
            />
        </>
    )
}

export default memo(Background)
