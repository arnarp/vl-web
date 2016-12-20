import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { VeislurMain } from '.';
import { Steikarhladbord } from './steikarhladbord';

export const VeislurRoute = (
  <Route path='veislur'>
      <IndexRoute component={VeislurMain} />
      <Route path='steikarhladbord' component={Steikarhladbord} />
  </Route>
);
