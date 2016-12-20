import * as React from 'react';
import { connect } from 'react-redux';
import { style, media } from 'typestyle';
import { IStore } from 'store';
import { VlLogoRed } from 'app/colors';
import { IToggleMenuAction } from './actions';
import { createToggleMenuAction } from './action-creators';
import { MenuButton } from './MenuButton';
import { Logo } from './Logo';

export const HEADER_HEIGHT = 5.5;

const leftStyle = style({
  width: '15%',
});
const centerStyle = style({
  width: '70%',
  display: 'flex',
  justifyContent: 'center',
}, media({minWidth: 0, maxWidth: 400}, {width: '85%'}));
const rightStyle = style({
  width: '15%',
}, media({minWidth: 0, maxWidth: 400}, {display: 'none'}));
const headerStyle = style({
  display: 'flex',
  height: `${HEADER_HEIGHT}rem`,
  width: '100%',
  padding: '0 1rem',
  position: 'fixed',
  background: 'white',
});
const imgStyle = style({
  height: '5rem',
});
const phoneNumberStyle = style({
  fontSize: '3rem',
  fontFamily: 'Playfair Display',
  color: VlLogoRed.toString(),
  fontWeight: 'lighter',
  display: 'flex',
  alignItems: 'flex-end',
});

interface IStateProps {
  isMenuToggled: boolean;
  hasMenuBeenToggled: boolean;
};
interface IDispatchProps {
  toggleMenu: Redux.ActionCreator<IToggleMenuAction>;
};
interface IHeaderProps { }

class HeaderBase extends React.Component<IStateProps & IDispatchProps & IHeaderProps, any> {
  public render() {
    return (
      <div className={headerStyle}>
        <div className={leftStyle}>
          <MenuButton
            isToggled={this.props.isMenuToggled}
            hasMenuBeenToggled={this.props.hasMenuBeenToggled}
            onClick={this.props.toggleMenu} />
        </div>
        <div className={centerStyle}>
          <Logo className={imgStyle} />
          <span className={phoneNumberStyle}>5551810</span>
        </div>
        <div className={rightStyle} />
      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    isMenuToggled: state.shell.isMenuToggled,
    hasMenuBeenToggled: state.shell.hasMenuBeenToggled,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenu: () => dispatch(createToggleMenuAction()),
});

export const Header = connect<IStateProps, IDispatchProps, IHeaderProps>(
  mapStateToProps, mapDispatchToProps)(HeaderBase);
