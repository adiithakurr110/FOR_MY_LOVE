"use client"

import { motion } from "framer-motion"
import { Heart, Headphones, Sparkles, Volume2 } from "lucide-react"

export default function SecondScreen({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-center relative w-full max-w-xl mx-auto px-4 py-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center will-change-transform text-center w-full"
            >
                {/* Audio recommendation badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-400/25 backdrop-blur-md mb-8 text-xs md:text-sm text-pink-200"
                >
                    <Headphones className="w-3.5 h-3.5 text-pink-400" />
                    <span>Best experienced with sound on</span>
                    <Volume2 className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                </motion.div>

                {/* Glowing emblem */}
                <div className="mb-8 relative flex items-center justify-center">
                    <motion.div
                        className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-pink-500/25 absolute"
                        animate={{ scale: [1, 1.22, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-pink-600/25 via-purple-600/25 to-rose-500/20 backdrop-blur-md absolute shadow-[0_0_30px_rgba(244,114,182,0.35)]"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        animate={{
                            rotate: [0, 8, -8, 0],
                            scale: [1, 1.08, 1],
                        }}
                        transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative z-10"
                    >
                        <Heart className="w-16 h-16 text-pink-400 fill-pink-500 drop-shadow-[0_0_15px_rgba(244,114,182,0.7)]" />
                    </motion.div>
                </div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 leading-tight font-medium text-white max-w-lg"
                >
                    Something I wanted to share
                    <span className="block mt-1 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                        with uh my love
                    </span>
                </motion.h1>

                {/* Gentle hint */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="text-sm sm:text-base text-pink-100/80 text-center max-w-sm mb-8 font-light"
                >
                    Let the melody carry each word right to where it belongs... in your heart.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button
                        onClick={onNext}
                        className="group relative px-9 sm:px-11 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white text-base sm:text-lg font-medium transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.45)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
                    >
                        <Sparkles className="w-5 h-5 text-pink-200 group-hover:rotate-45 transition-transform" />
                        <span>Show me</span>
                        <Heart className="w-5 h-5 fill-white text-white group-hover:scale-125 transition-transform" />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}
