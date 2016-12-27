import * as React from 'react';
import { Link } from 'react-router';
import { style, media } from 'typestyle';
import { hideAtRange } from 'utils/style';
import { VlLogoRed, VlLogoGrey } from 'app/colors';
import { HEADER_HEIGHT_SM, HEADER_HEIGHT_LG }  from './Header';

export const SUB_HEADER_HEIGHT = 3;
const navListStyle = style({
  padding: '0 1rem',
  fontSize: '1.7rem',
  fontWeight: 'lighter',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  color: VlLogoGrey.toString(),
  $nest: {
    '&>*:hover': {
      textDecoration: 'underline',
    },
  },
},
  media({ type: 'print' }, { display: 'none' }),
  media({ type: 'screen', minWidth: 500 }, { padding: '0 2rem' }),
  media({ type: 'screen', minWidth: 900 }, { fontSize: '2.2rem' }),
  media({ minWidth: 0, maxWidth: 699 }, {
    height: `${HEADER_HEIGHT_SM + SUB_HEADER_HEIGHT}rem`,
  }),
  media({ minWidth: 700 }, {
    height: `${HEADER_HEIGHT_LG + SUB_HEADER_HEIGHT}rem`,
  }),
);
const activeLinkStyle = style({
  textDecoration: 'underline',
  color: VlLogoRed.toString(),
  fontSize: '1.8rem',
}, media({ minWidth: 900 }, { fontSize: '2.3rem' }));
export const SubHeader = () => (
  <nav className={navListStyle}>
    <Link activeClassName={activeLinkStyle} to='/veislur'>Veislur</Link>
    <Link activeClassName={activeLinkStyle} to='/smurbraud' className={style(hideAtRange(0, 395))}>Smurbraud</Link>
    <Link activeClassName={activeLinkStyle} to='/tertur'>Tertur</Link>
    <Link activeClassName={activeLinkStyle} to='/smarettir'>Smáréttir</Link>
    <Link activeClassName={activeLinkStyle} to='/veislusalur' className={style(hideAtRange(0, 460))}>Salur</Link>
    <Link activeClassName={activeLinkStyle} to='/motuneyti'>Mötuneyti</Link>
  </nav>
);
