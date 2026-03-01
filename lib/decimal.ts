import type { Prisma } from "@prisma/client";

export function decimalToNumber(value?: Prisma.Decimal | null): number {
  if (!value) return 0;
  return Number(value.toString());
}





