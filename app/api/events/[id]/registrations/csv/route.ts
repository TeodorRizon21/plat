import { NextResponse } from "next/server";
import { assertAdmin } from "@/lib/auth";
import { toCsv } from "@/lib/csv";

// Baza de date dezactivată temporar – CSV gol
const headers = [
  "Nume",
  "Prenume",
  "Telefon",
  "Email",
  "Adresa",
  "Status plata",
  "Suma RON",
  "Creat la",
];

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  try {
    assertAdmin();
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 401 });
  }
  const csv = toCsv(headers, []);
  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="registrations-${params.id}.csv"`,
    },
  });
}
