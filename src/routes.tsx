import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Shell } from './app/shell';
import { Home } from './app/home';
import { About } from './app/about';
import { Veislur } from 'app/veislur';

export const routes = (
  <Route path='/' component={Shell}>
    <IndexRoute component={Home} />
    <Route path='veislur' component={Veislur} />
    <Route path='about' component={About} />
  </Route>
);
