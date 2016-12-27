import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { style, classes, media } from 'typestyle';
import { flex, vertical } from 'csstips';
import { IStore } from 'store';
import { VlLogoGrey } from 'app/colors';
import { IToggleMenuAction } from './actions';
import { createToggleMenuAction } from './action-creators';
import { HEADER_HEIGHT_LG, HEADER_HEIGHT_SM } from './Header';

const overlayStyle = style({
  position: 'fixed',
  width: '100vw',
  overflow: 'hidden',
  zIndex: 99,
  backgroundColor: 'rgba(0,0,0,0.5)',
}, media({ minWidth: 0, maxWidth: 699 }, {
  top: `${HEADER_HEIGHT_SM}rem`,
  height: `calc(100vh - ${HEADER_HEIGHT_SM}rem)`,
}), media({ minWidth: 700 }, {
  top: `${HEADER_HEIGHT_LG}rem`,
  height: `calc(100vh - ${HEADER_HEIGHT_LG}rem)`,
}));
const asideStyle = style(flex, vertical, {
  position: 'fixed',
  right: '100vw',
  width: '25rem',
  overflow: 'hidden',
  transitionDuration: '600ms',
  transitionTimingFunction: 'ease-in-out',
  background: 'white',
  padding: '2rem',
  zIndex: 100,
}, media({ minWidth: 0, maxWidth: 699 }, {
  top: `${HEADER_HEIGHT_SM}rem`,
  height: `calc(100vh - ${HEADER_HEIGHT_SM}rem)`,
}), media({ minWidth: 700 }, {
  top: `${HEADER_HEIGHT_LG}rem`,
  height: `calc(100vh - ${HEADER_HEIGHT_LG}rem)`,
}));
const asideVisibleStyle = style({
  right: 'calc(100vw - 25rem)',
});
const navStyle = style(flex, vertical, {
  lineHeight: '1.5',
  fontSize: '3rem',
  color: VlLogoGrey.toString(),
  $nest: {
    '&>*:hover': {
      textDecoration: 'underline',
      color: VlLogoGrey.darken(0.5).toString(),
    },
  },
});

interface IStateProps {
  visible: boolean;
}
interface IDispatchProps {
  toggleMenu: Redux.ActionCreator<IToggleMenuAction>;
};
class BaseSideNav extends React.Component<IStateProps & IDispatchProps, any> {
  public render() {
    const overlay = (
      <div className={overlayStyle}
        onClick={this.props.toggleMenu} />
    );
    return (
      <div>
        {this.props.visible ? overlay : null}
        <aside className={classes(asideStyle, this.props.visible && asideVisibleStyle)}>
          <nav className={navStyle}>
            <Link to='/'>Forsíða</Link>
            <Link to='/veislur'>Veislur</Link>
            <Link to='/smurbraud'>Smurbraud</Link>
            <Link to='/tertur'>Tertur</Link>
            <Link to='/smarettir'>Smáréttir</Link>
            <Link to='/veislusalur'>Salur</Link>
            <Link to='/motuneyti'>Mötuneyti</Link>
            <Link to='/about'>Um okkur</Link>
          </nav>
        </aside>
      </div>
    );
  }
}

export const SideNav = connect<IStateProps, IDispatchProps, {}>(
  (state: IStore) => ({
    visible: state.shell.isMenuToggled,
  }),
  (dispatch: any) => ({
    toggleMenu: () => dispatch(createToggleMenuAction()),
  })
)(BaseSideNav);
