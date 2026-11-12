"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, RotateCcw, Sparkles } from "lucide-react"

export default function OutroScreen({ onRestart }) {
    const [heartsBurst, setHeartsBurst] = useState([])
    const [loveCount, setLoveCount] = useState(0)

    const handleSendHeart = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (Math.random() - 0.5) * 160
        const y = -80 - Math.random() * 80
        const id = Date.now() + Math.random()

        setHeartsBurst((prev) => [...prev.slice(-12), { id, x, y }])
        setLoveCount((c) => c + 1)

        setTimeout(() => {
            setHeartsBurst((prev) => prev.filter((h) => h.id !== id))
        }, 1200)
    }

    return (
        <div className="w-full max-w-xl flex flex-col items-center justify-center relative px-4 py-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-6 will-change-transform text-center w-full"
            >
                {/* Cute GIF with soft glow frame */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative p-3 rounded-3xl bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-rose-500/20 border border-pink-400/30 backdrop-blur-md shadow-[0_0_35px_rgba(236,72,153,0.3)]"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/gifs/cute.gif"
                        alt="cute romantic animation"
                        className="w-44 sm:w-52 rounded-2xl select-none pointer-events-none"
                    />
                </motion.div>

                {/* Outro Text */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-2"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                        This was meant
                        <span className="block mt-1 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent font-bold">
                            for uh my love ❤️
                        </span>
                    </h2>
                    <p className="text-pink-100/80 text-sm sm:text-base font-light max-w-sm mx-auto">
                        Always and forever, in every heartbeat, in every melody.
                    </p>
                </motion.div>

                {/* Interactive Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-3 relative mt-2"
                >
                    {/* Flying hearts */}
                    {heartsBurst.map((h) => (
                        <motion.span
                            key={h.id}
                            initial={{ opacity: 1, scale: 0.8, x: 0, y: 0 }}
                            animate={{ opacity: 0, scale: 1.8, x: h.x, y: h.y }}
                            transition={{ duration: 1.1, ease: "easeOut" }}
                            className="absolute pointer-events-none text-2xl"
                        >
                            💖
                        </motion.span>
                    ))}

                    <button
                        onClick={handleSendHeart}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white font-medium text-sm sm:text-base shadow-[0_0_20px_rgba(236,72,153,0.45)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                    >
                        <Heart className="w-4 h-4 fill-white" />
                        <span>Send Love Back</span>
                        {loveCount > 0 && (
                            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                                {loveCount}
                            </span>
                        )}
                    </button>

                    {onRestart && (
                        <button
                            onClick={onRestart}
                            className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-pink-200 hover:text-white font-medium text-sm sm:text-base border border-pink-400/25 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                        >
                            <RotateCcw className="w-4 h-4" />
                            <span>Replay Journey</span>
                        </button>
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
}
