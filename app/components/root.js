import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar.js';
import Team from './Team.js';

const Root = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <h1>Welcome to a world of super heroes!!</h1>
        <hr />
        <Switch>
          <Route exact path='/' component={Team} />
          <Route exact path='/team' component={Team} />
          <Redirect to='/' component={Team} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
