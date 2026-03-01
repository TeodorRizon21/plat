"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Music, CameraIcon as Camera360, IceCream, CalendarHeart, Coffee, Smile, Video, Cake } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Camera,
    image: "/images/services/photo-booth.jpg",
    title: "Photo Booth Vintage",
    description: "Capturăm momente de neuitat cu serviciile noastre profesionale de fotografie vintage",
    span: "wide" as const,
  },
  {
    icon: Camera360,
    image: "/images/services/video-booth.jpg",
    title: "Video Booth 360°",
    description: "Videoclipuri spectaculoase la 360° care surprind fiecare unghi al momentelor tale speciale",
    span: "normal" as const,
  },
  {
    icon: Music,
    image: "/images/services/dj.jpg",
    title: "DJ Profesioniști",
    description: "DJ-ii noștri experimentați și sisteme de sunet premium",
    span: "normal" as const,
  },
  {
    icon: IceCream,
    image: "/images/services/gelato.jpg",
    title: "Gelato Bar",
    description: "Serviciu vintage de înghețată pentru o notă dulce la eveniment",
    span: "normal" as const,
  },
  {
    icon: CalendarHeart,
    image: "/images/services/wedding-planner.jpg",
    title: "Wedding Planner Calificați",
    description: "Planificare nunti și botezuri — de la concept la ziua mare",
    span: "wide" as const,
  },
  {
    icon: Coffee,
    image: "/images/services/limonade-donuts.jpg",
    title: "Limonade + Donuts Bar",
    description: "Bar de limonadă și donuts pentru prospețime și dulce",
    span: "normal" as const,
  },
  {
    icon: Smile,
    image: "/images/services/animatori.jpg",
    title: "Animatori, Ursitoare & Distracție Copii",
    description: "Divertisment pentru cei mici la nunti, botezuri și petreceri",
    span: "normal" as const,
  },
  {
    icon: Video,
    image: "/images/services/videografi-fotografi.jpg",
    title: "Videografi & Fotografi",
    description: "Fotografie și videografie profesională pentru amintiri de durată",
    span: "normal" as const,
  },
  {
    icon: Cake,
    image: "/images/services/candy-bar.jpg",
    title: "Candy Bar & Torturi",
    description: "Colaborăm cu cofetării pentru candy bar și torturi personalizate",
    span: "wide" as const,
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({})

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section className="py-16 md:py-32 bg-black border-b border-[#333333] overflow-hidden" id="services">
      <div className="container mx-auto px-6 md:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#E5E4E2] mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Creăm Amintiri Care Durează O Viață
        </motion.h2>
        <motion.p
          className="text-center text-[#E5E4E2]/80 text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Servicii complete pentru evenimente premium — nunti, botezuri, baluri și corporate
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-24"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isWide = service.span === "wide"
            const imageFailed = failedImages[index]

            return (
              <motion.div
                key={index}
                variants={item}
                className={`
                  bg-[#111111] rounded-xl overflow-hidden flex flex-col border border-[#222] 
                  hover:border-[#E5E4E2]/20 hover:bg-[#0d0d0d] transition-colors duration-300
                  ${isWide ? "lg:col-span-2" : ""}
                `}
              >
                <div className="relative w-full aspect-[16/10] bg-[#0a0a0a] flex-shrink-0">
                  {!imageFailed ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes={isWide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
                      onError={() => handleImageError(index)}
                    />
                  ) : null}
                  {imageFailed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                      <div className="w-16 h-16 bg-[#E5E4E2] rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-[#E5E4E2]/90 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#E5E4E2] text-lg mb-8 px-4">
            Suntem dedicați să transformăm evenimentul tău într-o experiență de neuitat — de la nunti și botezuri la baluri și evenimente corporate. Cu o echipă de profesioniști
            pasionați și echipamente de ultimă generație, ne asigurăm că fiecare detaliu contează.
          </p>
          <a
            href="#events"
            className="inline-block border border-[#E5E4E2] text-[#E5E4E2] px-8 py-3 rounded-full hover:bg-[#E5E4E2] hover:text-black transition-colors duration-300"
          >
            Vezi Evenimentele Noastre
          </a>
        </motion.div>
      </div>
    </section>
  )
}
