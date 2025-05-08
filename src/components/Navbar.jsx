//--------------- Module 7 - Lab Work Ex4 ----------------------

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  
   return (
    <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/">Login</Link></li>
          <li className="navbar-item"><Link to="/dash">Dashboard</Link></li>
          <li className="navbar-item"><Link to="/dash/exercise1">Exercise 1</Link></li>
          <li className="navbar-item"><Link to="/dash/exercise2">Exercise 2</Link></li>
          <li className="navbar-item"><Link to="/dash/exercise3">Exercise 3</Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;
