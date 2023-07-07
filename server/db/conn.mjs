import { MongoClient } from 'mongodb';


const connectionString = process.env.MONGODB_CONNECTION_STRING || "";

const client = new MongoClient(connectionString);

let connection;
try {
  connection = await client.connect();
} catch(e) {
  console.error(e);
}

const db = connection.db(process.env.MONGODB_DATABASE_NAME);

export default db;