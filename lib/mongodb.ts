import { MongoClient, Db, Collection } from "mongodb";

function getUri(): string {
  const uri = process.env.MONGODB_URI || process.env.DATABASE_URL;
  if (!uri) {
    throw new Error("MONGODB_URI/DATABASE_URL nu este setat in .env");
  }
  return uri;
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getDb(): Promise<Db> {
  if (cachedDb && cachedClient) {
    return cachedDb;
  }

  const uri = getUri();
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  cachedClient = client;
  cachedDb = db;
  return db;
}

export async function getCollection<T = unknown>(
  name: string,
): Promise<Collection<T>> {
  const db = await getDb();
  return db.collection<T>(name);
}

