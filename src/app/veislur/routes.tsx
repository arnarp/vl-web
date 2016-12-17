import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { VeislurMain, VeislurMaster } from '.';
import { HladbordMain, HladbordMaster } from './hladbord';

export const VeislurRoute = (
  <Route path='veislur' component={VeislurMaster}>
      <IndexRoute component={VeislurMain} />
      <Route path='hladbord' component={HladbordMaster}>
        <IndexRoute component={HladbordMain} />
      </Route>
  </Route>
);
