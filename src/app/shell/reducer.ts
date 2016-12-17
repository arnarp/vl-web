import { IShellState } from './state';
import { IShellAction } from './actions';

const initialState: IShellState = {
  isMenuToggled: false,
  hasMenuBeenToggled: false,
};

export function shellReducer(state = initialState, action: IShellAction) {
  switch (action.type) {
    case 'shell/TOGGLE_MENU':
      return {
        isMenuToggled: !state.isMenuToggled,
        hasMenuBeenToggled: true,
      };
    case '@@router/LOCATION_CHANGE':
      return state.isMenuToggled ? {...state, isMenuToggled: false} : state;
    default:
      return state;
  }
}
