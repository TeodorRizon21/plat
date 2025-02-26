"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import ParallaxWrapper from "./parallax-wrapper"
import GalleryModal from "./gallery-modal"
import Bal1 from '../app/resources/bal1.jpg'
import Bal2 from '../app/resources/bal2.jpg'
import Bal3 from '../app/resources/bal3.jpg'
import Bal4 from '../app/resources/bal4.jpg'
import Bal5 from '../app/resources/bal5.jpg'
import Fest2 from '../app/resources/fest2.jpg'
import Fest3 from '../app/resources/fest3.jpg'

export default function EventCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  })
  const [videoEmblaRef, videoEmblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(true)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)
  const [videoPrevBtnEnabled, setVideoPrevBtnEnabled] = useState(true)
  const [videoNextBtnEnabled, setVideoNextBtnEnabled] = useState(true)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isVideoGalleryOpen, setIsVideoGalleryOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Example images and videos arrays - replace with your actual content
  const images = [
    Bal1.src,
    Bal2.src,
    Bal3.src,
    Bal4.src,
    Bal5.src,
    Fest2.src,
    Fest3.src,
  ]

  // Definim array-ul de videoclipuri direct cu căi
  const videos = [
    '/vid1.mp4',
    '/vid2.mp4',
    '/vid3.mp4',
    '/vid4.mp4',
    '/vid5.mp4',
    '/vid6.mp4'
  ]

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev())
      setNextBtnEnabled(emblaApi.canScrollNext())
    })

    // Inițializare stare butoane
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!videoEmblaApi) return

    videoEmblaApi.on('select', () => {
      setVideoPrevBtnEnabled(videoEmblaApi.canScrollPrev())
      setVideoNextBtnEnabled(videoEmblaApi.canScrollNext())
    })

    setVideoPrevBtnEnabled(videoEmblaApi.canScrollPrev())
    setVideoNextBtnEnabled(videoEmblaApi.canScrollNext())
  }, [videoEmblaApi])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <>
      <section className="py-16 md:py-32 bg-[#111111] border-b border-[#333333] overflow-hidden" id="events">
        <div className="container mx-auto px-4">
          <ParallaxWrapper offset={20}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center text-[#E5E4E2] mb-16"
            >
              Creează-ți momente unice
            </motion.h2>
          </ParallaxWrapper>

          <ParallaxWrapper offset={40}>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="relative max-w-[90%] mx-auto mb-32">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {images.map((src, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="relative flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-2"
                      onClick={() => {
                        setSelectedIndex(index)
                        setIsGalleryOpen(true)
                      }}
                    >
                      <div className="relative aspect-[4/3] cursor-pointer">
                        <Image
                          src={src}
                          alt={`Eveniment ${index + 1}`}
                          fill
                          className="object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <button
                className="absolute md:-left-16 left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors z-10 cursor-pointer backdrop-blur-sm"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                aria-label="Imaginea anterioară"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute md:-right-16 right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors z-10 cursor-pointer backdrop-blur-sm"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                aria-label="Imaginea următoare"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </ParallaxWrapper>

          <ParallaxWrapper offset={30}>
            <h3 className="text-4xl font-semibold text-center text-[#E5E4E2] mb-24">
              Și amintiri de neuitat
            </h3>
          </ParallaxWrapper>

          <ParallaxWrapper offset={40}>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="relative max-w-[90%] mx-auto">
              <div className="overflow-hidden" ref={videoEmblaRef}>
                <div className="flex">
                  {videos.map((src, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="relative flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-2"
                      onClick={() => {
                        setSelectedIndex(index)
                        setIsVideoGalleryOpen(true)
                      }}
                    >
                      <div className="relative aspect-video cursor-pointer">
                        <video
                          src={src}
                          className="w-full h-full object-cover rounded-2xl shadow-lg"
                          controls
                        />
                        <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors rounded-2xl" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <button
                className="absolute md:-left-16 left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors cursor-pointer backdrop-blur-sm z-50"
                onClick={() => videoEmblaApi?.scrollPrev()}
                disabled={!videoPrevBtnEnabled}
                aria-label="Video anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute md:-right-16 right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors cursor-pointer backdrop-blur-sm z-50"
                onClick={() => videoEmblaApi?.scrollNext()}
                disabled={!videoNextBtnEnabled}
                aria-label="Video următor"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </ParallaxWrapper>
        </div>
      </section>

      <GalleryModal
        images={images}
        initialIndex={selectedIndex}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        type="image"
      />

      <GalleryModal
        images={videos}
        initialIndex={selectedIndex}
        isOpen={isVideoGalleryOpen}
        onClose={() => setIsVideoGalleryOpen(false)}
        type="video"
      />
    </>
  )
}

