import * as React from 'react';
import { connect } from 'react-redux';
import { style, media } from 'typestyle';
import { vertical, centerJustified} from 'csstips';
import { IStore } from 'store';
import { VlLogoRed } from 'app/colors';
import { IToggleMenuAction } from './actions';
import { createToggleMenuAction } from './action-creators';
import { MenuButton } from './MenuButton';
import { Logo } from './Logo';

export const HEADER_HEIGHT_SM = 5.5;
export const HEADER_HEIGHT_LG = 7.5;

const leftStyle = style(vertical, centerJustified, {
  width: '15%',
  minWidth: '5.5rem',
},
  media({ type: 'print' }, { display: 'none' }),
  media({ maxWidth: 400 }, { width: '20%' }),
);
const centerStyle = style({
  width: '70%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
},
  media({ type: 'print' }, { width: '100%' }),
  media({ minWidth: 0, maxWidth: 400 }, { width: '80%' })
);
const rightStyle = style({
  width: '15%',
},
  media({ type: 'print' }, { display: 'none' }),
  media({ minWidth: 0, maxWidth: 400 }, { display: 'none' }),
);
const headerStyle = style({
  display: 'flex',
  width: '100vw',
  background: 'white',
  zIndex: 100,
},
  media({ minWidth: 0, maxWidth: 699 }, { height: `${HEADER_HEIGHT_SM}rem` }),
  media({ minWidth: 700 }, { height: `${HEADER_HEIGHT_LG}rem` }),
  media({ type: 'print' }, { height: '5rem' }),
  media({ type: 'screen' }, { position: 'fixed' }),
  media({ minWidth: 0, maxWidth: 499 }, { padding: '0 1rem 0.3rem 1rem'}),
  media({ minWidth: 500 }, { padding: '0 2rem 0.3rem 2rem' }),
);
const imgStyle = style(
  media({ minWidth: 0, maxWidth: 699}, { width: '15rem', height: '5rem' }),
  media({ minWidth: 700 }, { width: '21rem', height: '7rem' }),
);
const phoneNumberStyle = style({
  fontSize: '3rem',
  color: VlLogoRed.toString(),
  display: 'flex',
  alignItems: 'flex-end',
  lineHeight: 0.8,
},
  media({ type: 'print' }, { display: 'none' }),
  media({ maxWidth: 400 }, { fontSize: '2rem' })
);

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
