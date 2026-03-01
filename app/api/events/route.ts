import { NextResponse } from "next/server";
import { assertAdmin } from "@/lib/auth";

// Baza de date dezactivată temporar – returnăm listă goală / mock la POST
export async function GET() {
  return NextResponse.json([]);
}

export async function POST(req: Request) {
  try {
    assertAdmin();
  } catch (_err) {
    return NextResponse.json({ error: "Neautorizat" }, { status: 401 });
  }

  const body = await req.json();
  const { title, description, date, priceRON, paymentDeadline } = body ?? {};

  if (!title || priceRON === undefined) {
    return NextResponse.json(
      { error: "title și priceRON sunt obligatorii" },
      { status: 400 },
    );
  }

  // Fără persistență – returnăm un obiect mock
  const mockId = "mock-" + Date.now();
  return NextResponse.json(
    {
      id: mockId,
      _id: mockId,
      title,
      description: description ?? null,
      date: date ?? null,
      priceRON: Number(priceRON),
      priceBani: Math.round(Number(priceRON) * 100),
      paymentDeadline: paymentDeadline ?? null,
      status: "active",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    { status: 201 },
  );
}
