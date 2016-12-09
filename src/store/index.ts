import ICounterState from '../app/counter/state';
import IStarsState from '../app/stars/state';
import IShellState from '../app/shell/state';

interface IStore {
  counter: ICounterState;
  stars: IStarsState;
  shell: IShellState;
};

export default IStore;
