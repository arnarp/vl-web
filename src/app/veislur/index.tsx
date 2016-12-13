import * as React from 'react';
import { Link } from 'react-router';
import { style } from 'typestyle';
import { flex, vertical, horizontal, betweenJustified } from 'csstips';
import { VlLogoGrey } from 'app/shell/colors';
import { SteakHero } from './SteakHero';

const divStyle = style(flex, vertical, {

});
const navStyle = style(flex, horizontal, betweenJustified, {
  fontSize: '1.4rem',
  color: VlLogoGrey,
  fontWeight: 'lighter',
  padding: '1rem',
});

export class CateringIndex extends React.Component<any, any> {
  public render() {
    return (
      <div className={divStyle}>
        <nav className={navStyle}>
          <Link to="hladbord">Hlaðborð</Link>
          <Link to="vidburdir">Viðburðir</Link>
          <Link to="matsedlar">Matseðlar</Link>
        </nav>
        <SteakHero />
      </div>
    );
  }
}
