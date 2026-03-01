import bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_SALT_ROUNDS || 12);

export async function hashPassword(password: string) {
  return bcrypt.hash(password, rounds);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}





