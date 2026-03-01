import bcrypt from "bcryptjs";

const defaultRounds = Number(process.env.BCRYPT_SALT_ROUNDS || 12);

export async function hashPassword(plain: string) {
  return bcrypt.hash(plain, defaultRounds);
}

export async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash);
}

