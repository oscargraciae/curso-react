import React from 'react';
import { Link } from 'react-router-dom';

import api from '../../config/api';

import './Header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    }
  };


  render() {
    return (
      <header className="header-app">
        <div className="navbar">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand logo">Northware Music</Link>

            {/* <form className="navbar-form navbar-left nav-search-form ng-pristine ng-valid" onSubmit={this.onSubmit} >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Buscar artista"
                  className="navbar-input"
                  value={this.state.query}
                  onChange={this.onChange}
                  name="query"
                />
              </div>
            </form> */}
          </div>
        </div>
      </header>
    )
  }
}

export default Header;