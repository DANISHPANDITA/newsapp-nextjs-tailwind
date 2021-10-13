/** @format */

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "../../../components/mongo/mongodb";

export default async function auth(req, res) {
  const { client } = await connectToDatabase();
  return await NextAuth(req, res, {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        // clientId: process.env.GOOGLE_ID,
        // clientSecret: process.env.GOOGLE_SECRET,
        clientId: process.env.googleid,
        clientSecret: process.env.googlesecret,
      }),
      // ...add more providers here
    ],
    adapter: MongoDBAdapter({
      db: (await client).db("users"),
    }),
    // A database is optional, but required to persist accounts in a databa
  });
}
