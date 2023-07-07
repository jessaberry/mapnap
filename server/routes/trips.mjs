import "../common/environments-and-constants.mjs";
import express from "express";

const router = express.Router();


import db from "../db/conn.mjs";
import uploadMediaFile from "../helpers/s3MediaStorage.mjs";
import { ObjectId } from "mongodb";
import { tripsCollectionName } from "../common/environments-and-constants.mjs";



router.get(`/${tripsCollectionName}`, async (req, res) => {
  let collection = await db.collection(tripsCollectionName);
  let results = await collection.find({})
    .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
    .toArray();

  res.send(results).status(200);
});

router.put(`/${tripsCollectionName}`, uploadMediaFile.single(tripsCollectionName), (req, res, next) => {
  console.log(tripsCollectionName);
  let data = {};
  if (req.file) {
    data.mediaFile = req.file.location;
  }
});

router.get(`/${tripsCollectionName}/:id`, async (req, res) => {
  let collection = await db.collection(tripsCollectionName);
  let query = { _id: ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post(`/${tripsCollectionName}`, async (req, res) => {
  let collection = await db.collection(tripsCollectionName);
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.patch(`/comment/:id`, async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  const updates = {
    $push: { tags: req.body }
  };

  let collection = await db.collection(tripsCollectionName);
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

router.delete(`/${tripsCollectionName}/:id`, async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };

  const collection = db.collection(tripsCollectionName);
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;