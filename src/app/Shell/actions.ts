import { IUnknownAction } from 'store';

export interface IToggleMenuAction {
  type: 'shell/TOGGLE_MENU';
}

export type IShellAction = IUnknownAction | IToggleMenuAction;
