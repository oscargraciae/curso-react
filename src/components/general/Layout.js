import React from 'react';

import Header from './Header';

import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="wrapper">
        { children }
      </div>
    </div>
  )
}

export default Layout;