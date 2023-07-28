import "../common/environments-and-constants.mjs";
import express from "express";

const router = express.Router();

import db from "../db/conn.mjs";
import {ObjectId} from "mongodb";
import {tripsCollectionName} from "../common/environments-and-constants.mjs";
import initialTrips from "../data/trip.json" assert {type: "json"};


router.get("/reset-all/", async (req, res) => {
    try {
        const collection = db.collection(tripsCollectionName);
        console.log(initialTrips);
        await collection.deleteMany({})
        let result = await collection.insertMany(initialTrips);
        res.send(result).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "failed to delete"});
    }
});


router.get("/get-all/", async (req, res) => {
    console.log("get trip");
    let collection = await db.collection(tripsCollectionName);
    let results = await collection
        .find({})
        .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
        .toArray();
    console.log("results: " + results);
    res.send(results).status(200);
});

router.get("/get-other-public-trips/:userId", async (req, res) => {
    console.log("get other public trips");
    const userId = req.params.userId;
    const qPublicTrips = { IsPublic: true};
    const qNotCurrentUser = {UserId: { $ne : userId }}
    const query = { $and: [
        qPublicTrips,
        qNotCurrentUser
    ]}
    let collection = await db.collection(tripsCollectionName);
    let results = await collection
        .find(query)
        .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
        .toArray();
    console.log("results: " + results);
    res.send(results).status(200);
});
router.get("/by-trip-id/:tripId", async (req, res) => {
    const tripId = req.params.tripId;
    const query = {_id: `${new ObjectId(tripId)}`};
    try {
        let collection = await db.collection(tripsCollectionName);
        let results = await collection
            .find(query)
            .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
            .toArray();
        res.send(results).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "failed to search by trip id"});
    }
});

router.get("/by-user-id/", async (req, res) => {
    const userId = req.body.UserId;
    const query = {UserId: userId};
    console.log(query);
    try {
        let collection = await db.collection(tripsCollectionName);
        let results = await collection
            .find(query)
            .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
            .toArray();
        res.send(results).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "failed to search by user id"});
    }
});

router.get("/by-country-code/:countryCode", async (req, res) => {
    const countryCode = req.params.countryCode
    const query = {Country: countryCode};
    console.log(query);
    try {
        let collection = await db.collection(tripsCollectionName);
        let results = await collection
            .find(query)
            .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
            .toArray();
        res.send(results).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "failed to search by country"});
    }
});

router.get("/by-keyword/", async (req, res) => {
    const searchTerm = req.query.search.toLowerCase();
    const regexSearchTerm = new RegExp(searchTerm, "i");
    const query = {Description: regexSearchTerm};
    console.log(query);
    let collection = await db.collection(tripsCollectionName);
    let results = await collection
        .find(query)
        .limit(Number(process.env.MONGODB_DEFAULT_MAX_RESULT))
        .toArray();
    console.log("results: " + results);
    res.send(results).status(200);
});


router.put("/", async (req, res) => {
    let collection = await db.collection(tripsCollectionName);
    let data = req.body;
    if (!data) {
        res.send("Invalid data").status(404);
    }
    const query = {_id: data._id};
    console.log(query);
    const options = {upsert: true};
    let result = await collection.updateOne(query, {$set: data}, options);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


router.post("/", async (req, res) => {
    let collection = await db.collection(tripsCollectionName);
    let newDocument = req.body;
    newDocument.createdAt = new Date();
    newDocument.updatedAt = new Date();
    newDocument.isDeleted = false;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(201);
});

router.patch(`/:id`, async (req, res) => {
    const query = {_id: new ObjectId(req.params.id)};
    const updates = {
        $push: {tags: req.body},
    };
    try {

        let collection = await db.collection(tripsCollectionName);
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);

    } catch
        (error) {
        console.error(error);
        res.status(500).json({message: "failed to upsert"});
    }
})
;

router.delete("/:id/", async (req, res) => {
    try {
        const id = req.params.id;
        const collection = db.collection(tripsCollectionName);
        await collection.deleteOne({TripId: id});
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "failed to delete"});
    }
});

router.delete("/delete-all/", async (req, res) => {
    try {
        const collection = db.collection(tripsCollectionName);
        await collection.deleteMany({});
        res.status(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "failed to delete"});
    }
});


export default router;
