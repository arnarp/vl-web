import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Shell } from './app/shell';
import { Home } from './app/home';
import { About } from './app/about';
import { VeislurRoute } from 'app/veislur';

export const routes = (
  <Route path='/' component={Shell}>
    <IndexRoute component={Home} />
    { VeislurRoute }
    <Route path='about' component={About} />
  </Route>
);
