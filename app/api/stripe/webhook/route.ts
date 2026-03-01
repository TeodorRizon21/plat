import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: "Semnatura lipsa" }, { status: 400 });
  }

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${(err as Error).message}` },
      { status: 400 },
    );
  }

  // Baza de date dezactivată temporar – nu actualizăm înregistrări
  if (event.type === "checkout.session.completed") {
    // skip prisma update
  }

  return NextResponse.json({ received: true });
}

