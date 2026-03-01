import { NextResponse } from "next/server";
import { assertAdmin } from "@/lib/auth";

// Baza de date dezactivată temporar – nu citim/actualizăm evenimente
function notFound() {
  return NextResponse.json({ error: "Evenimentul nu exista" }, { status: 404 });
}

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  return notFound();
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    assertAdmin();
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 401 });
  }
  return notFound();
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } },
) {
  try {
    assertAdmin();
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}
