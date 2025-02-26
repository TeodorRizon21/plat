"use client"

import { useEffect, useRef } from "react"
import VideoHero from "../public/herr.gif"
import { Video } from "lucide-react"

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY
        const rate = scrolled * 0.5
        contentRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center border-b border-[#333333] overflow-hidden"
    >
      <img src= {VideoHero.src} alt="Video Hero" className="absolute inset-0 w-full h-full object-cover scale-110" />

      <div className="absolute inset-0 bg-black/50" />

      <div ref={contentRef} className="relative z-10 text-center px-4">
        <h1 className="text-2xl md:text-6xl md:text-5xl font-bold text-white mb-6">
          Creăm Momente
          <span className="block text-[#E5E4E2]">Unice</span>
        </h1>
        <p className="text-base md:text-xl text-[#E5E4E2] max-w-2xl mx-auto mb-8">
          Transformăm balul tău într-o seară magică cu servicii unice de divertisment și fotografie
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#E5E4E2] text-black px-6 py-2 text-sm md:text-base md:px-8 md:py-3 rounded-full font-medium hover:bg-white transition-colors"
        >
          Contactează-ne
        </a>
      </div>
    </section>
  )
}

