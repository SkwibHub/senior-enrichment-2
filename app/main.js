import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import store from './store';
import { getMe } from './reducers/userReducer.js';

import Team from './components/Team.js';
import SingleTeam from './components/SingleTeam.js';
import Hero from './components/Hero.js';
import SingleHero from './components/SingleHero.js';
import Universe from './components/Universe.js';
import SingleUniverse from './components/SingleUniverse.js';
import LoginPage from './components/LoginPage.js';

const Main = withRouter(
  class extends Component {
    componentDidMount() {
      store.dispatch(getMe()).then(() => {
        this.props.history.push('/hero');
      });
    }

    render() {
      return (
        <Switch>
          <Route exact path='/team' component={Team} />
          <Route exact path='/team/:id' component={SingleTeam} />
          <Route exact path='/hero' component={Hero} />
          <Route exact path='/hero/:id' component={SingleHero} />
          <Route exact path='/universe' component={Universe} />
          <Route exact path='/universe/:id' component={SingleUniverse} />
          <Route exact path='/' component={LoginPage} />
        </Switch>
      );
    }
  }
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('main')
);
