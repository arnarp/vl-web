import * as React from 'react';
import { style, media } from 'typestyle';
import { flex, vertical, horizontal, center, aroundJustified } from 'csstips';
import { VlLogoGrey, VlLogoRed } from 'app/colors';
import { hideInPrint } from 'utils/style';

export const FOOTER_HEIGHT = 18;

const footerStyle = style(flex, vertical, center, {
  height: `${FOOTER_HEIGHT}rem`,
  background: VlLogoGrey.lighten(0.5).toString(),
  padding: '2rem 1rem',
  color: VlLogoGrey.toString(),
  lineHeight: '1.5',
  fontSize: '1.2rem',
  $nest: {
    '&::before': {
      content: '""',
      height: '0.1rem',
      width: '80%',
      background: VlLogoRed.toString(),
      marginBottom: '2rem',
    },
  },
},
  media({type: 'print'}, {
    height: 'auto',
    background: 'none',
  })
);
const infoStyle = style(
  flex,
  vertical,
  {
    height: '100%',
  },
  media({type: 'print'}, horizontal, aroundJustified, { width: '100%'})
);

export const Footer = () => (
  <footer className={footerStyle}>
    <div className={infoStyle}>
      <span>Veislulist ehf | Skútan</span>
      <span>Hólshrauni 3 220 Hafnarfirði</span>
      <span>sími 555-1810</span>
      <span className={style(hideInPrint)}>kt: 680296-2359</span>
    </div>
  </footer>
);
