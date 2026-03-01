import { NextResponse } from "next/server";

// Baza de date dezactivată temporar – evenimente inexistente
const COOKIE_PREFIX = "event_access_";

export async function POST(
  _req: Request,
  { params }: { params: { id: string } },
) {
  return NextResponse.json(
    { error: "Evenimentul nu exista sau înscrierile sunt dezactivate temporar" },
    { status: 404 },
  );
}

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  return NextResponse.json({ authorized: false });
}
