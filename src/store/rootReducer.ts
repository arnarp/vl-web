import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { shellReducer } from 'app/shell/reducer';
import { IStore } from '.';

const { reducer } = require('redux-connect');

export const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
  shell: shellReducer,
});
