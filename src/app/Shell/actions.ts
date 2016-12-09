import IUnkownAction from '../../store/IUnknownAction';

export interface IToggleMenuAction {
  type: 'shell/TOGGLE_MENU';
}

type IShellAction = IUnkownAction | IToggleMenuAction;

export default IShellAction;
