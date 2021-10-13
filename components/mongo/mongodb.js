/** @format */

import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;
let dbName1 = process.env.MONGODB_DB_1;
let cachedClient = null;
let cachedDb = null;
let cachedDb1 = null;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName && !dbName1) {
  throw new Error(
    "Please define the MONGODB_DB environment variables inside .env.local"
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb && cachedDb1) {
    return {
      client: cachedClient,
      db: cachedDb,
      db1: cachedDb1,
    };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);
  const db1 = await client.db(dbName1);
  cachedClient = client;
  cachedDb = db;
  cachedDb1 = db1;
  return { client, db, db1 };
}
