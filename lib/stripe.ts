import Stripe from "stripe";

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY || "sk_placeholder";
  return new Stripe(key, {
    apiVersion: "2026-02-25.clover" as any,
  });
}
