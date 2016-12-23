import * as React from 'react';
import { Link } from 'react-router';
import { style, media } from 'typestyle';
import { hideAt } from 'utils/style';
import { VlLogoRed, VlLogoGrey } from 'app/colors';

export const SUB_HEADER_HEIGHT = 8.5;
const navListStyle = style({
  height: `${SUB_HEADER_HEIGHT}rem`,
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
  media({type: 'print'}, { display: 'none'})
);
const activeLinkStyle = style({
  textDecoration: 'underline',
  color: VlLogoRed.toString(),
  fontSize: '1.8rem',
});
export const SubHeader = () => (
  <nav className={navListStyle}>
    <Link activeClassName={activeLinkStyle} to='/veislur'>Veislur</Link>
    <Link activeClassName={activeLinkStyle} to='/smurbraud' className={hideAt(395)}>Smurbraud</Link>
    <Link activeClassName={activeLinkStyle} to='/tertur'>Tertur</Link>
    <Link activeClassName={activeLinkStyle} to='/smarettir'>Smáréttir</Link>
    <Link activeClassName={activeLinkStyle} to='/veislusalur' className={hideAt(460)}>Salur</Link>
    <Link activeClassName={activeLinkStyle} to='/motuneyti'>Mötuneyti</Link>
  </nav>
);
