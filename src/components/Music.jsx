"use client"

import { useEffect, useRef } from "react"

export default function Music({ shouldPlay }) {
    const audioRef = useRef(null)

    useEffect(() => {
        if (!audioRef.current) return
        if (shouldPlay) {
            audioRef.current.volume = 0.8
            audioRef.current.currentTime = 0
            audioRef.current.play().catch((err) => {
                console.log("Audio play error:", err)
            })
        } else {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }
    }, [shouldPlay])

    return (
        <audio ref={audioRef} preload="auto">
            <source src="/audio/bg.mp3" type="audio/mpeg" />
        </audio>
    )
}
