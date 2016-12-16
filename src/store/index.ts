import { IShellState } from 'app/shell/state';

export interface IStore {
  shell: IShellState;
};

export { configureStore } from './configureStore';
export { rootReducer } from './rootReducer';
export { IUnknownAction } from './IUnknownAction';
