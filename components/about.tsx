import { Camera, Music, CameraIcon as Camera360, IceCream } from "lucide-react"
import ParallaxWrapper from "./parallax-wrapper"

export default function About() {
  const services = [
    {
      icon: <Camera className="w-8 h-8 text-black" />,
      title: "Photo Booth Vintage",
      description: "Capturăm momente de neuitat cu serviciile noastre profesionale de fotografie vintage",
      offset: 30,
    },
    {
      icon: <Camera360 className="w-8 h-8 text-black" />,
      title: "Video Booth 360°",
      description: "Creăm videoclipuri spectaculoase la 360 de grade care surprind fiecare unghi al momentelor tale speciale",
      offset: 45,
    },
    {
      icon: <Music className="w-8 h-8 text-black" />,
      title: "DJ Profesioniști",
      description: "Menținem atmosfera cu DJ-ii noștri experimentați și sisteme de sunet premium",
      offset: 60,
    },
    {
      icon: <IceCream className="w-8 h-8 text-black" />,
      title: "Gelato Bar",
      description: "Adaugă o notă dulce evenimentului tău cu serviciul nostru vintage de înghețată",
      offset: 75,
    },
  ]

  return (
    <section className="py-16 md:py-32 bg-black border-b border-[#333333] overflow-hidden" id="services">
      <div className="container mx-auto px-6 md:px-8">
        <ParallaxWrapper offset={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E5E4E2] mb-16">
            Creăm Amintiri Care Durează O Viață
          </h2>
        </ParallaxWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <ParallaxWrapper key={index} offset={service.offset}>
              <div className="bg-[#111111] p-8 rounded-lg text-center transform transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#E5E4E2] rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-[#E5E4E2] flex-grow">{service.description}</p>
              </div>
            </ParallaxWrapper>
          ))}
        </div>

        <ParallaxWrapper offset={40}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E5E4E2] text-lg mb-8 px-4">
              Suntem dedicați să transformăm evenimentul tău într-o experiență de neuitat. Cu o echipă de profesioniști
              pasionați și echipamente de ultimă generație, ne asigurăm că fiecare detaliu contează. Echipa noastră este dedicată să facă din noaptea ta specială una cu adevărat magică.
            </p>
            <a
              href="#events"
              className="inline-block border border-[#E5E4E2] text-[#E5E4E2] px-8 py-3 rounded-full hover:bg-[#E5E4E2] hover:text-black transition-colors"
            >
              Vezi Evenimentele Noastre
            </a>
          </div>
        </ParallaxWrapper>
      </div>
    </section>
  )
}

