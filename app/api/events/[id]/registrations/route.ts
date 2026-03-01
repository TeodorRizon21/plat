import { NextResponse } from "next/server";
import { assertAdmin } from "@/lib/auth";

// Baza de date dezactivată temporar – returnăm listă goală
export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  try {
    assertAdmin();
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 401 });
  }
  return NextResponse.json({ items: [], totalPaid: 0 });
}
