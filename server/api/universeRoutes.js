'use strict';

const router = require('express').Router();
const { Hero, Team, Universe } = require('../db/associations.js');

// Your routes go here!

//GET: Retrieve all universe listings
router.get('/', async (req, res) => {
  try {
    const allUniverses = await Universe.findAll();
    console.log('Getting Universe data from DB');
    res.json(allUniverses);
  } catch (err) {
    console.error(err);
  }
});

//GET: Retrieve one universe listing w/ heroes & teams
router.get('/:id', async (req, res) => {
  try {
    console.log('Getting single universe plus hero data from DB');

    const thisUniverse = await Universe.findOne({
      where: {
        id: parseInt(req.params.id)
      }
    });

    const chosenHeroes = await Hero.findAll({
      where: {
        universeName: thisUniverse.universeName
      },
      include: [Universe]
    });

    const chosenTeams = await Team.findAll({
      where: {
        universeName: thisUniverse.universeName
      },
      include: [Universe]
    });

    const sendUniverse = {
      universeKey: thisUniverse,
      heroKey: chosenHeroes,
      teamKey: chosenTeams
    };

    res.json(sendUniverse);
  } catch (err) {
    console.error(err);
  }
});

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
