import crypto from "crypto";

const secret = process.env.EVENT_ACCESS_TOKEN_SECRET;

if (!secret) {
  throw new Error("EVENT_ACCESS_TOKEN_SECRET nu este setat in .env");
}

type Payload = {
  eventId: string;
  exp: number;
};

function base64url(input: Buffer) {
  return input
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function signAccessToken(eventId: string, ttlMinutes = 60) {
  const payload: Payload = {
    eventId,
    exp: Math.floor(Date.now() / 1000) + ttlMinutes * 60,
  };
  const payloadStr = JSON.stringify(payload);
  const payloadB64 = base64url(Buffer.from(payloadStr));

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payloadB64)
    .digest();
  const sigB64 = base64url(signature);

  return `${payloadB64}.${sigB64}`;
}

export function verifyAccessToken(token: string): Payload | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadB64, sig] = parts;

  const expectedSig = base64url(
    crypto.createHmac("sha256", secret).update(payloadB64).digest(),
  );
  if (sig !== expectedSig) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(payloadB64, "base64").toString("utf8"),
    ) as Payload;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}





