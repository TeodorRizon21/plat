import { NextResponse } from "next/server";

// Baza de date și înscrieri dezactivate temporar
export async function POST(
  _req: Request,
  { params }: { params: { id: string } },
) {
  return NextResponse.json(
    {
      error:
        "Înscrierile sunt dezactivate temporar. Baza de date nu este folosită momentan.",
    },
    { status: 503 },
  );
}
