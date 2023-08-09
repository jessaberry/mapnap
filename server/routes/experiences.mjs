import express from "express";

const router = express.Router();

import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import { experiencesCollectionName } from "../common/environments-and-constants.mjs";
import initialExperience from "../data/experience.json" assert { type: "json" };

router.get("/reset-all/", async (req, res) => {
  const query = { ExperienceId: req.params.id };
  const collection = db.collection(experiencesCollectionName);
  await collection.deleteMany({});
  await collection.insertMany(initialExperience);
  res.status(204).end();
});

router.get("/", async (req, res) => {
  let collection = await db.collection(experiencesCollectionName);
  let results = await collection
    .find({})
    .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
    .toArray();

  res.send(results).status(200);
});

router.get("/by-trip-id/:TripId", async (req, res) => {
  const tripId = req.params.TripId;
  let collection = await db.collection(experiencesCollectionName);
  const query = { TripId: tripId };
  let results = await collection
    .find(query)
    .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
    .toArray();
  res.send(results).status(200);
});

router.get("/by-user-id/:UserId", async (req, res) => {
  const userId = req.params.UserId;
  let collection = await db.collection(experiencesCollectionName);
  const query = { UserId: userId };
  let results = await collection
    .find(query)
    .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
    .toArray();
  res.send(results).status(200);
});

router.put("/", async (req, res, next) => {
  console.log(experiencesRouteCollectionName);
  let data = {};
  if (req.file) {
    data.mediaFile = req.file.location;
  }
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection(experiencesCollectionName);
  let query = { _id: req.params.id };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post("/", async (req, res) => {
  let collection = await db.collection(experiencesCollectionName);
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.patch("/comment/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  const updates = {
    $push: { tags: req.body },
  };

  let collection = await db.collection(experiencesCollectionName);
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

router.delete("/:id", async (req, res) => {
  const query = { ExperienceId: req.params.id };
  const collection = db.collection(experiencesCollectionName);
  await collection.deleteOne(query);
  res.status(204).end();
});

export default router;
