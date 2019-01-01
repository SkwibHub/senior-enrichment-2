const db = require('./database');
const Sequelize = require('sequelize');

const Team = db.define('team', {
  teamName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  teamURL: {
    type: Sequelize.STRING,
    allowNull: false,
    imageURL: 'defaultteam.png'
  },
  universeURL: {
    type: Sequelize.STRING,
    allowNull: false,
    imageURL: 'defaultuniverse.jpg'
  },
  universeName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
});

module.exports = Team;
