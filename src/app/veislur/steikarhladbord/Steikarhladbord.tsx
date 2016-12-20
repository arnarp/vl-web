import * as React from 'react';
import { style } from 'typestyle';
import { flex, vertical, endJustified } from 'csstips';
import { VlLogoGrey } from 'app/colors';

const mainStyle = style(flex, vertical, {

});

const imgDivStyle = style(flex, vertical, endJustified, {
  backgroundImage: 'url(https://s3-eu-west-1.amazonaws.com/vl-web/images/_Q1A1208_900.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '-20rem -5rem',
  height: '50vh',
});

const hStyle = style({
  background: 'white',
  color: VlLogoGrey.toString(),
  textAlign: 'center',
  mixBlendMode: 'screen',
  fontSize: '6rem',
  width: '100%',
  margin: 0,
  padding: '2rem',
  position: 'relative',
  top: '0.1rem',
  fontWeight: 'normal',
  textDecoration: 'underline',
});

const divStyle = style({
  minHeight: '8rem',
  padding: '1rem',
  fontSize: '1.6rem',
});

export const Steikarhladbord = () => (
  <div className={mainStyle}>
    <div className={imgDivStyle}>
      <h1 className={hStyle}>Kaffihlaðborð</h1>
    </div>
    <div className={divStyle}>
      <p>Við bjóðum upp á kaffihlaðborð fyrir öll tilefni</p>
    </div>
  </div>
);
