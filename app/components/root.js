import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar.js';
import Team from './Team.js';
import SingleTeam from './SingleTeam.js';

const Root = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <h1 className='superhero-subheader'>
          Welcome to a world of super heroes!!
        </h1>
        <Switch>
          <Route exact path='/' component={Team} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/team/:id' component={SingleTeam} />
          <Redirect to='/' component={Team} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
