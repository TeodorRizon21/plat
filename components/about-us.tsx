"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Clock, Star, Award } from "lucide-react"
import ParallaxWrapper from "./parallax-wrapper"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 md:py-32 bg-black border-b border-[#333333] overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <ParallaxWrapper offset={30}>
            <motion.div variants={itemVariants} className=" p-8 items-centerspace-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] pb-4">Creăm Momente Extraordinare</h2>
              <motion.p variants={itemVariants} className="text-lg text-[#E5E4E2]/90 leading-relaxed">
                La Platinum Events, credem că fiecare sărbătoare trebuie să fie la fel de unică precum oamenii din spatele ei. De peste 15
                ani, transformăm evenimente obișnuite în experiențe extraordinare care lasă impresii de durată.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-[#E5E4E2]/90 leading-relaxed">
                Dedicarea noastră pentru excelență și atenția la detalii ne-au făcut alegerea principală pentru balurile de absolvire
                din întreaga țară. De la fotografie vintage la divertisment imersiv, îmbinăm perfect
                eleganța clasică cu inovația modernă.
              </motion.p>
              <motion.div variants={itemVariants} className="pt-4">
                <a
                  href="#services"
                  className="inline-block border border-[#E5E4E2] text-[#E5E4E2] px-8 py-3 rounded-full hover:bg-[#E5E4E2] hover:text-black transition-colors"
                >
                  Descoperă Serviciile Noastre
                </a>
              </motion.div>
            </motion.div>
          </ParallaxWrapper>

          <div className="grid gap-8 px-2">
            {[
              {
                icon: <Clock className="w-8 h-8 text-black" />,
                stat: "15+ Ani",
                text: "De creare a momentelor magice și experiențelor de neuitat",
                delay: 0.2,
                offset: 40,
              },
              {
                icon: <Star className="w-8 h-8 text-black" />,
                stat: "500+",
                text: "Momente unice create pentru clienții noștri dragi",
                delay: 0.4,
                offset: 60,
              },
              {
                icon: <Award className="w-8 h-8 text-black" />,
                stat: "10+ Servicii",
                text: "Soluții profesionale de divertisment și fotografie",
                delay: 0.6,
                offset: 80,
              },
            ].map((item, index) => (
              <ParallaxWrapper key={index} offset={item.offset}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-6 bg-[#111111] p-6 rounded-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#E5E4E2] rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                    <p className="text-[#E5E4E2]/90">{item.text}</p>
                  </div>
                </motion.div>
              </ParallaxWrapper>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

