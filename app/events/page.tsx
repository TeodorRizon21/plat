"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type EventItem = {
  _id: string;
  title: string;
  description?: string;
  date?: string;
  priceRON: number;
};

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setEvents(data || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-semibold">Evenimente</h1>
      {error && (
        <div className="rounded border border-red-500 bg-red-900/30 p-3 text-red-200">
          {error}
        </div>
      )}
      {loading ? (
        <p>Se incarca...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {events.map((ev) => (
            <div
              key={ev._id}
              className="rounded border border-white/10 bg-white/5 p-4"
            >
              <h2 className="text-xl font-semibold">{ev.title}</h2>
              <p className="text-sm text-gray-300">{ev.description}</p>
              <p className="text-sm text-gray-300">
                {ev.date ? new Date(ev.date).toLocaleString() : "Data TBA"}
              </p>
              <p className="text-sm text-gray-300">Pret: {ev.priceRON} RON</p>
              <Link
                href={`/events/${ev._id}`}
                className="mt-2 inline-block rounded bg-white text-black px-3 py-1 text-sm font-semibold"
              >
                Acceseaza
              </Link>
            </div>
          ))}
          {events.length === 0 && (
            <p className="text-sm text-gray-300">Nu exista evenimente.</p>
          )}
        </div>
      )}
    </main>
  );
}





