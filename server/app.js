import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import "./common/environments-and-constants.mjs";

const allowedOrigins = ['http://localhost:3999'];

import indexRouter from './routes/index.mjs';
import usersRouter from './routes/users.mjs';
import mediaFilesRouter from './routes/mediaFiles.mjs';
import pointsOfInterestRouter from "./routes/pointsOfInterest.mjs";
import experiencesRouter from "./routes/experiences.mjs";
import tripsRouter from "./routes/trips.mjs";
import memoriesRouter from "./routes/memories.mjs";

const app = express();

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// view engine setup
app.use(cors(corsOptions))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/media-files/', mediaFilesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
