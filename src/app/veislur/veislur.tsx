import * as React from 'react';
import { Link } from 'react-router';
import { style }  from 'typestyle';
import { flex, vertical, horizontal, aroundJustified } from 'csstips';
import { VlLogoGrey }  from 'app/colors';
import { SteakHero }  from './SteakHero';

const divStyle = style(flex, vertical, {

});
const navStyle = style(flex, horizontal, aroundJustified, {
  fontSize: '1.6rem',
  color: VlLogoGrey,
  fontWeight: 'lighter',
  padding: '1rem',
});

export class Veislur extends React.Component<any, any> {
  public render() {
    return (
      <div className={divStyle}>
        <nav className={navStyle}>
          <Link to='hladbord'>Hlaðborð</Link>
          <Link to='vidburdir'>Viðburðir</Link>
          <Link to='matsedlar'>Matseðlar</Link>
        </nav>
        <SteakHero />
      </div>
    );
  }
}
