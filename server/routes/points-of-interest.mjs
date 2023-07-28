import "../common/environments-and-constants.mjs";
import express from "express";

const router = express.Router();

import db from "../db/conn.mjs";
import uploadMediaFile from "../helpers/s3MediaStorage.mjs";
import {ObjectId} from "mongodb";
import {pointsOfInterestCollectionName, tripsCollectionName} from "../common/environments-and-constants.mjs";

import initialPointOfInterestTypes from "../data/poitype.json" assert {type: "json"};
import initialPointsOfInterest from "../data/poi.json" assert {type: "json"};


router.get("/reset-all/", async (req, res) => {
  try {
    const collection = db.collection(pointsOfInterestCollectionName);
    console.log(initialPointsOfInterest);
    await collection.deleteMany({})
    let result = await collection.insertMany(initialPointsOfInterest);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "failed to reset"});
  }
});

router.get("/", async (req, res) => {
        let collection = await db.collection(pointsOfInterestCollectionName);
        let results = await collection
            .find({})
            .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
            .toArray();

        res.send(results).status(200);
    });

router.put(
    "/",
    uploadMediaFile.single(pointsOfInterestCollectionName),
    (req, res, next) => {
        console.log(pointsOfInterestCollectionName);
        let data = {};
        if (req.file) {
            data.mediaFile = req.file.location;
        }
    }
);

router.get("/:id", async (req, res) => {
    let collection = await db.collection(pointsOfInterestCollectionName);
    let query = {_id: ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    let collection = await db.collection(pointsOfInterestCollectionName);
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

router.patch("/comment/:id", async (req, res) => {
    const query = {_id: ObjectId(req.params.id)};
    const updates = {
        $push: {tags: req.body},
    };

    let collection = await db.collection(pointsOfInterestCollectionName);
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
});

router.delete("/ :id", async (req, res) => {
    const query = {_id: ObjectId(req.params.id)};

    const collection = db.collection(pointsOfInterestCollectionName);
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
});

router.delete("/delete-all/", async (req, res) => {
  try {
    const collection = db.collection(pointsOfInterestCollectionName);
    await collection.deleteMany({});
    res.status(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "failed to delete"});
  }
});


export default router;
