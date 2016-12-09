import * as React from 'react';
import { style } from 'typestyle';
import MenuButton from './MenuButton';
import { IToggleMenuAction } from '../actions';
import { createToggleMenuAction } from '../action.creators';
import { connect } from 'react-redux';
import IStore from '../../../store';

const headerStyle = style({
  display: 'flex',
  height: '5.5rem',
});

// const imgStyle = style({
//   height: '5rem',
// });

interface IStateProps {
  isMenuToggled: boolean;
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
        <MenuButton
          isToggled={this.props.isMenuToggled}
          onClick={this.props.toggleMenu} />
      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  console.log('mapstate ' + JSON.stringify(state));
  return {
    isMenuToggled: state.shell.isMenuToggled,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenu: () => dispatch(createToggleMenuAction()),
});

export default connect<IStateProps, IDispatchProps, IHeaderProps>(
  mapStateToProps, mapDispatchToProps)(Header);

// <img className={imgStyle} src={require('./logo.svg')} />
