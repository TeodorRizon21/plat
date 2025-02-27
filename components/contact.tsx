"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import ParallaxWrapper from "./parallax-wrapper"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await emailjs.sendForm(
        'service_alex', // Înlocuiește cu service ID-ul tău
        'template_r24ms2i', // Înlocuiește cu template ID-ul tău
        form.current!,
        'hWwlwOpzBdKHHEZBn' // Înlocuiește cu cheia ta publică
      )

      if (result.text === 'OK') {
        setSubmitStatus({
          type: "success",
          message: "Mesajul a fost trimis cu succes! Te vom contacta în curând."
        })
        if (form.current) {
          form.current.reset()
        }
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Prenume</label>
                    <Input
                      name="firstName"
                      type="text"
                      placeholder="Ion"
                      className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Nume</label>
                    <Input
                      name="lastName"
                      type="text"
                      placeholder="Popescu"
                      className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="ion@exemplu.ro"
                    className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Telefon</label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="0755 123 456"
                    className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E4E2] mb-2">Tip Eveniment</label>
                  <RadioGroup defaultValue="banchet" name="eventType" className="flex gap-4">
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
                    name="message"
                    placeholder="Spune-ne despre evenimentul tău..."
                    className="bg-black/50 border-[#333333] text-white placeholder:text-gray-500"
                    rows={4}
                    required
                  />
                </div>

                {submitStatus.type && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <Button 
                  type="submit"
                  className="w-full bg-[#E5E4E2] text-black hover:bg-white disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Se trimite..." : "Trimite Mesaj"}
                </Button>
              </form>
            </div>
          </ParallaxWrapper>
        </div>
      </div>
    </section>
  )
}

