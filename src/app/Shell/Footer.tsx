import * as React from 'react';
import { style } from 'typestyle';
import { flex, vertical, center } from 'csstips';
import { VlLogoGrey, VlLogoRed } from 'app/Shell/colors';

export const FOOTER_HEIGHT = 18;

const footerStyle = style(flex, vertical, center, {
  height: `${FOOTER_HEIGHT}rem`,
  background: VlLogoGrey.lighten(0.5),
  padding: '2rem 1rem',
  color: VlLogoGrey,
  lineHeight: '1.5',
  fontSize: '1.2rem',
  $nest: {
    '&::before': {
      content: '""',
      height: '0.1rem',
      width: '80%',
      background: VlLogoRed,
      marginBottom: '2rem',
    },
  },
});
const infoStyle = style(
  flex,
  vertical,
  {
    height: '100%',
  });

export const Footer = () => (
  <footer className={footerStyle}>
    <div className={infoStyle}>
      <span>Veislulist ehf | Skútan</span>
      <span>Hólshrauni 3 220 Hafnarfirði</span>
      <span>sími 555-1810</span>
      <span>kt: 680296-2359</span>
    </div>
  </footer>
);
