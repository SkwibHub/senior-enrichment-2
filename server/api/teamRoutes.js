'use strict';

const router = require('express').Router();
const { Hero, Team, Universe } = require('../db/index.js');

// Your routes go here!

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
