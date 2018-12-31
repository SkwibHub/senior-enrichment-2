const db = require('./server/db/database.js');
const { Hero, Team, Universe } = require('./server/db/associations.js');

const { green, red } = require('chalk');

db.sync({ force: true })

  // seed your database here!
  .then(() => {
    return Promise.all([
      Team.create({
        teamName: 'Avengers',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        universeName: 'Marvel'
      }),
      Team.create({
        teamName: 'X-Men',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        universeName: 'Marvel'
      }),
      Team.create({
        teamName: 'Fantastic Four',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        universeName: 'Marvel'
      }),
      Team.create({
        teamName: 'Unaffiliated',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        universeName: 'Marvel'
      }),
      Team.create({
        teamName: 'Justice League',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        universeName: 'DC'
      }),
      Team.create({
        teamName: 'Suicide Squad',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        universeName: 'DC'
      })
    ]);
  })
  .then(() => {
    return Promise.all([
      Hero.create({
        alias: 'Captain America',
        name: 'Steve Rogers',
        email: 'steverogers@avengers.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Avengers',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Iron Man',
        name: 'Tony Stark',
        email: 'tonystark@avengers.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Avengers',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Thor',
        name: 'Odinson',
        email: 'thor@avengers.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Avengers',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Spider-Man',
        name: 'Peter Parker',
        email: 'peterparker@avengers.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Avengers',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Cyclops',
        name: 'Scott Summers',
        email: 'scottsummers@xmen.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'X-Men',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Professor X',
        name: 'Charles Xavier',
        email: 'charlesxavier@xmen.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'X-Men',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Thing',
        name: 'Ben Grimm',
        email: 'thing@fantasticfour.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Fantastic Four',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Superman',
        name: 'Clark Kent',
        email: 'clarkkent@justiceleague.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Justice League',
        universeName: 'DC'
      }),
      Hero.create({
        alias: 'Batman',
        name: 'Bruce Wayne',
        email: 'brucewayne@justiceleague.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Justice League',
        universeName: 'DC'
      }),
      Hero.create({
        alias: 'Wonder Woman',
        name: 'Diana Prince',
        email: 'dianaprince@justiceleague.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Justice League',
        universeName: 'DC'
      }),
      Hero.create({
        alias: 'Harley Quinn',
        name: 'Harley Quinn',
        email: 'harleyquinn@suicidesquad.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Suicide Squad',
        universeName: 'DC'
      }),
      Hero.create({
        alias: 'Deadshot',
        name: 'Deadshot',
        email: 'deadshot@suicidesquad.com',
        imageURL: 'defaulthero.jpg',
        teamURL: 'defaultteam.jpg',
        universeURL: 'defaultuniverse.jpg',
        teamName: 'Suicide Squad',
        universeName: 'DC'
      })
    ]);
  })
  .then(() => {
    return Promise.all([
      Universe.create({
        universeName: 'Marvel',
        universeURL: 'defaultuniverse.jpg'
      }),
      Universe.create({
        universeName: 'DC',
        universeURL: 'defaultuniverse.jpg'
      })
    ]);
  })
  .then(() => {
    console.log(green('SEED WITH HERO SPEED!'));
    db.close();
  })
  .catch(err => {
    console.log(red('ERROR! OH THANOS SNAP!'));
    console.log(err.stack);
    db.close();
  });
