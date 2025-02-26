"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxProps {
  children: ReactNode
  offset?: number
  className?: string
}

export default function ParallaxWrapper({ children, offset = 50, className = "" }: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    let animationFrameId: number
    let scrollPosition = window.scrollY

    const handleScroll = () => {
      scrollPosition = window.scrollY
      animationFrameId = requestAnimationFrame(updatePosition)
    }

    const updatePosition = () => {
      if (!element) return
      const elementTop = element.offsetTop
      const elementHeight = element.offsetHeight
      const viewportHeight = window.innerHeight
      const viewportTop = scrollPosition
      const viewportBottom = viewportTop + viewportHeight

      // Check if element is in viewport
      if (elementTop + elementHeight > viewportTop && elementTop < viewportBottom) {
        const distance = viewportBottom - elementTop
        const percentage = distance / (viewportHeight + elementHeight)
        const move = offset * percentage

        element.style.transform = `translate3d(0, ${move}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [offset])

  return (
    <div ref={elementRef} className={`transform will-change-transform ${className}`}>
      {children}
    </div>
  )
}

