import { IUnknownAction } from 'store';

export interface IToggleMenuAction {
  type: 'shell/TOGGLE_MENU';
}

export interface ILocationChangeAction {
  type: '@@router/LOCATION_CHANGE';
}

export type IShellAction = IUnknownAction | IToggleMenuAction | ILocationChangeAction;
