"use client"

export const dynamic = "force-static"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TextAnimate } from "./ui/text-animate"
import { Music2, Heart } from "lucide-react"

const lyrics = [
    { text: "When all I dream of is your eyes", duration: 4800, anim: 2.5 },
    { text: "All I long for is your touch", duration: 3800, anim: 1.5 },
    { text: "And, darlin', something tells me that's enough", duration: 6300, anim: 2.2 },
    { text: "You can say that I'm a fool", duration: 3600, anim: 1.8 },
    { text: "And I don't know very much", duration: 3400, anim: 1.8 },
    { text: "But I think they call this love", duration: 6000, anim: 2.2 },
]

export default function LyricsScreen({ onComplete }) {
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(true)

    useEffect(() => {
        if (!isAnimating) return

        const currentDuration = lyrics[currentLyricIndex].duration

        const timer = setTimeout(() => {
            if (currentLyricIndex < lyrics.length - 1) {
                setCurrentLyricIndex((prev) => prev + 1)
            } else {
                setIsAnimating(false)
                onComplete()
            }
        }, currentDuration)

        return () => clearTimeout(timer)
    }, [isAnimating, currentLyricIndex, onComplete])

    return (
        <div className="w-full max-w-3xl flex flex-col items-center justify-center relative px-4 min-h-[320px]">
            {/* Top music indicator & progress dots */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-10 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-400/20 backdrop-blur-md"
            >
                <Music2 className="w-4 h-4 text-pink-400 animate-pulse" />
                <div className="flex items-center gap-1.5">
                    {lyrics.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                idx === currentLyricIndex
                                    ? "w-6 bg-gradient-to-r from-pink-400 to-purple-400"
                                    : idx < currentLyricIndex
                                    ? "w-1.5 bg-pink-400/50"
                                    : "w-1.5 bg-white/20"
                            }`}
                        />
                    ))}
                </div>
                <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            </motion.div>

            {/* Synchronized Lyrics Container */}
            <AnimatePresence mode="wait">
                {isAnimating && currentLyricIndex < lyrics.length && (
                    <motion.div
                        key={currentLyricIndex}
                        initial={{ opacity: 0, y: 15, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.96 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="text-center px-2 py-4"
                    >
                        {currentLyricIndex === 0 ? (
                            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
                                <TextAnimate
                                    by="word"
                                    duration={2.4}
                                    animation="blurInUp"
                                    className="text-3xl sm:text-5xl md:text-6xl text-white font-medium drop-shadow-[0_0_20px_rgba(244,114,182,0.65)] will-change-transform"
                                >
                                    When
                                </TextAnimate>

                                <TextAnimate
                                    by="word"
                                    duration={2.2}
                                    delay={1.8}
                                    animation="blurInUp"
                                    className="text-3xl sm:text-5xl md:text-6xl text-pink-200 font-medium drop-shadow-[0_0_25px_rgba(236,72,153,0.7)] text-balance leading-normal will-change-transform"
                                >
                                    all I dream of is your eyes
                                </TextAnimate>
                            </div>
                        ) : (
                            <TextAnimate
                                by="word"
                                duration={lyrics[currentLyricIndex].anim}
                                animation="blurInUp"
                                className="text-3xl sm:text-5xl md:text-6xl text-white font-medium drop-shadow-[0_0_25px_rgba(236,72,153,0.7)] text-balance leading-normal will-change-transform"
                            >
                                {lyrics[currentLyricIndex].text}
                            </TextAnimate>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
