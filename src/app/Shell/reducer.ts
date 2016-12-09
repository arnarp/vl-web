import IShellState from './state';
import IShellAction from './actions';

const initialState: IShellState = {
  isMenuToggled: false,
  hasMenuBeenToggled: false,
};

export default function shellReducer(state = initialState, action: IShellAction) {
  switch (action.type) {
    case 'shell/TOGGLE_MENU':
      return {
        isMenuToggled: !state.isMenuToggled,
        hasMenuBeenToggled: true,
      };
    default:
      return state;
  }
}
