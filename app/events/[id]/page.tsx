"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

type EventItem = {
  _id: string;
  title: string;
  description?: string;
  date?: string;
  priceRON: number;
};

export default function EventDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const eventId = params?.id as string;
  const [event, setEvent] = useState<EventItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    address: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [eventRes, accessRes] = await Promise.all([
          fetch(`/api/events/${eventId}`),
          fetch(`/api/events/${eventId}/access`),
        ]);
        const eventData = await eventRes.json();
        const accessData = await accessRes.json();
        setEvent(eventData);
        setAuthorized(Boolean(accessData.authorized));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    if (eventId) load();
  }, [eventId]);

  const submitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/events/${eventId}/access`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Parola gresita");
      }
      setAuthorized(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setAuthLoading(false);
    }
  };

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/events/${eventId}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Eroare la inregistrare");
      }
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  const status = searchParams.get("status");

  return (
    <main className="min-h-screen bg-black text-white p-6 space-y-4">
      {status === "success" && (
        <div className="rounded border border-green-500 bg-green-900/30 p-3 text-green-200">
          Plata confirmata! Vei primi un email de confirmare de la Stripe.
        </div>
      )}
      {status === "cancel" && (
        <div className="rounded border border-yellow-500 bg-yellow-900/30 p-3 text-yellow-200">
          Plata a fost anulata.
        </div>
      )}
      {error && (
        <div className="rounded border border-red-500 bg-red-900/30 p-3 text-red-200">
          {error}
        </div>
      )}
      {loading ? (
        <p>Se incarca...</p>
      ) : event ? (
        <div className="space-y-4">
          <header className="space-y-1">
            <h1 className="text-3xl font-semibold">{event.title}</h1>
            <p className="text-sm text-gray-300">{event.description}</p>
            <p className="text-sm text-gray-300">
              {event.date ? new Date(event.date).toLocaleString() : "Data TBA"}
            </p>
            <p className="text-sm text-gray-300">Pret: {event.priceRON} RON</p>
          </header>

          {!authorized && (
            <form
              onSubmit={submitPassword}
              className="max-w-md space-y-2 rounded border border-white/10 bg-white/5 p-4"
            >
              <p className="text-sm text-gray-200">
                Introdu parola evenimentului pentru a continua.
              </p>
              <input
                className="w-full rounded bg-white/10 p-2"
                type="password"
                placeholder="Parola"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full rounded bg-white text-black py-2 font-semibold hover:bg-gray-200 disabled:opacity-50"
                disabled={authLoading}
              >
                {authLoading ? "Se verifica..." : "Continua"}
              </button>
            </form>
          )}

          {authorized && (
            <form
              onSubmit={register}
              className="max-w-xl space-y-2 rounded border border-white/10 bg-white/5 p-4"
            >
              <h2 className="text-xl font-semibold">Completeaza datele</h2>
              <div className="grid gap-2 md:grid-cols-2">
                <input
                  className="w-full rounded bg-white/10 p-2"
                  placeholder="Nume"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
                <input
                  className="w-full rounded bg-white/10 p-2"
                  placeholder="Prenume"
                  value={form.surname}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, surname: e.target.value }))
                  }
                  required
                />
              </div>
              <input
                className="w-full rounded bg-white/10 p-2"
                placeholder="Telefon"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                required
              />
              <input
                className="w-full rounded bg-white/10 p-2"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                required
              />
              <textarea
                className="w-full rounded bg-white/10 p-2"
                placeholder="Adresa"
                value={form.address}
                onChange={(e) =>
                  setForm((f) => ({ ...f, address: e.target.value }))
                }
                required
              />
              <button
                type="submit"
                className="w-full rounded bg-white text-black py-2 font-semibold hover:bg-gray-200 disabled:opacity-50"
                disabled={submitting}
              >
                {submitting ? "Se trimite catre Stripe..." : "Plateste cu Stripe"}
              </button>
            </form>
          )}
        </div>
      ) : (
        <p>Evenimentul nu a fost gasit.</p>
      )}
    </main>
  );
}





