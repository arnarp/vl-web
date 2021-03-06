import { expect } from 'chai';
import { shellReducer } from './reducer';
import { IShellState } from './state';
import { IToggleMenuAction } from './actions';

describe('Shell', () => {
  describe('Reducer', () => {
    it('toggles menu on shell/TOGGLE_MENU action', () => {
      let state: IShellState = {
        isMenuToggled: false, hasMenuBeenToggled: false,
      };
      let expectedState: IShellState = {
        isMenuToggled: true, hasMenuBeenToggled: true,
      };
      const action: IToggleMenuAction = { type: 'shell/TOGGLE_MENU' };
      expect(shellReducer(state, action)).to.be.eql(expectedState);
    });

    it('return same state on unkown action', () => {
      let state: IShellState = {
        isMenuToggled: false, hasMenuBeenToggled: false,
      };
      expect(shellReducer(state, { type: 'unkownAction' })).to.equal(state);
    });

    it('hides menu on @@router/LOCATION_CHANGE action', () => {
      let state: IShellState = {
        isMenuToggled: true, hasMenuBeenToggled: false,
      };
      let expectedState: IShellState = {
        isMenuToggled: false, hasMenuBeenToggled: false,
      };
      expect(shellReducer(state, { type: '@@router/LOCATION_CHANGE'})).to.be.eql(expectedState);
    });

    it('returns same state on @@router/LOCATION_CHANGE action if menu is hidden', () => {
      let state: IShellState = {
        isMenuToggled: false, hasMenuBeenToggled: false,
      };
      expect(shellReducer(state, { type: '@@router/LOCATION_CHANGE'})).to.equal(state);
    });
  });
});
