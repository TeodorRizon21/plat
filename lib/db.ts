import { MongoClient, Db, Collection } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getDb() {
  if (cachedDb && cachedClient) return cachedDb;

  const client = new MongoClient(uri);
  await client.connect();

  cachedClient = client;
  cachedDb = client.db();
  return cachedDb;
}

export async function getCollection<T = unknown>(name: string): Promise<Collection<T>> {
  const db = await getDb();
  return db.collection<T>(name);
}

