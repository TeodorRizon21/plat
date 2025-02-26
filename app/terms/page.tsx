import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-32">
        <Link href="/" className="inline-flex items-center text-[#E5E4E2] hover:text-white mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Înapoi la Pagina Principală
        </Link>

        <h1 className="text-4xl font-bold text-[#E5E4E2] mb-8">Termeni și Condiții</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">1. Acceptarea Termenilor</h2>
            <p className="text-[#E5E4E2]/90 mb-4">
              Prin accesarea și utilizarea serviciilor PLATINUM EVENTS, confirmați că ați citit, înțeles și sunteți de acord să
              fiți legat de acești Termeni și Condiții. Acești termeni constituie un acord legal între dumneavoastră și
              PLATINUM EVENTS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">2. Servicii</h2>
            <p className="text-[#E5E4E2]/90 mb-4">
              PLATINUM EVENTS oferă servicii de planificare și coordonare evenimente, incluzând dar fără a se limita la fotografie,
              videografie, divertisment și alte servicii conexe pentru baluri și evenimente de absolvire.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">3. Rezervări și Plăți</h2>
            <ul className="list-disc list-inside text-[#E5E4E2]/90 space-y-2 mb-4">
              <li>Este necesară o avans de 50% pentru confirmarea rezervării</li>
              <li>Plata finală trebuie efectuată cu 14 zile înainte de eveniment</li>
              <li>Toate plățile sunt nerambursabile, dacă nu se specifică altfel</li>
              <li>Metodele de plată acceptate vor fi comunicate în momentul rezervării</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">4. Politica de Anulare</h2>
            <p className="text-[#E5E4E2]/90 mb-4">
              Anulările trebuie făcute în scris. Se aplică următoarea politică de rambursare:
            </p>
            <ul className="list-disc list-inside text-[#E5E4E2]/90 space-y-2 mb-4">
              <li>Cu 60+ zile înainte de eveniment: 75% rambursare din avans</li>
              <li>Cu 30-59 zile înainte de eveniment: 50% rambursare din avans</li>
              <li>Mai puțin de 30 de zile: Fără rambursare</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">5. Drepturi de Imagine</h2>
            <p className="text-[#E5E4E2]/90 mb-4">
              PLATINUM EVENTS își rezervă dreptul de a utiliza orice fotografii/videoclipuri realizate la evenimentele clienților în
              scopuri promoționale, cu excepția cazului în care s-a convenit altfel în scris.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">6. Răspundere</h2>
            <p className="text-[#E5E4E2]/90 mb-4">
              PLATINUM EVENTS nu va fi răspunzător pentru niciun fel de daune directe, indirecte, incidentale, speciale sau
              consecvente rezultate din utilizarea sau imposibilitatea de a utiliza serviciile noastre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E5E4E2] mb-4">7. Contact</h2>
            <p className="text-[#E5E4E2]/90">
              Pentru orice întrebări referitoare la acești termeni, vă rugăm să ne contactați la{" "}
              <a href="mailto:legal@platinumevents.ro" className="text-[#E5E4E2] hover:text-white">
                legal@platinumevents.ro
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

