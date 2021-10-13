/** @format */

import { connectToDatabase } from "../../components/mongo/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const city = req.query.cityName;
  await db.collection("cities").remove({});
  const result = await db.collection("cities").insertOne({ cityname: city });
  res.json(result);
}
