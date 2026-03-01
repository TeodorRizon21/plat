import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY nu este setat in .env");
}

export const stripe = new Stripe(secretKey, {
  apiVersion: "2024-11-20",
});
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}

export const stripe = new Stripe(secretKey, {
  apiVersion: "2024-11-20",
});

