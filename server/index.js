'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const session = require('express-session');
const passport = require('passport');
const { User } = require('./db/associations.js');

const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// Session middleware
app.use(
  session({
    secret: 'SUPERHEROES',
    resave: false,
    saveUninitialized: false
  })
);

// consumes 'req.session' so that passport can know what's on the session
app.use(passport.initialize());

// this will invoke our registered 'deserializeUser' method
// and attempt to put our user on 'req.user'
app.use(passport.session());

// after we find or create a user, we 'serialize' our user on the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// If we've serialized the user on our session with an id, we look it up here
// and attach it as 'req.user'.
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// authentication router
app.use('/auth', require('./auth'));

app.use('/api/hero', require('./api/heroRoutes.js'));
app.use('/api/team', require('./api/teamRoutes.js'));
app.use('/api/universe', require('./api/universeRoutes.js'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
