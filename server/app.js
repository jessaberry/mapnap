import createError from "http-errors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import "./common/environments-and-constants.mjs";

const allowedOrigins = ["http://localhost:3999", "https://mapnap.onrender.com", "https://mapnap.onrender.com/"];

import indexRouter from "./routes/index.mjs";
import mediaFilesRouter from "./routes/media-files.mjs";
import pointsOfInterestRouter from "./routes/points-of-interest.mjs";
import experiencesRouter from "./routes/experiences.mjs";
import tripsRouter from "./routes/trips.mjs";
import memoriesRouter from "./routes/memories.mjs";
import s3HelperRouter from "./routes/s3-helper.mjs";

import {
  experiencesCollectionName,
  mediaFilesCollectionName,
  memoriesCollectionName,
  pointsOfInterestCollectionName,
  s3HelperName,
  tripsCollectionName,
} from "./common/environments-and-constants.mjs";

const app = express();

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// view engine setup
app.use(cors(corsOptions));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use(`/${mediaFilesCollectionName}/`, mediaFilesRouter);
app.use(`/${s3HelperName}/`, s3HelperRouter);
app.use(`/${tripsCollectionName}/`, tripsRouter);
app.use(`/${pointsOfInterestCollectionName}/`, pointsOfInterestRouter);
app.use(`/${experiencesCollectionName}/`, experiencesRouter);
app.use(`/${memoriesCollectionName}/`, memoriesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error pages
  res.status(err.status || 500);
  res.render("error");
});

export default app;
