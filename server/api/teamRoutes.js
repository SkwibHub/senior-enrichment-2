'use strict';

const router = require('express').Router();
const { Hero, Team, Universe } = require('../db/associations.js');

// Your routes go here!

//GET: Retrieve all team listings
router.get('/', async (req, res) => {
  try {
    const allTeams = await Team.findAll();
    console.log('Getting team data from DB');
    res.json(allTeams);
  } catch (err) {
    console.error(err);
  }
});

//GET: Retrieve one team listings w/ heroes
router.get('/:id', async (req, res) => {
  try {
    console.log('Getting single team plus student data from DB');

    const thisTeam = await Team.findOne({
      where: {
        id: parseInt(req.params.id)
      }
    });

    const chosenHeroes = await Hero.findAll({
      where: {
        teamName: thisTeam.name
      },
      include: [Team]
    });

    const sendTeam = {
      teamKey: thisTeam,
      heroKey: chosenHeroes
    };

    res.json(sendTeam);
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
