import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import components
import Home from './Home';
import Artist from './Artist';
import Album from './Album';
import Search from './Search';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/artist/:id" extec component={Artist} />
      <Route path="/album/:id" component={Album} />
      <Route path="/search/:query" component={Search} />
    </Switch>
  </BrowserRouter>
)