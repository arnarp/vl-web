import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
const { Router, browserHistory } = require('react-router');
import { syncHistoryWithStore } from 'react-router-redux';
const { ReduxAsyncConnect } = require('redux-connect');
import 'isomorphic-fetch';
import { setStylesTarget } from 'typestyle';
import { routes } from 'routes';
import { configureStore } from 'store';

const store = configureStore(
  browserHistory,
  window.__INITIAL_STATE__
);
const history = syncHistoryWithStore(browserHistory, store);
const connectedCmp = (props) => <ReduxAsyncConnect {...props} />;

ReactDOM.render(
  <Provider store={store} key='provider'>
    <Router
      history={history}
      render={connectedCmp}
      >
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
const stylesTrgt = document.getElementById('css-target');
if (stylesTrgt && stylesTrgt.textContent !== null) {
  setStylesTarget(stylesTrgt as any);
}
