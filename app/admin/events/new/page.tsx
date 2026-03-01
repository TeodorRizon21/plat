"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function NewEventPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    priceRON: "",
    paymentDeadline: "",
    password: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          priceRON: Number(form.priceRON),
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Eroare la creare");
      }
      router.push("/admin");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Înapoi la dashboard
          </Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-2">Creează Eveniment Nou</h1>
          <p className="text-gray-400 mb-8">
            Completează detaliile evenimentului pentru a-l face disponibil utilizatorilor
          </p>

          {error && (
            <div className="mb-6 rounded-lg border border-red-500/50 bg-red-900/20 p-4 text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Titlu Eveniment <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                placeholder="ex: Balul de Crăciun 2024"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Descriere</label>
              <textarea
                rows={4}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition resize-none"
                placeholder="Descriere detaliată a evenimentului..."
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Data Evenimentului</label>
                <input
                  type="datetime-local"
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                  value={form.date}
                  onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Preț (RON) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                  placeholder="0.00"
                  value={form.priceRON}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, priceRON: e.target.value }))
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Termen Limită Plată
              </label>
              <input
                type="datetime-local"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                value={form.paymentDeadline}
                onChange={(e) =>
                  setForm((f) => ({ ...f, paymentDeadline: e.target.value }))
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Parolă Eveniment <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                placeholder="Parola pentru accesul la eveniment"
                value={form.password}
                onChange={(e) =>
                  setForm((f) => ({ ...f, password: e.target.value }))
                }
                required
              />
              <p className="mt-2 text-xs text-gray-400">
                Utilizatorii vor avea nevoie de această parolă pentru a accesa pagina evenimentului
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={20} />
                {saving ? "Se salvează..." : "Salvează Eveniment"}
              </button>
              <Link
                href="/admin"
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition"
              >
                Anulează
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}





