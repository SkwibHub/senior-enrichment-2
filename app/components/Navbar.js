import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div id='navbar'>
      <Link to='/team'>TEAMS</Link>
      <span>
        <h1>SUPER HEROES</h1>
      </span>
    </div>
  );
};

export default Navbar;
