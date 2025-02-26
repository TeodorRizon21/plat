import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import EventCarousel from "@/components/event-carousel"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AboutUs from "@/components/about-us"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div className="py-20"></div> {/* Spacer */}
      <AboutUs />
      <div className="py-20"></div> {/* Spacer */}
      <About />
      <div className="py-20"></div> {/* Spacer */}
      <EventCarousel />
      <div className="py-20"></div> {/* Spacer */}
      <Contact />
      <Footer />
    </main>
  )
}

