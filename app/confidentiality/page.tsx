import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ConfidentialityPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-32">
        <Link href="/" className="inline-flex items-center text-[#E5E4E2] hover:text-white mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Înapoi la Pagina Principală
        </Link>

        <h1 className="text-4xl font-bold text-[#E5E4E2] mb-8">Politica de Confidențialitate</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">1. Colectarea Informațiilor</h2>
            <p className="text-[#E5E4E2]/90 mb-4">
              PLATINUM EVENTS colectează informații personale necesare pentru furnizarea serviciilor noastre, inclusiv, dar fără a se limita la
              nume, date de contact și informații specifice evenimentelor. Ne angajăm să vă protejăm confidențialitatea și să
              gestionăm informațiile dumneavoastră în mod responsabil.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">2. Utilizarea Informațiilor</h2>
            <p className="text-[#E5E4E2]/90 mb-4">Folosim informațiile dumneavoastră exclusiv pentru:</p>
            <ul className="list-disc list-inside text-[#E5E4E2]/90 space-y-2 mb-4">
              <li>Furnizarea și îmbunătățirea serviciilor noastre</li>
              <li>Comunicarea despre evenimentul dumneavoastră</li>
              <li>Procesarea plăților</li>
              <li>Conformitatea legală</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">3. Protecția Datelor</h2>
            <p className="text-[#E5E4E2]/90 mb-4">
              Implementăm măsuri tehnice și organizatorice adecvate pentru a asigura securitatea informațiilor dumneavoastră personale.
              Acestea includ:
            </p>
            <ul className="list-disc list-inside text-[#E5E4E2]/90 space-y-2 mb-4">
              <li>Stocarea criptată a datelor</li>
              <li>Procesarea securizată a plăților</li>
              <li>Acces limitat al personalului la informațiile personale</li>
              <li>Evaluări regulate de securitate</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">4. Partajarea Informațiilor</h2>
            <p className="text-[#E5E4E2]/90 mb-4">
              Nu vindem, nu comercializăm și nu transferăm informațiile dumneavoastră personale către terți. Aceasta nu
              include partenerii de încredere care ne ajută în operarea site-ului nostru web, desfășurarea activității noastre sau
              în serviciile oferite dumneavoastră.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">5. Drepturile Clientului</h2>
            <p className="text-[#E5E4E2]/90 mb-4">Aveți dreptul să:</p>
            <ul className="list-disc list-inside text-[#E5E4E2]/90 space-y-2 mb-4">
              <li>Accesați informațiile dumneavoastră personale</li>
              <li>Solicitați corectarea datelor dumneavoastră</li>
              <li>Solicitați ștergerea datelor dumneavoastră</li>
              <li>Retrageți consimțământul pentru procesarea datelor</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">6. Păstrarea Datelor</h2>
            <p className="text-[#E5E4E2]/90 mb-4">
              Păstrăm informațiile personale doar atât timp cât este necesar pentru furnizarea serviciilor noastre și pentru a respecta
              obligațiile legale. După această perioadă, informațiile dumneavoastră vor fi șterse sau anonimizate în mod securizat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">7. Contact</h2>
            <p className="text-[#E5E4E2]/90">
              Pentru orice întrebări despre politica noastră de confidențialitate, vă rugăm să contactați Ofițerul nostru pentru Protecția Datelor la{" "}
              <a href="mailto:privacy@platinumevents.ro" className="text-[#E5E4E2] hover:text-white">
                privacy@platinumevents.ro
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

