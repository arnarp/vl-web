import * as React from 'react';
import { Link } from 'react-router';
import { style }  from 'typestyle';
import { flex, vertical } from 'csstips';
import { SubNav, activeLinkStyle } from 'components/SubNav';

const divStyle = style(flex, vertical, {

});

export class HladbordMaster extends React.Component<any, any> {
  public render() {
    return (
      <div className={divStyle}>
        <SubNav>
          <Link activeClassName={activeLinkStyle} to='/veislur/hladbord/steikarhladbord'>Steikarhlaðborð</Link>
          <Link activeClassName={activeLinkStyle} to='/foo'>???</Link>
          <Link activeClassName={activeLinkStyle} to='/foo'>???</Link>
        </SubNav>
        {this.props.children}
      </div>
    );
  }
}
