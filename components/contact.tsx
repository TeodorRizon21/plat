import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import ParallaxWrapper from "./parallax-wrapper"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Contact() {
  return (
    <section className="py-32 bg-black overflow-hidden" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ParallaxWrapper offset={30}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-6">Contactează-ne</h2>
              <p className="text-[#E5E4E2] mb-8">
                Pregătit să creezi o experiență de neuitat? Contactează-ne astăzi și hai să începem planificarea
                evenimentului tău.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#E5E4E2]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-[#E5E4E2]">alexandru.g.moldovanu@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#E5E4E2]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Telefon</h3>
                    <p className="text-[#E5E4E2]">+40 720 203 629</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <WhatsApp className="w-6 h-6 text-[#E5E4E2]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
                    <a
                      href="https://wa.link/uestlw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E5E4E2] hover:text-white transition-colors"
                    >
                      Trimite-ne mesaj pe WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper offset={50}>
            <div className="bg-[#111111] p-8 rounded-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Prenume</label>
                    <Input
                      type="text"
                      placeholder="Ion"
                      className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Nume</label>
                    <Input
                      type="text"
                      placeholder="Popescu"
                      className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="ion@exemplu.ro"
                    className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Telefon</label>
                  <Input
                    type="tel"
                    placeholder="0755 123 456"
                    className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Tip Eveniment</label>
                  <RadioGroup defaultValue="banchet" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="banchet" id="banchet" />
                      <Label htmlFor="banchet" className="text-[#E5E4E2]">
                        Bal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="absolvire" id="absolvire" />
                      <Label htmlFor="absolvire" className="text-[#E5E4E2]">
                        Absolvire
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Mesaj</label>
                  <Textarea
                    placeholder="Spune-ne despre evenimentul tău..."
                    className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-[#E5E4E2] text-black hover:bg-white">Trimite Mesaj</Button>
              </form>
            </div>
          </ParallaxWrapper>
        </div>
      </div>
    </section>
  )
}

