import { IToggleMenuAction } from './actions';

export function createToggleMenuAction(): IToggleMenuAction {
  return {
    type: 'shell/TOGGLE_MENU',
  };
}
