import "../common/environments-and-constants.mjs";
import express from "express";

const router = express.Router();

import db from "../db/conn.mjs";
import {ObjectId} from "mongodb";
import {memoriesCollectionName} from "../common/environments-and-constants.mjs";
import initialMemories from "../data/memory.json"  assert { type: "json" };

router.get("/reset-all/", async (req, res) => {
    try {
        const collection = db.collection(memoriesCollectionName);
        console.log(initialMemories);
        await collection.deleteMany({});
        let result = await collection.insertMany(initialMemories);
        res.send(result).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to delete" });
    }
});

router.get("/get-all/", async (req, res) => {
    console.log("get trip");
    let collection = await db.collection(memoriesCollectionName);
    let results = await collection
        .find({})
        .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
        .toArray();
    console.log("results: " + results);
    res.send(results).status(200);
});

router.get("/get-other-public-memories/:userId", async (req, res) => {
    console.log("get other public MEMORIES");
    const userId = req.params.userId;
    const qPublicMemories = { isPublic: true };
    const qNotCurrentUser = { userId: { $ne: userId } };
    const query = { $and: [qPublicMemories, qNotCurrentUser] };
    let collection = await db.collection(memoriesCollectionName);
    let results = await collection
        .find(query)
        .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
        .toArray();
    console.log("results: " + results);
    res.send(results).status(200);
});
router.get("/by-experience-id/:experienceId", async (req, res) => {
    const experienceId = req.params.experienceId;
    const query = { experienceId: experienceId };
    try {
        let collection = await db.collection(memoriesCollectionName);
        let results = await collection
            .find(query)
            .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
            .toArray();
        res.send(results).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to search by experience id" });
    }
});

router.get("/by-user-id/:userId", async (req, res) => {
    const userId = req.params.userId;
    const query = { userId: userId };
    try {
        let collection = await db.collection(memoriesCollectionName);
        let results = await collection
            .find(query)
            .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
            .toArray();
        console.log(results);
        res.send(results).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to search by user id" });
    }
});

router.get("/by-trip-id/:TripId", async (req, res) => {
    const tripId = req.params.TripId;
    const query = { tripId: tripId };
    console.log(query);
    try {
        let collection = await db.collection(memoriesCollectionName);
        let results = await collection
            .find(query)
            .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
            .toArray();
        res.send(results).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to search by trip id" });
    }
});

router.put("/", async (req, res) => {
    let collection = await db.collection(memoriesCollectionName);
    let data = req.body;
    if (!data) {
        res.send("Invalid data").status(404);
    }
    const query = { _id: data._id };
    console.log(query);
    const options = { upsert: true };
    let result = await collection.updateOne(query, { $set: data }, options);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    let collection = await db.collection(memoriesCollectionName);
    let newDocument = req.body;
    newDocument.createdAt = new Date();
    newDocument.updatedAt = new Date();
    newDocument.isDeleted = false;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(201);
});

router.patch(`/by-memory-id/:id`, async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
        $push: { tags: req.body },
    };
    try {
        let collection = await db.collection(memoriesCollectionName);
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to upsert" });
    }
});

router.delete("/delete-by-memory-id/:id/", async (req, res) => {
    try {
        const id = req.params.id;
        const collection = db.collection(memoriesCollectionName);
        await collection.deleteOne({ TripId: id });
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to delete" });
    }
});

router.delete("/delete-all/", async (req, res) => {
    try {
        const collection = db.collection(memoriesCollectionName);
        await collection.deleteMany({});
        res.status(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "failed to delete" });
    }
});

export default router;
