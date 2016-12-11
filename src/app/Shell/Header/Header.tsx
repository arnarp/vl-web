import * as React from 'react';
import { style } from 'typestyle';
import MenuButton from './MenuButton';
import { IToggleMenuAction } from '../actions';
import { createToggleMenuAction } from '../action.creators';
import { connect } from 'react-redux';
import IStore from '../../../store';
import Logo from './Logo';
import { VlLogoRed } from '../colors';

const leftStyle = style({
  width: '25%',
});
const centerStyle = style({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
});
const rightStyle = style({
  width: '25%',
});
const headerStyle = style({
  display: 'flex',
  height: '5.5rem',
});

const imgStyle = style({
  height: '5rem',
});

const phoneNumberStyle = style({
  fontSize: '3rem',
  fontFamily: 'Playfair Display',
  color: VlLogoRed,
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

class Header extends React.Component<IStateProps & IDispatchProps & IHeaderProps, any> {
  public render() {
    console.log('Header ' + this.props);
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

export default connect<IStateProps, IDispatchProps, IHeaderProps>(
  mapStateToProps, mapDispatchToProps)(Header);
