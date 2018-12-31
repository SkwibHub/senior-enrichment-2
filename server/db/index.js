'use strict';

const db = require('./database');

const Team = require('./Team.js');
const Hero = require('./Hero.js');
const Universe = require('./Universe.js');

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)

Hero.belongsTo(Team);
Hero.belongsTo(Universe);
Team.hasMany(Hero);
Universe.hasMany(Hero);

console.log('Set associations');

module.exports = {
  // Include your models in this exports object as well!
  db,
  Team,
  Hero,
  Universe
};
