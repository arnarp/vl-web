import * as React from 'react';
import { Link } from 'react-router';
import { style, classes } from 'typestyle';
import { flex, vertical, horizontal, endJustified, center } from 'csstips';
import { VlLogoGrey } from 'app/colors';
import { AngleRight }  from 'icons';

const linkStyle = style(flex, vertical, center, {
});
const imgStyle = style(flex, vertical, endJustified, center, {
  height: 'calc(100vh - 23rem)',
  maxHeight: '50rem',
  width: '100%',
  backgroundImage: `url(https://s3-eu-west-1.amazonaws.com/vl-web/images/steikur_pura_900.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '-15rem -5rem',
  color: 'white',
  fontFamily: 'Poppins',
  fontWeight: 'lighter',
});
const headerStyle = style({
  fontWeight: 'lighter',
  fontSize: '5rem',
  textAlign: 'center',
  background: 'white',
  color: VlLogoGrey.toString(),
  mixBlendMode: 'screen',
  position: 'relative',
  margin: 0,
  top: '0.1rem',
  textDecoration: 'underline',
  width: '100%',
  padding: '2rem',
});
const paragraphStyle = style({
  color: VlLogoGrey.toString(),
  fontSize: '1.6rem',
  padding: '0 2rem',
});
const iconStyle = style({
  height: '5rem',
  strokeWidth: '1rem',
});
const nanarPStyle = style(flex, horizontal, endJustified, center, {
  padding: '2rem',
});

export const SteikarhladbordHero = () => (
  <Link className={linkStyle} to='/veislur/steikarhladbord'>
    <div className={imgStyle}>
      <h1 className={headerStyle}>Steikarhlaðborð</h1>
    </div>
    <p className={paragraphStyle}>
      Við bjóðum upp á dýrindis steikarhlaðborð, hentug við öll tilefni þar sem skal gera vel við gesti í mat og drykk.
    </p>
    <p className={classes(nanarPStyle, paragraphStyle)}>
      Skoða nánar <AngleRight stroke={VlLogoGrey.toString()} className={iconStyle} />
    </p>
  </Link>
);
