"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Sparkles, Mail, Music2, X } from "lucide-react"

export default function FirstScreen({ onNext }) {
    const [showSurprise, setShowSurprise] = useState(false)
    const [heartsBurst, setHeartsBurst] = useState([])

    // Interactive heart burst when touching/clicking the surprise letter
    const handleLoveBurst = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX ? e.clientX - rect.left : rect.width / 2
        const y = e.clientY ? e.clientY - rect.top : rect.height / 2

        const newId = Date.now() + Math.random()
        setHeartsBurst((prev) => [...prev.slice(-8), { id: newId, x, y }])

        setTimeout(() => {
            setHeartsBurst((prev) => prev.filter((h) => h.id !== newId))
        }, 1200)
    }

    return (
        <div className="flex flex-col items-center justify-center relative w-full max-w-xl mx-auto px-4 py-6">
            {/* Main Landing View */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center will-change-transform text-center w-full"
            >
                {/* Floating romantic badge */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-rose-500/15 border border-pink-400/30 backdrop-blur-md mb-8 text-xs md:text-sm text-pink-200 shadow-[0_0_15px_rgba(236,72,153,0.2)]"
                >
                    <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                    <span>A little universe made just for you</span>
                </motion.div>

                {/* Central glowing heart emblem */}
                <div className="mb-8 relative flex items-center justify-center">
                    {/* Outer glowing pulsed ring */}
                    <motion.div
                        className="w-36 h-36 md:w-40 md:h-40 rounded-full border border-pink-500/30 absolute"
                        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Secondary soft purple aura ring */}
                    <motion.div
                        className="w-30 h-30 md:w-34 md:h-34 rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-600/30 to-rose-500/20 backdrop-blur-xl absolute shadow-[0_0_35px_rgba(236,72,153,0.45)]"
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Rotating subtle orbital accents */}
                    <motion.div
                        className="w-44 h-44 rounded-full border border-dashed border-purple-400/20 absolute"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Heart icon */}
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1.05, 1.18, 1],
                            rotate: [0, -4, 4, -2, 0],
                        }}
                        transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative z-10 cursor-pointer"
                        onClick={handleLoveBurst}
                    >
                        <Heart className="w-16 h-16 md:w-20 md:h-20 text-pink-400 fill-pink-500 drop-shadow-[0_0_20px_rgba(244,114,182,0.8)]" />
                    </motion.div>
                </div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl text-center mb-4 leading-tight font-medium tracking-tight text-white"
                >
                    I made something
                    <span className="block mt-1 font-semibold bg-gradient-to-r from-purple-300 via-pink-400 to-rose-300 bg-clip-text text-transparent text-glow-pink">
                        for uh my love
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-base sm:text-lg text-pink-100/85 text-center max-w-md mb-8 font-light leading-relaxed"
                >
                    A gentle space woven with melody, thoughts, and all the love I carry for you. Straight from the heart :)
                </motion.p>

                {/* Open button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="w-full flex justify-center"
                >
                    <button
                        onClick={() => setShowSurprise(true)}
                        className="group relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white text-base sm:text-lg font-medium transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.45)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
                    >
                        {/* Shimmer sweep effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                        <Mail className="w-5 h-5 text-pink-200 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Open it</span>
                        <Heart className="w-5 h-5 fill-white text-white group-hover:scale-125 transition-transform duration-300" />
                    </button>
                </motion.div>
            </motion.div>

            {/* Surprise Reveal Modal / Love Letter Unfold */}
            <AnimatePresence>
                {showSurprise && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 280 }}
                            onClick={handleLoveBurst}
                            className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1c0d2e]/95 via-[#170a24]/95 to-[#0f0417]/98 border border-pink-500/35 shadow-[0_0_50px_rgba(236,72,153,0.35)] text-center overflow-hidden"
                        >
                            {/* Floating bursts inside modal */}
                            {heartsBurst.map((h) => (
                                <motion.span
                                    key={h.id}
                                    initial={{ opacity: 1, scale: 0.6, y: 0 }}
                                    animate={{ opacity: 0, scale: 1.6, y: -50 }}
                                    transition={{ duration: 1 }}
                                    className="absolute pointer-events-none text-xl"
                                    style={{ left: h.x, top: h.y }}
                                >
                                    💖
                                </motion.span>
                            ))}

                            {/* Close button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setShowSurprise(false)
                                }}
                                className="absolute top-4 right-4 p-2 rounded-full text-pink-300/70 hover:text-white hover:bg-white/10 transition-colors"
                                aria-label="Close surprise"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Letter Envelope Stamp */}
                            <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-pink-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(244,114,182,0.4)]">
                                <Heart className="w-7 h-7 text-pink-400 fill-pink-500 animate-bounce" />
                            </div>

                            {/* Surprise heading */}
                            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2 tracking-tight">
                                A Letter For Uh My Love
                            </h2>

                            <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-4" />

                            {/* Romantic message */}
                            <p className="text-pink-100/90 text-sm sm:text-base leading-relaxed mb-4 font-light">
                                You bring a warmth to my world that words alone could never truly capture.
                                I built this little journey just to make you smile and remind you how deeply special you are to me.
                            </p>

                            <p className="text-pink-200/80 text-xs sm:text-sm italic mb-6">
                                Tap anywhere to shower love... and when you are ready, let the music begin. 💕
                            </p>

                            {/* Continue button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setShowSurprise(false)
                                    onNext()
                                }}
                                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white font-medium shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                            >
                                <Music2 className="w-5 h-5" />
                                <span>Continue To Our Melody</span>
                                <Heart className="w-4 h-4 fill-white" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
