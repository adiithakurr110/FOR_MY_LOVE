"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Background from "@/components/Background"
import FirstScreen from "@/components/FirstScreen"
import SecondScreen from "@/components/SecondScreen"
import LyricsScreen from "@/components/LyricsScreen"
import Music from "@/components/Music"
import OutroScreen from "@/components/OutroScreen"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("first")
  const [musicStarted, setMusicStarted] = useState(false)

  const handleRestart = () => {
    setMusicStarted(false)
    setCurrentScreen("first")
  }

  const screens = {
    first: <FirstScreen onNext={() => setCurrentScreen("second")} />,
    second: (
      <SecondScreen
        onNext={() => {
          setMusicStarted(true)
          setCurrentScreen("lyrics")
        }}
      />
    ),
    lyrics: <LyricsScreen onComplete={() => setCurrentScreen("outro")} />,
    outro: <OutroScreen onRestart={handleRestart} />,
  }

  return (
    <main className="flex min-h-screen items-center justify-center relative px-4 py-8 overflow-hidden select-none">
      <Background />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full flex items-center justify-center"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      <Music shouldPlay={musicStarted} />

      {/* Watermark */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed bottom-4 right-4 text-xs sm:text-sm text-pink-300/40 pointer-events-none z-50 font-light tracking-wider drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]"
      >
        @FOR UH MY LOVE
      </motion.div>
    </main>
  )
}
