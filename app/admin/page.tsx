"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Users,
  DollarSign,
  Calendar,
  Eye,
  Trash2,
  Download,
  ExternalLink,
} from "lucide-react";

type EventItem = {
  _id: string;
  title: string;
  description?: string;
  date?: string;
  priceRON: number;
  paymentDeadline?: string;
  status?: string;
  createdAt?: string;
};

type Registration = {
  _id: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  paymentStatus: string;
  amountRON: number;
  createdAt?: string;
};

export default function AdminPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedEventTitle, setSelectedEventTitle] = useState<string>("");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [totalPaid, setTotalPaid] = useState<number>(0);
  const [totalRegistrations, setTotalRegistrations] = useState<number>(0);
  const [loadingRegs, setLoadingRegs] = useState(false);

  const loadEvents = async () => {
    try {
      setLoadingEvents(true);
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error("Eroare la încărcare");
      const data = await res.json();
      setEvents(data || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoadingEvents(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const deleteEvent = async (id: string) => {
    if (!confirm("Sigur ștergi evenimentul?")) return;
    try {
      const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Eroare la ștergere");
      if (selectedEvent === id) {
        setSelectedEvent(null);
        setRegistrations([]);
        setTotalPaid(0);
        setTotalRegistrations(0);
      }
      await loadEvents();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const viewRegistrations = async (id: string) => {
    setSelectedEvent(id);
    setLoadingRegs(true);
    try {
      const res = await fetch(`/api/events/${id}/registrations`);
      if (!res.ok) throw new Error("Eroare la încărcare");
      const data = await res.json();
      setRegistrations(data.items || []);
      setTotalPaid(data.totalPaid || 0);
      setTotalRegistrations(data.items?.length || 0);
      const event = events.find((e) => e._id === id);
      setSelectedEventTitle(event?.title || "");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoadingRegs(false);
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "N/A";
    try {
      return new Date(dateStr).toLocaleString("ro-RO");
    } catch {
      return dateStr;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ro-RO", {
      style: "currency",
      currency: "RON",
    }).format(amount);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">
            Dashboard (autentificare dezactivată temporar)
          </p>
        </header>

        {error && (
          <div className="mb-6 rounded-lg border border-red-500/50 bg-red-900/20 p-4 text-red-200">
            {error}
          </div>
        )}

        {/* Statistici */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Total Evenimente</h3>
              <Calendar className="text-gray-400" size={20} />
            </div>
            <p className="text-3xl font-bold">{events.length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Total Înscrieri</h3>
              <Users className="text-gray-400" size={20} />
            </div>
            <p className="text-3xl font-bold">{totalRegistrations}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Total Încasat</h3>
              <DollarSign className="text-gray-400" size={20} />
            </div>
            <p className="text-3xl font-bold">{formatCurrency(totalPaid)}</p>
          </div>
        </div>

        {/* Acțiuni rapide */}
        <div className="mb-8">
          <Link
            href="/admin/events/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            <Plus size={20} />
            Creează Eveniment Nou
          </Link>
        </div>

        {/* Lista evenimente */}
        <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Evenimente</h2>
            <button
              onClick={loadEvents}
              className="text-sm text-gray-400 hover:text-white transition"
              disabled={loadingEvents}
            >
              {loadingEvents ? "Se încarcă..." : "Reîncarcă"}
            </button>
          </div>

          {loadingEvents ? (
            <p className="text-gray-400 text-center py-8">Se încarcă evenimentele...</p>
          ) : events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">Nu există evenimente create.</p>
              <Link
                href="/admin/events/new"
                className="inline-flex items-center gap-2 text-white hover:underline"
              >
                <Plus size={16} />
                Creează primul eveniment
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {events.map((ev) => (
                <div
                  key={ev._id}
                  className="bg-black/40 border border-white/10 rounded-lg p-5 hover:border-white/20 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{ev.title}</h3>
                      {ev.description && (
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                          {ev.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="flex items-center gap-1">
                          <DollarSign size={14} />
                          {formatCurrency(ev.priceRON)}
                        </span>
                        {ev.date && (
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {formatDate(ev.date)}
                          </span>
                        )}
                        {ev.status && (
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              ev.status === "active"
                                ? "bg-green-500/20 text-green-300"
                                : "bg-gray-500/20 text-gray-300"
                            }`}
                          >
                            {ev.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => viewRegistrations(ev._id)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition text-sm"
                      >
                        <Users size={16} />
                        Participanți
                      </button>
                      <Link
                        href={`/events/${ev._id}`}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition text-sm"
                      >
                        <ExternalLink size={16} />
                        Vezi
                      </Link>
                      <button
                        onClick={() => deleteEvent(ev._id)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-lg transition text-sm"
                      >
                        <Trash2 size={16} />
                        Șterge
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Participanți */}
        {selectedEvent && (
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Participanți</h2>
                <p className="text-gray-400 text-sm">{selectedEventTitle}</p>
              </div>
              <Link
                href={`/api/events/${selectedEvent}/registrations/csv`}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition text-sm"
              >
                <Download size={16} />
                Export CSV
              </Link>
            </div>

            <div className="mb-4 flex gap-6">
              <div>
                <span className="text-gray-400 text-sm">Total Înscrieri:</span>
                <span className="ml-2 font-semibold">{totalRegistrations}</span>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Total Încasat:</span>
                <span className="ml-2 font-semibold text-green-400">
                  {formatCurrency(totalPaid)}
                </span>
              </div>
            </div>

            {loadingRegs ? (
              <p className="text-gray-400 text-center py-8">Se încarcă participanții...</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Nume</th>
                      <th className="px-4 py-3 text-left font-semibold">Telefon</th>
                      <th className="px-4 py-3 text-left font-semibold">Email</th>
                      <th className="px-4 py-3 text-left font-semibold">Adresă</th>
                      <th className="px-4 py-3 text-left font-semibold">Status</th>
                      <th className="px-4 py-3 text-left font-semibold">Sumă</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((r) => (
                      <tr
                        key={r._id}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >
                        <td className="px-4 py-3">
                          {r.name} {r.surname}
                        </td>
                        <td className="px-4 py-3 text-gray-300">{r.phone}</td>
                        <td className="px-4 py-3 text-gray-300">{r.email}</td>
                        <td className="px-4 py-3 text-gray-300">{r.address}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              r.paymentStatus === "paid"
                                ? "bg-green-500/20 text-green-300"
                                : r.paymentStatus === "pending"
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : "bg-gray-500/20 text-gray-300"
                            }`}
                          >
                            {r.paymentStatus}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-medium">
                          {formatCurrency(r.amountRON)}
                        </td>
                      </tr>
                    ))}
                    {registrations.length === 0 && (
                      <tr>
                        <td
                          colSpan={6}
                          className="px-4 py-8 text-center text-gray-400"
                        >
                          Nu există participanți înscriși
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
