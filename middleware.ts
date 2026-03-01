import { NextResponse } from "next/server";

// Autentificare Clerk dezactivată temporar – toate rutele sunt publice
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/image|_next/static|favicon.ico).*)"],
};
