import express from 'express';
import { usersCollectionName } from "../common/environments-and-constants.mjs";
const router = express.Router();


/* GET users listing. */
router.get(`/${usersCollectionName}`, function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
