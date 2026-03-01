// Autentificare Clerk și verificări de rol dezactivate temporar – funcțiile nu aruncă

type Role = "admin" | "user" | undefined;

export function getRoleFromMetadata(metadata: Record<string, unknown> | null) {
  const role = metadata?.["role"];
  if (role === "admin") return "admin" as Role;
  if (role === "user") return "user" as Role;
  return undefined;
}

export function assertAdmin() {
  // Dezactivat temporar – nu verificăm auth
}

export function getAuthUser() {
  return { userId: null, sessionClaims: null };
}

export async function requireUser() {
  return null;
}

export async function requireAdmin() {
  return null;
}
