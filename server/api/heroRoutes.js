'use strict';

const router = require('express').Router();
const { Hero, Team, Universe } = require('../db/associations.js');

// Your routes go here!

//GET: Retrieve all hero listings
router.get('/', async (req, res) => {
  try {
    const allHeroes = await Hero.findAll();
    console.log('Getting hero data from DB');
    res.json(allHeroes);
  } catch (err) {
    console.error(err);
  }
});

//GET: Retrieve one hero listing w/ team & universe
router.get('/:id', async (req, res) => {
  try {
    const thisHero = await Hero.findOne({
      where: {
        id: parseInt(req.params.id)
      }
    });

    const thisTeam = await Team.findOne({
      where: {
        teamName: thisHero.teamName
      }
    });

    const thisUniverse = await Universe.findOne({
      where: {
        universeName: thisHero.universeName
      }
    });

    const sendHero = {
      TeamKey: thisTeam,
      HeroKey: thisHero,
      universeKey: thisUniverse
    };

    console.log(JSON.stringify(thisHero.teamName));
    console.log(JSON.stringify(sendHero));

    res.json(sendHero);
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
