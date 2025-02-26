"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Logo from "../public/logo-albun-full copy.png"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const menuItems = [
    { href: "home", label: "Acasă" },
    { href: "about", label: "Despre Noi" },
    { href: "services", label: "Servicii" },
    { href: "events", label: "Evenimente" },
    { href: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "events", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <Link href="/#home" className="text-2xl font-bold text-[#E5E4E2] flex items-center">
            <img 
              src={Logo.src} 
              alt="Logo" 
              className="h-36 md:h-36 w-auto object-contain pt-2"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map(({ href, label }) => (
              <a
                key={href}
                href={`#${href}`}
                className={`text-[#E5E4E2] hover:text-white transition-colors relative text-sm tracking-wide ${
                  activeSection === href
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E5E4E2]"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-[#E5E4E2]" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Meniu mobil cu animație */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="flex flex-col items-center space-y-5 py-6"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {menuItems.map(({ href, label }) => (
                  <motion.a
                    key={href}
                    href={`#${href}`}
                    className={`text-[#E5E4E2] hover:text-white transition-colors text-base ${
                      activeSection === href ? "font-bold" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

