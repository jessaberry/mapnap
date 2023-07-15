import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGODB_CONNECTION_STRING || "";

const client = new MongoClient(connectionString);

let connection;
try {
  connection = await client.connect();
  console.log("Connected to MongoDB at " + connectionString);
} catch (e) {
  console.error(e);
}

const db = connection.db(process.env.MONGODB_DATABASE_NAME);
console.log("Database " + process.env.MONGODB_DATABASE_NAME);

export default db;
