import * as React from 'react';
import { Link } from 'react-router';
import { style }  from 'typestyle';
import { flex, vertical } from 'csstips';
import { SubNav, activeLinkStyle } from 'components/SubNav';

const divStyle = style(flex, vertical, {

});

export class VeislurMaster extends React.Component<any, any> {
  public render() {
    return (
      <div className={divStyle}>
        <SubNav>
          <Link activeClassName={activeLinkStyle} to='/veislur/hladbord'>Hlaðborð</Link>
          <Link activeClassName={activeLinkStyle} to='/veislur/vidburdir'>Viðburðir</Link>
          <Link activeClassName={activeLinkStyle} to='/veislur/matsedlar'>Matseðlar</Link>
        </SubNav>
        {this.props.children}
      </div>
    );
  }
}
