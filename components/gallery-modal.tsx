"use client"

import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface GalleryModalProps {
  images: string[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
  type: "image" | "video"
}

export default function GalleryModal({ images, initialIndex, isOpen, onClose, type }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowLeft":
          navigate("prev")
          break
        case "ArrowRight":
          navigate("next")
          break
        case "Escape":
          onClose()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const navigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1))
    } else {
      setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1))
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-[#E5E4E2] transition-colors">
        <X size={32} />
      </button>

      <button
        onClick={() => navigate("prev")}
        className="absolute left-4 text-white hover:text-[#E5E4E2] transition-colors"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={() => navigate("next")}
        className="absolute right-4 text-white hover:text-[#E5E4E2] transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      <div className="w-full max-w-6xl mx-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-[16/9]"
          >
            {type === "image" ? (
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            ) : (
              <video src={images[currentIndex]} controls className="w-full h-full" autoPlay>
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#E5E4E2]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

