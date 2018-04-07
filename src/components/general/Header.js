import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header () {
  return (
    <header className="header-app">
      <div className="navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand logo">Northware Music</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;