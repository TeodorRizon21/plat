// Prisma models are defined in prisma/schema.prisma
export type EventStatus = "draft" | "published" | "archived";

export interface EventDoc {
  _id?: string;
  title: string;
  description?: string;
  date?: string; // ISO string
  priceRon: number; // in bani (x100)
  paymentDeadline?: string; // ISO string
  passwordHash: string;
  status: EventStatus;
  createdAt: string;
  updatedAt: string;
}

export type PaymentStatus = "pending" | "paid" | "canceled";

export interface RegistrationDoc {
  _id?: string;
  eventId: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  amountRon: number; // in bani
  paymentStatus: PaymentStatus;
  stripeSessionId?: string;
  stripePaymentIntentId?: string;
  createdAt: string;
  updatedAt: string;
}

