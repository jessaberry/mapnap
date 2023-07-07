import "../common/environments-and-constants.mjs";

import express from 'express';
const router = express.Router();

/* GET home page. */
router.get(`/`, function(req, res, next) {
  res.render('index', { title: 'Express' });
});


export default router;