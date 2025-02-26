import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Logo from "../public/logo-albun-full.png"

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-[#E5E4E2]">
              <img src={Logo.src} alt="Logo" className="h-36 md:h-44 w-auto object-contain pt-2" />
            </Link>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-[#E5E4E2] hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-[#E5E4E2] hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-[#E5E4E2] hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#E5E4E2] mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PLATINUM EVENTS. Toate drepturile rezervate - Website realizat de{" "}
              <a 
                href="https://grizzlymediapro.ro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E5E4E2] hover:text-white transition-colors underline"
              >
                Grizzly Media Pro
              </a>
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <Link href="/terms" className="text-[#E5E4E2] hover:text-white transition-colors">
                Termeni și Condiții
              </Link>
              <Link href="/confidentiality" className="text-[#E5E4E2] hover:text-white transition-colors">
                Politica de Confidențialitate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

