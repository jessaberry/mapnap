import "../common/environments-and-constants.mjs";
import express from "express";

const router = express.Router();

import db from "../db/conn.mjs";
import uploadMediaFile from "../helpers/s3MediaStorage.mjs";
import { ObjectId } from "mongodb";
import { tripsCollectionName, usersCollectionName } from "../common/environments-and-constants.mjs";

/*

Saud3r@UBC
H0tP0t@AYC3
MrChari$ma
Parth10@CPSC455

 */

const defaultUsers = [
  {
    "_id": "64b0cf5469f87be6c3e64216",
    "EmailAddress": "thelyrist@live.ca",
    "FirstName": "Eric",
    "LastName": "Chau",
    "PasswordHash": "53b46392f853d991e5f23d733ff63431461c1e40a814a6e42d250690efa206040bc5c72b63afafa78d0150c59634a9f087f1ee2d1c197ef3f6a2692a18b6fd80",
    "Salt": "yfo4aW8DSWKLvnEw",
    "UserId": 1
  },
  {
    "_id": "64b0d52fd5f869f56f6cf1e0",
    "UserId": 2,
    "FirstName": "Jessa",
    "LastName": "Shi",
    "EmailAddress": "jessashi96@gmail.com",
    "Salt": "553FxoPMeyY68lSO",
    "PasswordHash": "5e57dc622f3097c2d01962c3c863b42c309eff9c0bcd85543348e9b1525f6533721fea5db9013adf987d0e36ccb8eed7d6f32aa60d44809c4063e721aeeb631d"
  },
  {
    "_id": "64b0d52fd5f869f56f6cf1e1",
    "UserId": 3,
    "FirstName": "Max",
    "LastName": "Zhong",
    "EmailAddress": "maxzhong02@gmail.com",
    "Salt": "0l4QDeG4oxyJ7VoL",
    "PasswordHash": "0170c379ada425e3868a175beac5abc43bf621374086a5168e9c715545ed50649abe9980d6da63bc1177cdaa97c96161006274db1afe2b3670d00f603b4a721a"
  },
  {
    "_id": "64b0d52fd5f869f56f6cf1e2",
    "UserId": 4,
    "FirstName": "Parth",
    "LastName": "Sehtiya",
    "EmailAddress": "parths@gmail.com",
    "Salt": "F4S9A9M62UcsW7x4",
    "PasswordHash": "a66b9555cd49a72954aa2498724139a75243cf722680c2224ca9b08417b0ccb121f2910972ac7146418e009269b83b8df294f3975569f694be670332bfb12826"
  }
];

console.log(defaultUsers);
defaultUsers.toString();

router.get("/reset/", async (req, res) => {
  let collection = await db.collection(usersCollectionName);
  await collection.deleteMany({});
  let result = await collection.insertMany(defaultUsers);
  res.send(result).status(200);
});


router.delete("/clear/", async (req, res) => {
  const query = {};

  const collection = await db.collection(usersCollectionName);
  let result = await collection.deleteMany(query);

  res.send(result).status(200);
});


router.get("/", async (req, res) => {
  let collection = await db.collection(usersCollectionName);
  let results = await collection
    .find({})
    .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
    .toArray();
  res.send(results).status(200);
});

router.put("/:id", async (req, res) => {
  let collection = await db.collection(usersCollectionName);
  let data = req.body;
  if (!data) {
    res.send("Invalid data").status(404);
  }
  const query = { _id: req.params.id };
  console.log(query);
  const options = { upsert: true };
  let result = await collection.updateOne(query, { $set: data }, options);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection(usersCollectionName);
  let query = { _id: req.params.id };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post("/", async (req, res) => {
  let collection = await db.collection(usersCollectionName);
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});


router.delete("/:id", async (req, res) => {
  const query = { _id: req.params.id };

  const collection = await db.collection(usersCollectionName);
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});




export default router;
